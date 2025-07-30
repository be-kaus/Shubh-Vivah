import React from "react";

const stories = [
  {
    name: "Aarav & Meera",
    story:
      "From a casual family meeting to a lifetime of love—our wedding was a perfect blend of tradition and modern joy.",
    image: "https://imgs.search.brave.com/05K0Yo_4HAsd2Ga2NA70EnvDw4MxBsLu49pJrZiHG58/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzgzLzQ4LzUx/LzM2MF9GXzE4MzQ4/NTEyM183UXlrZ0Z0/UWZkdmZyTVE0Ym1I/eTk0WnA4VEluR2JB/RC5qcGc",
  },
  {
    name: "Raj & Ananya",
    story:
      "We met through a wedding planner, and everything felt right. Our hearts were already married before the rituals began.",
    image: "https://imgs.search.brave.com/iT5-BZEEjSUxdKQ5dG_ZjbGGRl5-T-DzkXBHyKkSveE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9p/bmRpYW4tY291cGxl/LWNlbGVicmF0aW5n/LXByb3Bvc2UtZGF5/LWJ5LWJlaW5nLXJv/bWFudGljLXdpdGgt/ZWFjaC1vdGhlcl8y/My0yMTUxMTEwOTU1/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA", 
  },
  {
    name: "Vikram & Ishita",
    story:
      "An arranged meeting that turned into endless conversations, laughter, and a forever bond.",
    image: "https://imgs.search.brave.com/uGFj5dJVJYWuYotdxNjHVU2OnIZ-BTT5ifVKfJccUpc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE3/ODk4NDU2OC9waG90/by9pbmRpYW4tY291/cGxlLW1ha2luZy1m/bG93ZXItcmFuZ29s/aS1vbi1kaXdhbGkt/b3Itb25hbS1mZXN0/aXZhbC10YWtpbmct/c2VsZmllLW9yLWhv/bGRpbmctc3dlZXRz/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1XQTZDd0V6TzFN/d0tHSGdWZTdXQ244/Z29Xd29ab3NxZXZs/VV9IbmFxbXV3PQ", 
  },
  {
    name: "Dhruv & Sneha",
    story:
      "Our story proves that destiny finds its way—our venue, our vows, our forever.",
    image: "https://imgs.search.brave.com/7b8Ak-PCIILhBLyOH95T4A8MkX4XDdXHoEqynpmZTpc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJpc21pYy5p/by9tZW1vcmllc2Rl/c2lnbmVyL1p2UFh4/clZzR3JZU3Y3UFdf/TUQxXzM5NTguanBn/P2F1dG89Zm9ybWF0/LGNvbXByZXNzJnJl/Y3Q9MCwxLDYwNDIs/NDAxOCZ3PTQwMDAm/aD02NjU", 
  },
];

const MarriageStories = () => (
  <section className="bg-gradient-to-b from-[#fff3e0] to-[#fbe8d3] py-16 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#8b1f1f] mb-6 font-serif">
        Wedding Stories
      </h2>
      <p className="text-[#6c3d0c] mb-12">
        Every wedding becomes a beautiful chapter in someone's life.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stories.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-[#c49b63] rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={s.image}
              alt={s.name}
              className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#d4a373]"
            />
            <h3 className="text-xl font-semibold text-[#8b1f1f] mb-2">
              {s.name}
            </h3>
            <p className="text-[#5e2c04] text-sm">{s.story}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MarriageStories;
