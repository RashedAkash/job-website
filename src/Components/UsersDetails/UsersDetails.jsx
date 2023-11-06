import React from 'react';
import BidComponent from '../BidComponet/BidComponet';

const UsersDetails = ({ user }) => {
  console.log(user);
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
             
              <td>{user.fName }</td>
              <td>{user.jobTitle }</td>
              <td>{user.price}</td>
              <td>{user.deadLine}</td>
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