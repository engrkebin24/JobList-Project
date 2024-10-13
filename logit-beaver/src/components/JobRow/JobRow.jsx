import React from "react";
import styles from "./JobRow.module.css";


export default function JobRow ({ job }) {
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
  
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "scheduled":
        return styles.scheduled;
      case "active":
        return styles.active;
      case "invoicing":
        return styles.invoicing;
      case "completed":
        return styles.completed;
      case "to price":
        return styles.toPrice;
      default:
        return "";
    }

  
  };

    return (
      <div className={styles.jobRow}>
        <div className={styles.jobHeader}>
          <h3>
            Job # {job.job_id} - {job.job_title}
            <br/>
            <span className={styles.jobCreationDate}>Created on {formatDate(job.date_created)}</span>
          </h3>
          
          <label className={`${styles.jobStatus} ${getStatusClass(job.job_status)}`}>
          {job.job_status}
        </label>
        </div>
      
        <div className={styles.jobCustomerAndSite}>
          <p>Customer: {job.customer.customer_name}</p>
          <p>Site Address: {job.job_address}</p>
        </div>
        
      </div>
    );
  }