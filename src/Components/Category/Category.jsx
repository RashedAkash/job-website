import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ items }) => {
  console.log(items);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {
        items.map(cat=> <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='h-[200px] w-full' src={cat.img} alt="Shoes" /></figure>
  <div className="card-body">
            <h2 className="card-title">{cat.jobTitle}</h2>
            <p className="card-title">Dead line : {cat.deadline}</p>
            <p className=' text-start'><span className='font-medium'> Price range : </span>{cat.priceRange }</p>
            <p className='text-start'>{cat.shortDescription}</p>
            
            
            
    <div className="card-actions justify-center">
              <Link to={`/job`}>
              <button className="btn bg-blue-700 text-white">Bid Now</button></Link>
    </div>
  </div>
</div>)
      }
    </div>
  );
};

export default Category;