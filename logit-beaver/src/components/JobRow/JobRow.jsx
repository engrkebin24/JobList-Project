import React from "react";
import styles from "./JobRow.module.css";

// Job Rows to display individual jobs in the Job List Panel

export default function JobRow ({ job }) {
  // Function to format Job Creation Date (string) into a readable format
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
  
   // Function to get the CSS class based on the job status
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
         {/* Job header containing job ID, title, and creation date */}
        <div className={styles.jobHeader}>
          <h3>
            Job # {job.job_id} - {job.job_title}
            <br/>
            <span className={styles.jobCreationDate}>
              Created on {formatDate(job.date_created)}
            </span>
          </h3>
          
          {/* Job status label */}
          <label className={`${styles.jobStatus} ${getStatusClass(job.job_status)}`}>
            {job.job_status}
          </label>
        </div>

          {/* Job customer and site address details */}
        <div className={styles.jobCustomerAndSite}>
          <p>Customer: {job.customer.customer_name}</p>
          <p>Site Address: {job.job_address}</p>
        </div>     
      </div>
    );
  }