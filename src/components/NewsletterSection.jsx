import React, { useState } from 'react';

import usePosts from '@hooks/usePosts';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const { postData, isSubmitting } = usePosts('/subscribe');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postData({ email });
      console.log('Subscription successful:', response);
    } catch (error) {
      console.log('Subscription failed:', error);
    }

    setEmail('');
  };

  return (
    <div>
      <h2>Newsletter</h2>
      <h3>Stories and interviews</h3>
      <p>
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          id="emain"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <button disabled={isSubmitting} type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSection;
