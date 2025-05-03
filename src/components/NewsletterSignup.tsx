import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, this would send a request to subscribe the email
      console.log('Subscribing email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  if (subscribed) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank you for subscribing!</h3>
        <p className="text-green-700">You'll now receive our top stories in your inbox every morning.</p>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 border border-slate-200 rounded-lg p-6">
      <div className="flex items-center mb-4">
        <Mail className="text-red-600 mr-2" size={24} />
        <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
      </div>
      <p className="text-slate-600 mb-4">Get the latest headlines delivered to your inbox every morning. Don't miss important news.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow px-4 py-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <button 
          type="submit" 
          className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSignup;