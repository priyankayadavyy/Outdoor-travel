import React from "react";
import Img5 from "../../assets/5.jpg";
import Img6 from "../../assets/6.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const JournalData = [
  {
    id: 5,
    title: "An Unforgattable",
    about:
      "If you only have one day to visit yosemite National Park and you want to make the out of it.",
    Date: "May 30, 2022",
    url: "#",
    Image: Img5,
    delay: 0.2,
  },
  {
    id: 6,
    title: "Symphonies in Steel",
    about:
      "Crossing the Golden Gate Bridge from San Francisco, you arrive in march even before landing on told ground.",
    Date: "April 30 2021",
    url: "#",
    Image: Img6,
    delay: 0.4,
  },
];

const Journal = () => {
  return (
    <>
      <section className="container mt-20 cursor-pointer" id="journal">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4 "
        >
          <p className="text-3xl">The Journal</p>
          <p>
            Our favorite stories about public lands and opportunities for you to
            go involved in protecting your outdoor experienced.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 place-items-center mt-20">
          {JournalData.map((data) => (
            <motion.div
              variants={SlideUp(data.delay)}
              initial="hidden"
              animate="visible"
              key={data.id}
            >
              <div className="overflow-hidden">
                <img
                  src={data.Image}
                  alt="seen"
                  className="w-full h-[350px] object-cover"
                />
              </div>
              <div className="space-y-1 py-6 text-center px-12">
                <p className="uppercase">{data.Date}</p>
                <p className="text-xl font-semibold font-merriweather">
                  {data.title}
                </p>
                <p className="!mt-8">{data.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="block mx-auto mt-10 text-1.5xl text-brandBlue uppercase font-bold">
          All Post
        </button>
      </section>
    </>
  );
};

export default Journal;
