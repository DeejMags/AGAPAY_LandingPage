import React, { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would integrate with EmailJS or backend
  };

  return (
    <section id="waitlist" className="flex flex-col items-center justify-center py-16 px-4 bg-white/80 rounded-2xl shadow-lg max-w-lg mx-auto mt-12">
      <h2 className="text-3xl font-bold text-teal-500 mb-4">Join the Waitlist</h2>
      <p className="mb-6 text-gray-700 text-center">Be the first to know when Agapay launches! Enter your email below:</p>
      {submitted ? (
        <div className="text-green-600 font-semibold text-lg">Thank you for joining the waitlist!</div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="bg-teal-400 hover:bg-teal-500 text-white font-semibold py-2 px-6 rounded-lg transition shadow"
          >
            Join Waitlist
          </button>
        </form>
      )}
    </section>
  );
}
