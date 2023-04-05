"use client"
import React from "react"
import { HiOutlineMail } from "react-icons/hi"

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto mt-28">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Let's Get in Touch</h2>
          <p className="text-gray-600 mb-8">Have a question or want to work together? Send me a message!</p>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-teal-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-teal-600"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:ring focus:ring-teal-600"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring focus:ring-teal-600"
            >
              <HiOutlineMail className="inline-block mr-2 mb-1" /> Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
