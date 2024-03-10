import React, { useState } from 'react';

const PromoCode = () => {
  const [selectedCode, setSelectedCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  const promoCodes = {
    'SUMMER20': 0.2, // 20% discount for the code 'SUMMER20'
    'SAVE10': 0.1,   // 10% discount for the code 'SAVE10'
    'FALL15': 0.15,  // 15% discount for the code 'FALL15'
    // Add more promo codes as needed
  };

  const applyPromoCode = () => {
    const discount = promoCodes[selectedCode];
    if (discount !== undefined) {
      // Valid promo code
      setAppliedDiscount(discount);
    } else {
      // Invalid promo code
      setAppliedDiscount(0);
      alert('Invalid promo code. Please try again.');
    }
  };

  return (
    <div className='promocode'>
      <h2 className='promo'>Promo Code</h2>
      <label>
        Select Promo Code:
        <select
          value={selectedCode}
          onChange={(e) => setSelectedCode(e.target.value)}
        >
          <option value="">Select Promo Code</option>
          {Object.keys(promoCodes).map((code) => (
            <option key={code} value={code}>{code}</option>
          ))}
        </select>
      </label>

      <button onClick={applyPromoCode}>Apply</button>

      {appliedDiscount > 0 && (
        <p>
          Discount applied: {appliedDiscount * 100}%
        </p>
      )}

      
    </div>
  );
};

export default PromoCode;
