import React from 'react';
import { useLoaderData } from 'react-router-dom';
import UsersDetails from '../../Components/UsersDetails/UsersDetails';
import { Helmet } from 'react-helmet-async';

const MyBids = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
<Helmet>
        <title>my bids | job website</title>
      </Helmet>
      
     {
        users.map(person => <UsersDetails
          key={person._id}
          person={person}
        />)
      }
      
    </div>
  );
};

export default MyBids;