import React from 'react';

const NewsletterSection = () => {
  return (
    <div>
      <h2>Newsletter</h2>
      <h3>Stories and interviews</h3>
      <p>
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <form>
        <input id="emain" name="email" type="email" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSection;
