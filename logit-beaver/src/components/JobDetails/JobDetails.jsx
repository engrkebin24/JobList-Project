import React, { useState } from "react";
import styles from "./JobDetails.module.css";
import JobNotes from "../JobNotes/JobNotes";

export default function JobDetails({ job, onResetSelection }) {
  const [status, setStatus] = useState(job ? job.status : "");

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  if (!job) {
    return (
      <div className={styles.jobDetailsPaneEmpty}>
        <h1> Select a job from the list to view </h1>
        <h1> or </h1>
        <button className={styles.createJobButton}> Create a New Job </button>   
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className={styles.jobDetailsPane}>
      
      <div className={styles.jobDetailsHeader}>
        <div className={styles.jobnumberAndTitle}>
        <h2>Job # {job.job_id} - {job.job_title}</h2>
        <p className={styles.jobCreationDate}> Created on {formatDate(job.date_created)}</p>
        </div>
        
        


        <button className={styles.jobStatus}>
        <select value={status} onChange={handleStatusChange}>
          <option value="scheduled">Scheduled</option>
          <option value="active">Active</option>
          <option value="invoicing">Invoicing</option>
          <option value="completed">Completed</option>
        </select>
      </button>


      </div>
          

    
      <div className={styles.jobSite}> 
        <h3>Site Address: </h3>
        <p>{job.job_address}</p>
      </div>
      
   
      <div className={styles.jobCustomer}>
        <h3>Customer Details:</h3>
        <div className={styles.jobCustomerDetails}>
            <p>Name: {job.customer.customer_name}</p>
            <p>Address: {job.customer.customer_address}</p>
            <p>Phone: {job.customer.customer_contact_number}</p>
            <p>Email: {job.customer.customer_email}</p>
        </div>
      </div>

      <div className={styles.jobDetailsNotes}>
            <JobNotes job={job} />
      </div>
      

      
    
        <div className={styles.viewAllJobsButtonContainer}>
          <button onClick={onResetSelection} className={styles.viewAllJobsButton}>View All Jobs</button>
        </div>
      </div>
  );
}