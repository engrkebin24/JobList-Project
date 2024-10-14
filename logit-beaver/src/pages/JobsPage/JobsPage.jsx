import React, { useState } from "react";
import JobListPanel from "../../components/JobListPanel/JobListPanel";
import JobDetails from "../../components/JobDetails/JobDetails";
import NavBar from "../../components/NavBar/NavBar";
import styles from "./JobsPage.module.css";

const jobs = [
  {
    job_id: "01",
    job_title: "Dam Reinforcement",
    job_status: "Scheduled",
    customer: {
      customer_id: "001",
      customer_name: "Hedda Lettuce",
      customer_address: "4 Saffron Street, Birkdale, Auckland 0626",
      customer_contact_number: "02108294493",
      customer_email: "hedda.lettuce1990@icloud.com"
    },
    date_created: "2024-01-21T21:00:00Z", 
    job_address: "58A Akoranga Drive, Northcote, Auckland 0627",
    notes: ["Inspected dam for cracks – scheduled reinforcement next week."],
  },
  {
    job_id: "02",
    job_title: "Stream Clearing",
    job_status: "Active",
    customer: {
      customer_id: "002",
      customer_name: "Ivanna Drink",
      customer_address: "88 Cobham Crescent, Kelston, Auckland 0602",
      customer_contact_number: "02244397826",
      customer_email: "ivana_drink@gmail.com"
    },
    date_created: "2024-02-23T23:00:00Z",
    job_address: "1 West Coast Road, Glen Eden, Auckland 0602",
    notes: ["Cleared debris from stream path. Water flow back to normal."],
  },
  {
    job_id: "03",
    job_title: "Lodge Maintenance",
    job_status: "Invoicing",
    customer: {
      customer_id: "003",
      customer_name: "Barry Cade",
      customer_address: "46 Kaikoura Street, Henderson, Auckland 0612",
      customer_contact_number: "02745158765",
      customer_email: "barry34cade@zoho.com"
    },
    date_created: "2024-02-25T04:00:00Z",
    job_address: "46 Kaikoura Street, Henderson, Auckland 0612",
    notes: [],
  },
  {
    job_id: "04",
    job_title: "Lodge Expansion",
    job_status: "Invoicing",
    customer: {
      customer_id: "004",
      customer_name: "Barry Cade",
      customer_address: "46 Kaikoura Street, Henderson, Auckland 0612",
      customer_contact_number: "02103647896",
      customer_email: "barry34cade@zoho.com"
    },
    date_created: "2024-04-29T23:30:00Z",
    job_address: "520 Queen Street, Auckland CBD, Auckland 1010",
    notes: ["Checked dam foundation. All logs secure, no leaks detected.",
      "Installed new lodge entry; client requested extra water-proofing."],
  },
  {
    job_id: "05",
    job_title: "Water Diversion Project",
    job_status: "Completed",
    customer: {
      customer_id: "005",
      customer_name: "Justin Time",
      customer_address: "72B Weymouth Road, Manurewa, Auckland 2102",
      customer_contact_number: "02114125798",
      customer_email: "justin_time_17@mail.com"
    },
    date_created: "2024-05-23T02:00:00Z",
    job_address: "31 Weymouth Road, Manurewa, Auckland 2102",
    notes: [],
  },
  {
    job_id: "06",
    job_title: "Timber Delivery",
    job_status: "To Price",
    customer: {
      customer_id: "006",
      customer_name: "Ella Vate",
      customer_address: "45 Figaro Crescent, Takanini 2112",
      customer_contact_number: "02114125798",
      customer_email: "ella.vate2402@outlook.co.nz"
    },
    date_created: "2023-12-20T03:25:00Z",
    job_address: "45 Figaro Crescent, Takanini 2112",
    notes: ["Delivered fresh timber for lodge expansion, awaiting client approval.",
            "Client requested extra logs for winter prep. Sourced materials for next visit.",
            "Inspected water diversion project. Confirmed stable streamflow."],
  },
  // More jobs...
];

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [sortCriteria, setSortCriteria] = useState({
    criteria: "id",
    order: "asc",
  });
  const [filterStatus, setFilterStatus] = useState("");

  const resetSelection = () => {
    setSelectedJob(null);
  };

  const toggleSortOrder = (criteria) => {
    setSortCriteria((prevState) => ({
      criteria,
      order:
        prevState.criteria === criteria && prevState.order === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const handleFilterChange = (event) => {
    setFilterStatus(event.target.value);
  };

  const getFilteredAndSortedJobs = () => {
    let filteredJobs = jobs;

    if (filterStatus) {
      filteredJobs = filteredJobs.filter((job) => job.job_status === filterStatus);
    }

    if (sortCriteria.criteria) {
      filteredJobs = filteredJobs.sort((a, b) => {
        let comparison = 0;
        if (sortCriteria.criteria === "id") {
          comparison = a.job_id.localeCompare(b.job_id);
        } else if (sortCriteria.criteria === "date") {
          comparison = new Date(a.date_created) - new Date(b.date_created);
        }
        return sortCriteria.order === "asc" ? comparison : -comparison;
      });
    }

    return filteredJobs;
  };

  return (
   
    <div>
       <NavBar />
   
      <div className={styles.sortAndFilterButtons}>
        <div className={styles.jobSortButtons}>
          <h3>Sort by:</h3>
          <button onClick={() => toggleSortOrder("id")} className={styles.jobIDSortButton}>
            {sortCriteria.criteria === "id" && sortCriteria.order === "asc"
              ? "Job No. ↑"
              : "Job No. ↓"}
          </button>
          <button onClick={() => toggleSortOrder("date")} className={styles.jobDateSortButton}>
            {sortCriteria.criteria === "date" && sortCriteria.order === "asc"
              ? "Date Created (Oldest First) "
              : "Date Created (Newest First) "}
        </button>

        </div>
        
        <div className={styles.jobFilterButtonContainer}>
          <h3>Filter by:</h3>
          <select onChange={handleFilterChange} className={styles.jobFilterButton}>
            <option value="">All</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Active">Active</option>
            <option value="Invoicing">Invoicing</option>
            <option value="Completed">Completed</option>
            <option value="To Price">To Price</option>
          </select>
        </div>
        
      </div>

      <div className={styles.jobListAndDetailsContainer}>
        <div className={styles.jobList}>
          <JobListPanel
            jobs={getFilteredAndSortedJobs()}
            onJobClick={setSelectedJob}
          />
        </div>
        <div className={styles.jobDetailsPane}>
          <JobDetails job={selectedJob} onResetSelection={resetSelection} />
        </div>
      </div>
    </div>
  );
}