import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit }) => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(feedback);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <form onSubmit={handleSubmit} style={{ display: 'inline-block' }}>
        <label style={{ fontSize: '43px' }}>
          Feedback:
          <br />
          

          <label for="message" class="block mb-2 text-sm font-medium text-white dark:text-black"></label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>


        </label>
        <br />
        <button type="submit" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ fontSize: '18px', marginTop: '10px' }}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

const ThankYouMessage = ({ onReset }) => (
  <div style={{ fontSize: '40px', marginTop: '30px' }}>
 <p>Thank you for your feedback!</p>
    <p>Your feedback will be reviewed.</p> 
    
    <button onClick={onReset} class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" style={{ fontSize: '18px', marginTop: '10px' }}>
      Reset
    </button>
  </div>
);


const Feedback = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (feedback) => {
    // You can handle the submission logic here (e.g., send feedback to a server).
    // For simplicity, this example just sets the 'submitted' state to true.
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
  };

  return (
    <div style={{ textAlign: 'center', fontSize: '18px' }}>
      {submitted ? (
        <ThankYouMessage onReset={handleReset} />
      ) : (
        <FeedbackForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default Feedback;