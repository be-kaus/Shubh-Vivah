// import React, { useState } from "react";
// import api from "../config/api";
// import { toast } from "react-hot-toast";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//   });

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email) {
//       toast.error("Please enter both email and full name.");
//       return;
//     }

//     try {
//       const res = await api.post("/contact/submit", formData);
//       toast.success(res.data.message || "Message sent successfully");
//       setFormData({ name: "", email: "", contact: "" });
//     } catch (error) {
//       toast.error(
//         `Error ${error.response?.status || ""}: ${
//           error.response?.data?.message || error.message
//         }`
//       );
//     }
//   };

//   return (
//     <>
//       <section className="min-h-screen bg-gradient-to-br from-[#fbe8d3] via-[#f7d9c4] to-[#fff3e0] flex items-center justify-center px-6 py-12">
//         <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8 border border-[#c49b63]">
//           <h2 className="text-4xl font-bold text-[#8b1f1f] mb-6 text-center font-serif">
//             Contact Us
//           </h2>
//           <p className="text-center text-[#6c3d0c] mb-10">
//             We'd love to be a part of your big day. Reach out to us for
//             bookings, queries, or blessings!
//           </p>
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label className="block text-[#5e2c04] font-semibold mb-1">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
//                 placeholder="Enter your name"
//               />
//             </div>
//             <div>
//               <label className="block text-[#5e2c04] font-semibold mb-1">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
//                 placeholder="Enter your email"
//               />
//             </div>
//             <div>
//               <label className="block text-[#5e2c04] font-semibold mb-1">
//                 Message
//               </label>
//               <textarea
//                 rows="5"
//                 name="contact"
//                 value={formData.contact}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border border-[#c49b63] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4a373]"
//                 placeholder="Share your thoughts..."
//               />
//             </div>
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="bg-[#8b1f1f] text-white px-6 py-2 rounded-full hover:bg-[#a83232] transition duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//           <p className="text-sm text-center text-[#754c24] mt-6 italic">
//             We'll get back to you within 24 hours. Your memories matter to us!
//           </p>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ContactUs;

import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaUser,
  FaEdit,
} from "react-icons/fa";
import toast from "react-hot-toast";
import api from "../config/api";

const ContactUs = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await api.post("/public/contactus", contactData);
      toast.success(res.data.message);
      setContactData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fff3e0] to-[#fbe8d3] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white border border-[#c49b63] rounded-2xl p-8 shadow-xl">
          <h2 className="text-4xl font-bold text-[#8b1f1f] mb-6 text-center font-serif">
            Contact Us
          </h2>
          <p className="text-center text-[#6c3d0c] mb-10">
            We'd love to be a part of your big day. Reach out to us for
            bookings, queries, or blessings!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 text-[#5e2c04]">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium mb-2">
                  <FaUser className="inline mr-2 text-[#c49b63]" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e2c9a3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block font-medium mb-2">
                  <FaEnvelope className="inline mr-2 text-[#c49b63]" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#e2c9a3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2">
                <FaPhone className="inline mr-2 text-[#c49b63]" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={contactData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2c9a3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                placeholder="+91 12345 67890"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                <FaEdit className="inline mr-2 text-[#c49b63]" />
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2c9a3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63]"
                placeholder="Let us know how we can help"
              />
            </div>

            <div>
              <label className="block font-medium mb-2">
                <FaEdit className="inline mr-2 text-[#c49b63]" />
                Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={contactData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-[#e2c9a3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#c49b63] resize-none"
                placeholder="Tell us about your dream celebration..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#8b1f1f] text-white font-semibold rounded-xl hover:bg-[#6c1616] transition duration-300 flex items-center justify-center space-x-2 shadow-md"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>

          <p className="text-sm text-center text-[#754c24] mt-6 italic">
            We'll get back to you within 24 hours. Your memories matter to us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
