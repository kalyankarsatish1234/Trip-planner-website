import React, { useState } from 'react';
import "../FeedbackForm/FeedbackForm.css";
const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can submit the feedback to your backend or handle it as needed
    console.log('Feedback submitted:', { name, email, phone, description, feedback, rating });
    setSubmitted(true);
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      {submitted ? (
        <p>Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </label>
          <br />
          <label>
            Phone Number:
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </label>
          <br />
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={handleDescriptionChange}
              required
            />
          </label>
          <br />
          <label>
            Feedback:
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              rows={4}
              cols={50}
              required
            />
          </label>
          <br />
          <label>
            Rating:
            <input
              type="number"
              value={rating}
              onChange={handleRatingChange}
              min="1"
              max="5"
              required
            />
          </label>
          <br />
          <button type="submit">Submit Feedback</button>
        </form>
      )}
    </div>
  );
};

export default FeedbackForm;
