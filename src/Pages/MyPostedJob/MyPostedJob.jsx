import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SinglePostJob from '../../Components/SinglePostJob/SinglePostJob';
import { Helmet } from 'react-helmet-async';

const MyPostedJob = () => {
  
  const data = useLoaderData();
  const [allData, setData] = useState(data);

  return (
    <div>
       <Helmet>
        <title>my posted job | job website</title>
      </Helmet>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {
        allData.map(job => <SinglePostJob
          job={job}
          key={job._id}
          allData={allData}
          setData={setData} />)
    }
    </div>
   </div>
  );
};

export default MyPostedJob;