import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UsersDetails from '../../Components/UsersDetails/UsersDetails';

const MyBids = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>

      
     {
        users.map(user => <UsersDetails
          key={user._id}
          user={user}
        />)
      }
      
    </div>
  );
};

export default MyBids;