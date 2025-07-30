// import React, { useState } from "react";
// import {
//   FaEnvelope,
//   FaPhone,
//   FaMapMarkerAlt,
//   FaPaperPlane,
//   FaUser,
//   FaEdit,
// } from "react-icons/fa";
// import toast from "react-hot-toast";
// import api from "../config/api";
// const ContactUs = () => {
//   const [contactData, setContactData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//     phone: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setContactData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await api.post("/public/contactus", contactData);
//       toast.success(res.data.message);
//       setContactData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//         phone: "",
//       });
//     } catch (error) {
//       toast.error(
//         `Error : ${error.response?.status || error.message} | ${
//           error.response?.data.message || ""
//         }`
//       );
//       console.log(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
//             Get In Touch
//           </h1>
//           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
//             Have questions about our event planning services? We'd love to hear
//             from you. Send us a message and we'll respond as soon as possible.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-2xl">
//             <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
//             <p className="text-indigo-100 mb-8">
//               Ready to make your event unforgettable? Let's start planning
//               together.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-white/20 p-3 rounded-lg">
//                   <FaPhone className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Phone</h3>
//                   <p className="text-indigo-100">+1 (555) 123-4567</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="bg-white/20 p-3 rounded-lg">
//                   <FaEnvelope className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Email</h3>
//                   <p className="text-indigo-100">info@eventplanner.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="bg-white/20 p-3 rounded-lg">
//                   <FaMapMarkerAlt className="text-xl" />
//                 </div>
//                 <div>
//                   <h3 className="font-semibold">Address</h3>
//                   <p className="text-indigo-100">
//                     123 Event Street
//                     <br />
//                     Planning City, PC 12345
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Decorative Elements */}
//             <div className="mt-12 relative">
//               <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
//               <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"></div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
//             <h2 className="text-3xl font-bold text-gray-800 mb-2">
//               Send us a Message
//             </h2>
//             <p className="text-gray-600 mb-8">
//               Fill out the form below and we'll get back to you within 24 hours.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     <FaUser className="inline mr-2 text-indigo-600" />
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={contactData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-semibold text-gray-700 mb-2"
//                   >
//                     <FaEnvelope className="inline mr-2 text-indigo-600" />
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={contactData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
//                     placeholder="your@email.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   <FaPhone className="inline mr-2 text-indigo-600" />
//                   Phone Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={contactData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
//                   placeholder="(123) 456-7890"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="subject"
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   <FaEdit className="inline mr-2 text-indigo-600" />
//                   Subject
//                 </label>
//                 <input
//                   type="text"
//                   id="subject"
//                   name="subject"
//                   value={contactData.subject}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300"
//                   placeholder="What's this about?"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-semibold text-gray-700 mb-2"
//                 >
//                   <FaEdit className="inline mr-2 text-indigo-600" />
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="6"
//                   value={contactData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-300 resize-none"
//                   placeholder="Tell us about your event or ask any questions..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
//               >
//                 {loading ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     <span>Sending...</span>
//                   </>
//                 ) : (
//                   <>
//                     <FaPaperPlane />
//                     <span>Send Message</span>
//                   </>
//                 )}
//               </button>
//             </form>

//             {/* Additional Info */}
//             <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
//               <h3 className="font-semibold text-gray-800 mb-2">
//                 Quick Response Guarantee
//               </h3>
//               <p className="text-sm text-gray-600">
//                 We typically respond to all inquiries within 2-4 hours during
//                 business hours. For urgent matters, please call us directly.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import api from "../config/api";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.error("Please enter both email and full name.");
      return;
    }

    try {
      const res = await api.post("/contact/submit", formData);
      toast.success(res.data.message || "Message sent successfully");
      setFormData({ name: "", email: "", contact: "" });
    } catch (error) {
      toast.error(
        `Error ${error.response?.status || ""}: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-[#fbe8d3] via-[#f7d9c4] to-[#fff3e0] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 border border-[#c49b63]">
          <h2 className="text-4xl font-bold text-[#8b1f1f] mb-6 text-center font-serif">
            Contact Us
          </h2>
          <p className="text-center text-[#6c3d0c] mb-10">
            We'd love to be a part of your big day. Reach out to us for
            bookings, queries, or blessings!
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-[#5e2c04] font-semibold mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-[#5e2c04] font-semibold mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-[#5e2c04] font-semibold mb-1">
                Message
              </label>
              <textarea
                rows="5"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
                placeholder="Share your thoughts..."
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#8b1f1f] text-white px-6 py-2 rounded-full hover:bg-[#a83232] transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <p className="text-sm text-center text-[#754c24] mt-6 italic">
            We'll get back to you within 24 hours. Your memories matter to us!
          </p>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
