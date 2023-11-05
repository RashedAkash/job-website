import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePostJob from '../../Components/SinglePostJob/SinglePostJob';

const MyPostedJob = () => {
  const data = useLoaderData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        data.map(job=> <SinglePostJob job={job} key={job._id} />)
    }
    </div>
  );
};

export default MyPostedJob;