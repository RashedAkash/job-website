import React from 'react';

const SectionTitle = ({title}) => {
  return (
    <div>
      <h2 className=' border-y-4 w-3/5 mx-auto border-blue-700 text-black text-4xl py-2 my-10 font-bold'>{title}</h2>
    </div>
  );
};

export default SectionTitle;