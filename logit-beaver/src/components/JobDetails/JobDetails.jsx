import React, { useState } from "react";
import styles from "./JobDetails.module.css";
import JobNotes from "../JobNotes/JobNotes";


// Component for the Job Details Panel to display detailed information about the selected job (from the Job List Panel)
export default function JobDetails({ job, onResetSelection }) {
  // State to manage the Job Status
  const [status, setStatus] = useState(job ? job.status : "");

  // Function to handle changes in Job Status
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  // If no job is selected, display a message to prompt User to select a job or create a new job (placeholder button for Job Creation feature)
  if (!job) {
    return (
      <div className={styles.jobDetailsPaneEmpty}>
        <h1> Select a job from the list to view </h1>
        <h1> or </h1>
        <button className={styles.createJobButton}> Create a New Job </button>
      </div>
    );
  }

  // Function to format Job Creation Date (string) into a readable format
  const formatDate = (dateString) => {
    const options = {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className={styles.jobDetailsPane}>
      {/* Job header containing selected Job's ID (Job Number), title, and creation date, as well as the Job Status dropdown button */}
      <div className={styles.jobDetailsHeader}>
        <div className={styles.jobnumberAndTitle}>
          <h2>
            Job # {job.job_id} - {job.job_title}
          </h2>
          <p className={styles.jobCreationDate}>
            {" "}
            Created on {formatDate(job.date_created)}
          </p>
        </div>

        {/* Dropdown button to change the selected Job's Status */}
        <button className={styles.jobStatus}>
          <select
            value={status}
            onChange={handleStatusChange}
            className={styles.jobStatusDropdown}
          >
            <option value="scheduled">Scheduled</option>
            <option value="active">Active</option>
            <option value="invoicing">Invoicing</option>
            <option value="completed">Completed</option>
          </select>
        </button>
      </div>

      {/* Job site address */}
      <div className={styles.jobSite}>
        <h3>Site Address: </h3>
        <p>{job.job_address}</p>
      </div>

      {/* Job Customer details */}
      <div className={styles.jobCustomer}>
        <h3>Customer Details:</h3>
        <div className={styles.jobCustomerDetails}>
          <p>Name: {job.customer.customer_name}</p>
          <p>Address: {job.customer.customer_address}</p>
          <p>Phone: {job.customer.customer_contact_number}</p>
          <p>Email: {job.customer.customer_email}</p>
        </div>
      </div>

      {/* Job Notes section */}
      <div className={styles.jobDetailsNotes}>
        <JobNotes job={job} />
      </div>

      {/* Button to reset the job selection and view all Jobs in the Job List Panel */}
      <div className={styles.viewAllJobsButtonContainer}>
        <button onClick={onResetSelection} className={styles.viewAllJobsButton}>
          View All Jobs
        </button>
      </div>
    </div>
  );
}
