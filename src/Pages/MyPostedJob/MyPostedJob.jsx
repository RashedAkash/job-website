import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePostJob from '../../Components/SinglePostJob/SinglePostJob';

const MyPostedJob = () => {
  
  const data = useLoaderData();
  const [allData, setAllData] = useState(data);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        allData.map(job=> <SinglePostJob job={job} key={job._id} />)
    }
    </div>
  );
};

export default MyPostedJob;