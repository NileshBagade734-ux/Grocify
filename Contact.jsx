import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-100 '>
      <div className="min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4 mt-16 md:mt-0">
        
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-bold text-center text-green-600">Contact Grocify</h2>
          <p className="text-gray-600 text-center mt-2">We would like to hear from you!</p>

          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input 
                type="text" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Your Name" 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Your Email" 
                required 
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea 
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Your Message" 
                rows="4" 
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-semibold mb-6 text-green-600">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">983427859</p>
                <p className="text-gray-600">9327597436 (Customer Service)</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">nilbagde@Grocify.com</p>
                <p className="text-gray-600">orders@Grocify.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">Amaravati Maharashtra</p>
                <p className="text-gray-600">Produce City, PC 444856</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-green-600 mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Store Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                  <p>Monday - Friday:</p>
                  <p>7:00 AM - 9:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 8:00 PM</p>
                  <p>Sunday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>

      {/* Careers Section */}
      <div className="max-w-3xl mx-auto mt-10 mb-16">
        <div className="bg-green-50 p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4 text-green-600 text-center">Join the Grocify Team</h2>
          <p className="text-center text-gray-600 mb-6">
            We're always looking for passionate individuals to join our team. Check out our current openings!
          </p>
          <div className="flex justify-center">
            <a
              href="/careers"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
            >
              View Career Opportunities
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
