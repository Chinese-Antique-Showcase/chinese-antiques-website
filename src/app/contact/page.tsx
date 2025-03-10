"use client";
import { ChangeEvent, FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format the email body with line breaks
    const body = `Name: ${formData.name}%0D%0A%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    // Create the mailto link with form data
    const mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <p className="mb-6 text-gray-600">
        If you&apos;d like to directly email me, you can do so at{" "}
        <a
          href="mailto:your-email@example.com"
          className="text-blue-600 hover:underline"
        >
          your-email@example.com
        </a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="johndoe@example.com"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please include any information, questions, or comments you have."
            className="w-full px-4 py-2 border rounded-md h-32"
            required
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-yellow-400 text-white py-2 px-6 rounded-md hover:bg-yellow-700 transition-colors"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
