import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';

const JobDetails = () => {
  const data = useLoaderData();
  console.log(Object.keys(data).join(','));
  const { _id, jobTitle, deadline, priceRange, shortDescription, bidNowButton, category, img } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const email = form.email.value;
    const price = form.price.value;
    const deadLine = form.deadLine.value;
    console.log(fName,lName,email,price,deadLine);
  }

  return (
    <div>
     <section className="p-4 lg:p-8 dark:bg-gray-200 dark:text-gray-100">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={img} alt="" className="h-80  aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:dark:bg-blue-900">
				<span className="text-xs uppercase dark:text-gray-400"></span>
              <h3 className="text-3xl font-bold">{ jobTitle}</h3>
              <p className="my-6 dark:text-gray-400">{shortDescription }</p>
              <p className='mb-2'><span className=' text-xl'>Price Range :</span> {priceRange }</p>
              <p ><span className='text-xl'>Deadline : </span>{deadline }</p>
			</div>
		</div>
	
	</div>
      </section>
      <SectionTitle title='Place your bid' />
      <section className="p-6 dark:bg-gray-200 dark:text-gray-50">
        
	<form  onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-blue-900">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Personal Inormation</p>
				<p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">First name</label>
					<input id="firstName" name="firstName" type="text" placeholder="First name" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label  className="text-sm">Last name</label>
					<input id="lastName" name="lastName" type="text" placeholder="Last name" className="w-full rounded-md p-3  focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label className="text-sm">Email</label>
					<input id="email" name="email" type="email" placeholder="Email" className="w-full rounded-md p-3 focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Price</label>
					<input id="price" name="price" type="text" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-2">
					<label  className="text-sm">Dead / Line</label>
					<input id="deadLine" name="deadLine" type="date" placeholder="" className="w-full p-3 rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
				</div>
				
            </div>
            
		</fieldset>
         
            <div className=' flex justify-center'><button className="btn btn-wide bg-blue-900 text-white">Bid on the project</button></div>
          
	</form>
</section>
    </div>
  );
};

export default JobDetails;