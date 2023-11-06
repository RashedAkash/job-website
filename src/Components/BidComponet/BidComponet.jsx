import React, { useState } from 'react';

function BidComponent() {
  const [status, setStatus] = useState('pending');
  const [showCompleteButton, setShowCompleteButton] = useState(false);

  const handleAcceptBid = () => {
    setStatus('in progress');
    setShowCompleteButton(true);
  };

  const handleRejectBid = () => {
    setStatus('canceled');
  };

  const handleCompleteBid = () => {
    setStatus('complete');
    setShowCompleteButton(false);
  };

  return (
    <div>
      
      {status === 'pending' && (
        <div>
          <button className=' btn btn-success' onClick={handleAcceptBid}>Accept Bid</button>
          <button className='btn btn-warning' onClick={handleRejectBid}>Reject Bid</button>
        </div>
      )}
      {status === 'in progress' && showCompleteButton && (
        <button onClick={handleCompleteBid}>Complete</button>
      )}
    </div>
  );
}

export default BidComponent;
