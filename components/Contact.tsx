
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-annahdah-gold uppercase tracking-widest font-bold mb-4">Inquiries</h2>
            <h3 className="text-4xl font-bold serif-font text-gray-900 mb-6">Get in Touch with Our Faculty</h3>
            <p className="text-gray-600 mb-10 leading-relaxed">
              Have questions about our curriculum, archival requests, or community activities? Our administration and research teams are here to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-annahdah-green/10 p-3 rounded-full text-annahdah-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Main Campus</h5>
                  <p className="text-gray-500">123 Awakening St, Knowledge District, Cairo, Egypt</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-annahdah-green/10 p-3 rounded-full text-annahdah-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Email Address</h5>
                  <p className="text-gray-500">info@annahdah.school</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-annahdah-green/10 p-3 rounded-full text-annahdah-green">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1.061A29 29 0 013 19.061V5z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Phone Support</h5>
                  <p className="text-gray-500">+20 2 555-0123</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-annahdah-green focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-annahdah-green focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                <textarea
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-annahdah-green focus:border-transparent outline-none transition-all"
                  placeholder="How can we help you?"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-xl text-white font-bold transition-all shadow-lg ${
                  submitted ? 'bg-gray-400' : 'bg-annahdah-green hover:bg-emerald-800'
                }`}
              >
                {submitted ? 'Message Sent!' : 'Send Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
