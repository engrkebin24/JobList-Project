import React from "react";
import JobRow from "../JobRow/JobRow";

// JobListPanel component to display  a list of jobs (based from the JobRow component)
export default function JobListPanel({ jobs, onJobClick }) {
  return (
    <div className="JobRows">
      {/* Map through the jobs array and render a JobRow for each job */}
      {jobs.map(job => (

        <div key={job.job_id} onClick={() => onJobClick(job)}>
          {/* Render the JobRow component for each job */}
          <JobRow job={job} />
          
        </div>
      ))}
    </div>
  );
}