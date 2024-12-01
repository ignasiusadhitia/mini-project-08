import React, { useState } from 'react';

import usePosts from '@hooks/usePosts';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);

  const { postData, isSubmitting } = usePosts('/subscribe');

  const handleChange = (e) => {
    setEmail(e.target.value);
    setResponse(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postData({ email });
      setResponse(response.message);
    } catch (error) {
      setError(error);
    }

    setEmail('');
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-center text-purple font-semibold">Newsletter</h2>
        <h3 className="text-center font-semibold text-black-2 text-5xl">
          Stories and interviews
        </h3>
      </div>
      <p className="text-center px-4 md:px-14">
        Subscribe to learn about new product features, the latest in technology,
        solutions, and updates.
      </p>
      <form className="px-8 md:px-33 mt-10" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <input
            className="px-3 py-2 flex-grow bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-500
      focus:outline-none focus:border-purple focus:ring-1 focus:ring-purple
      disabled:bg-slate-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
      invalid:border-pink-1 invalid:text-pink-2
      focus:invalid:border-pink-1 focus:invalid:ring-pink-1"
            disabled={isSubmitting}
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <button
            className="h-full py-3 px-5 bg-purple text-white text-base rounded-lg "
            disabled={isSubmitting}
            type="submit"
          >
            Subscribe
          </button>
        </div>
        {response ? (
          <span className="text-green text-sm mt-2">{response}</span>
        ) : (
          <span className="text-gray-3 text-sm mt-2">
            We care about your data in our privacy policy
          </span>
        )}
      </form>
    </div>
  );
};

export default NewsletterSection;
