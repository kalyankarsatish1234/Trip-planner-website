import React from 'react';

const RefundPolicy = (props) => {
  const { route, cancellationPenalty, cancelBetween, startTime, endTime, refundPolicyLink } = props;
  const refundPolicyData = {
    route: 'DEL-BOM',
    cancellationPenalty: 3800,
    cancelBetween: 6189,
    startTime: '12 Feb, 20:05',
    endTime: '12 Feb, 23:05',
    refundPolicyLink: '#', // Replace with the actual link
  };

  

  return (
    <div className="cancellation-refund-policy-container">
      <h2 className='cancel'>Cancellation Refund Policy</h2>
      <p>
        <strong>Route:</strong> {route}
      </p>
      <p>
        <strong>Cancellation Penalty:</strong> ₹{cancellationPenalty}
      </p>
      <p>
        <strong>Cancel Between (IST):</strong> ₹{cancelBetween}
      </p>
      <p>
        <strong>Now:</strong> {startTime}
      </p>
      <p>
        <strong>{endTime}</strong>
      </p>
      <p>
        For more details, you can view the complete <a href={refundPolicyLink} className="refund-policy-link">Cancellation and Refund Policy</a>.
      </p>
    </div>
  );
};

export default RefundPolicy;
