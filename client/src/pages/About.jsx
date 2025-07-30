import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#fff3e0] to-[#fbe8d3] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#8b1f1f] mb-4 font-serif">
          About Us
        </h2>
        <p className="text-[#6c3d0c] text-lg mb-10 max-w-3xl mx-auto">
          Where tradition meets elegance, and dreams become unforgettable
          celebrations.
        </p>

        <div className="bg-white border border-[#c49b63] rounded-2xl shadow-xl p-8 mb-16 text-left">
          <p className="text-[#5e2c04] text-base leading-relaxed mb-6">
            Welcome to our wedding planning sanctuary — a place where love
            stories are woven into unforgettable celebrations. Whether you're
            planning an intimate ceremony or a grand Indian wedding filled with
            rituals and festivities, our mission is to make every detail
            seamless, beautiful, and stress-free.
          </p>
          <p className="text-[#5e2c04] text-base leading-relaxed mb-6">
            Our journey began with a belief — that every couple deserves a
            celebration as unique as their bond. Since then, we’ve curated
            countless magical moments across palaces, beaches, temples, and
            banquet halls, bringing together the best of culture, class, and
            creativity.
          </p>
          <p className="text-[#5e2c04] text-base leading-relaxed">
            At the heart of our work lies a deep respect for Indian traditions,
            paired with a flair for innovation — resulting in weddings that feel
            rooted and refreshing at once.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
          {[
            {
              title: "Tradition First",
              text: "We honor and celebrate the diverse traditions, rituals, and customs that make Indian weddings rich and meaningful.",
            },
            {
              title: "Creative Excellence",
              text: "From thematic decor to curated sangeet nights, every element is designed with imagination and elegance.",
            },
            {
              title: "Stress-Free Experience",
              text: "Leave the logistics, coordination, and timing to us — so you can focus on love, laughter, and your big day.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white border border-[#c49b63] rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-semibold text-[#8b1f1f] mb-3">
                {item.title}
              </h4>
              <p className="text-[#5e2c04] text-sm">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#c49b63] rounded-2xl shadow-xl p-8 mb-16 text-left max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#8b1f1f] mb-4 font-serif">
            Our Journey
          </h3>
          <p className="text-[#5e2c04] text-base leading-relaxed mb-4">
            What started as a two-person dream in a small home office has now
            become one of the most loved wedding planning platforms in India.
            We’ve helped over 300+ couples celebrate their weddings in 12+
            cities, working closely with decorators, musicians, caterers, and
            spiritual leaders.
          </p>
          <p className="text-[#5e2c04] text-base leading-relaxed">
            Every wedding strengthens our passion — and we can’t wait to be a
            part of your story next.
          </p>
        </div>

        <div className="text-[#6c3d0c] text-lg font-medium italic max-w-3xl mx-auto">
          “Because your wedding deserves more than just planning —
          <br className="hidden md:block" /> it deserves soul, joy, and a
          lifetime of memories.”
        </div>
      </div>
    </section>
  );
};

export default About;
