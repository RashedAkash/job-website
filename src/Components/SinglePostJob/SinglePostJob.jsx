import React from 'react';

const SinglePostJob = ({ job }) => {
  console.log(job);
  return (
    <div>
      <div className="card card-compact h-[500px]  bg-base-100 shadow-xl">
  <img src={job.img} className='h-[200px]' alt="" />
  <div className="card-body">
          <h2 className="card-title">{job.jobTitle }</h2>
          <p><span className='font-bold'>Category : </span>{ job.category}</p>
          <p><span className='font-bold'>Deadline : </span>{ job.deadline}</p>
          <p><span className='font-bold'>Description : </span>{ job.shortDescription}</p>
          <p><span className='font-bold'>priceRange : </span>{ job.priceRange}</p>
          
    <div className="card-actions justify-end">
      <button className="btn btn-primary bg-blue-900">Update</button>
      <button className="btn btn-warning">Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default SinglePostJob;