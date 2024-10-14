import React from "react";
import JobRow from "../JobRow/JobRow";


export default function JobListPanel({ jobs, onJobClick }) {
  return (
    <div className="JobRows">
      {jobs.map(job => (
        <div key={job.job_id} onClick={() => onJobClick(job)}>
          <JobRow job={job} />
        </div>
      ))}
    </div>
  );
}