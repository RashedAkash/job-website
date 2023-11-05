import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const data = useLoaderData();
  console.log(Object.keys(data).join(','));
  const { _id, jobTitle, deadline, priceRange, shortDescription, bidNowButton, category, img } = data;

  return (
    <div>
     <section className="p-4 lg:p-8 dark:bg-gray-200 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img} alt="" className="h-80  aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:dark:bg-blue-700">
				<span className="text-xs uppercase dark:text-gray-400"></span>
              <h3 className="text-3xl font-bold">{ jobTitle}</h3>
              <p className="my-6 dark:text-gray-400">{shortDescription }</p>
              <p className='mb-2'><span className=' text-xl'>Price Range :</span> {priceRange }</p>
              <p ><span className='text-xl'>Deadline : </span>{deadline }</p>
			</div>
		</div>
	
	</div>
</section>
    </div>
  );
};

export default JobDetails;