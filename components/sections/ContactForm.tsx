'use client';

import React, { useState } from 'react';
import { Mail, User, BookOpen, MessageCircle, CheckCircle, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const courseOptions = [
  'UI/UX Course',
  'Fullstack Course',
  'Digital Marketing Course',
  'Data Science Course',
  'Cloud Computing Course',
  'Cybersecurity Course',
];

const ContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    checkboxes: '',
  });
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (option: string) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      updatedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedOptions);
    setForm({ ...form, checkboxes: updatedOptions.join(', ') });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setError(null);
    if (!form.firstname || !form.lastname || !form.email || !form.subject || !form.message) {
      setError('Please fill in all required fields.');
      setStatus('error');
      toast({ title: 'Error', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }
    try {
      const postData = {
        firstname: form.firstname,
        lastname: form.lastname,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        checkboxes: form.checkboxes,
      };
      const response = await fetch('https://mail.landingfast.com/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(postData).toString(),
      });
      if (response.ok) {
        setStatus('success');
        setForm({ firstname: '', lastname: '', email: '', phone: '', subject: '', message: '', checkboxes: '' });
        setSelectedOptions([]);
        toast({ title: 'Message Sent', description: 'Your message was sent successfully!' });
      } else {
        setStatus('error');
        setError('Failed to send message. Please try again later.');
        toast({ title: 'Error', description: 'Failed to send message. Please try again later.', variant: 'destructive' });
      }
    } catch (err) {
      setStatus('error');
      setError('An error occurred. Please try again.');
      toast({ title: 'Error', description: 'An error occurred. Please try again.', variant: 'destructive' });
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-br from-[#0041c9] via-[#1a57d6] to-[#0041c9] relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="contactGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactGrid)" />
        </svg>
      </div>
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Have questions or want to know more? Fill out the form and our team will get back to you soon.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="firstname"
                placeholder="First Name"
                value={form.firstname}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0041c9] text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={form.lastname}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0041c9] text-gray-900 placeholder-gray-500"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0041c9] text-gray-900 placeholder-gray-500"
                required
              />
            </div>
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                value={form.phone}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0041c9] text-gray-900 placeholder-gray-500"
              />
            </div>
          </div>
          <div className="relative">
            <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0041c9] text-gray-900 placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Interested Courses</label>
            <div className="flex flex-wrap gap-3">
              {courseOptions.map((option) => (
                <label key={option} className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full cursor-pointer select-none border border-gray-200 hover:bg-gray-200 transition-all">
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="accent-[#0041c9]"
                  />
                  <span className="text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="relative">
            <MessageCircle className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0041c9] text-gray-900 placeholder-gray-500"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full flex items-center justify-center"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && (
            <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 rounded-xl p-4 mt-2">
              <CheckCircle className="h-5 w-5" />
              <span>Message sent successfully!</span>
            </div>
          )}
          {status === 'error' && error && (
            <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 rounded-xl p-4 mt-2">
              <span>{error}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm; 