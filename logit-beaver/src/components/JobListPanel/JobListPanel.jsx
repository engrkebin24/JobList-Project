import React from "react";
import JobRow from "../JobRow/JobRow";


export default function JobListPanel({ jobs }) {
  return (
    <div className="JobRows">
      {jobs.map(job => (
        <div key={job.job_id} >
          <JobRow job={job} />
        </div>
      ))}
    </div>
  );
}