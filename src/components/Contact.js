import React, { useEffect, useState } from "react";
import agapayLogo from "./imgs/agapay-logo.png";

export default function Contact() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <section className={`min-h-screen bg-white flex flex-col items-center justify-center py-10 px-4 sm:px-8 transition-opacity duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden my-12 gap-6 md:gap-0">
        {/* Left: Contact Info */}
        <div className="flex-1 bg-white p-4 sm:p-8 md:p-12 flex flex-col justify-center w-full">
          <div className="flex items-center gap-3 mb-6">
            <img src={agapayLogo} alt="Agapay Logo" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-extrabold text-teal-500">Agapay</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 text-lg mb-8 max-w-md">
            Whether you're a resident, business owner, city official, or curious supporter — we're here to answer your questions and explore meaningful partnerships.
          </p>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl">
              <span role="img" aria-label="email">📧</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">E-mail</div>
              <div className="text-gray-600 text-sm">hello@agapay.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl" style={{ minWidth: '2.5rem', minHeight: '2.5rem', aspectRatio: '1/1' }}>
              <span role="img" aria-label="location" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>📍</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">Location</div>
              <div className="text-gray-600 text-sm">17 Basement I Legarda Rd., UC-BCF Legarda Campus, Baguio City, Philippines</div>
            </div>
          </div>
          <div className="mt-8">
            <div className="font-bold text-gray-900 mb-2">Stay Connected</div>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/app.agapay" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-300 text-teal-500 hover:bg-teal-50 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              {/* Add more social icons as needed */}
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 bg-gray-50 flex flex-col justify-center p-4 sm:p-8 md:p-12 w-full">
          <form className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-10 flex flex-col gap-5 w-full max-w-xl mx-auto" onSubmit={e => {
            e.preventDefault();
            const newErrors = {};
            if (!form.name.trim()) newErrors.name = 'Name is required.';
            if (!form.email.trim()) newErrors.email = 'Email is required.';
            if (!form.subject.trim()) newErrors.subject = 'Subject is required.';
            if (!form.message.trim()) newErrors.message = 'Message is required.';
            setErrors(newErrors);
            if (Object.keys(newErrors).length === 0) {
              setSubmitted(true);
            } else {
              setSubmitted(false);
            }
          }}>
            <div>
              <label className="block font-bold text-gray-800 mb-1">Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-300 text-gray-900"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
              {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-300 text-gray-900"
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
              {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-1">Subject</label>
              <input
                type="text"
                placeholder="e.g. Partnership Inquiry, Feedback, Support"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-300 text-gray-900"
                value={form.subject}
                onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              />
              {errors.subject && <div className="text-red-500 text-sm mt-1">{errors.subject}</div>}
            </div>
            <div>
              <label className="block font-bold text-gray-800 mb-1">Message</label>
              <textarea
                placeholder="Type your message here..."
                rows={4}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-300 text-gray-900"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
              {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
            </div>
            <button type="submit" className="mt-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 rounded-xl transition text-lg shadow">Send Message</button>
            {submitted && (
              <div className="mt-4 text-center text-teal-600 font-semibold animate-pulse">Coming soon!</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
