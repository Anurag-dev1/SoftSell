import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const licenseOptions = ['Free', 'Standard', 'Pro', 'Enterprise'];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'Please select a license type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      // reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: ''
      });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 shadow-lg rounded-xl bg-white space-y-4">
      <h2 className="text-xl font-semibold mb-2">Contact / Lead Form</h2>

      <div>
        <label className="block">Name</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label className="block">Company</label>
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
      </div>

      <div>
        <label className="block">License Type</label>
        <select
          name="licenseType"
          value={formData.licenseType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">-- Select License Type --</option>
          {licenseOptions.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
      </div>

      <div>
        <label className="block">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full p-2 border rounded"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
      </div>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
