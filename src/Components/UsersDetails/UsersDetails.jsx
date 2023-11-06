import React from 'react';
import BidComponent from '../BidComponet/BidComponet';

const UsersDetails = ({ person }) => {
  console.log(person);
  return (
    <div>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Job</th>
        <th>Email</th>
        <th>Dead line</th>
        <th>Button</th>
      </tr>
    </thead>
     <tbody>
      {/* row 1 */}
      <tr className="bg-base-200">
             
              <td>{person.fName }</td>
              <td>{person.jobTitle }</td>
              <td>{person.price}</td>
              <td>{person.deadLine}</td>
              <button >
                <BidComponent />
              </button>
              
      </tr>
      
      
    </tbody>
  </table>
      </div> 
      
      
    </div>
  );
};

export default UsersDetails;