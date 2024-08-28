import React from "react";
import Img1 from "../../assets/1.jpg";
import Img2 from "../../assets/2.jpg";
import Img3 from "../../assets/3.jpg";
import Img4 from "../../assets/4.jpg";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";

const ExploreData = [
  {
    id: 1,
    title: "Nearoyf Jordar",
    place: "Norway",
    url: "#",
    Image: Img1,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Antelop Canyon",
    place: "United States",
    url: "#",
    Image: Img2,
    delay: 0.4,
  },
  {
    id: 3,
    title: "Lakes",
    place: "Austria",
    url: "#",
    Image: Img3,
    delay: 0.6,
  },
];
const Explore = () => {
  return (
    <>
      <section className="container cursor-pointer" id="explore">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2 }}
          className="text-center md:max-w-[650px] mx-auto space-y-4 "
        >
          <p className="text-3xl">Explore The World</p>
          <p>
            The very basic core of a human's living spirit is his passion for
            adventure. The joy of life comes from our encounters with new
            experiences, and hence there is no greater joy than to have an
            endlessly changing horizon, for each day to have a new and different
            thing.
          </p>
        </motion.div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-1 place-items-center">
          {ExploreData.map((data) => (
            <motion.div
              variants={SlideUp(data.delay)}
              initial="hidden"
              animate="visible"
              key={data.id}
              className="relative"
            >
              <img
                src={data.Image}
                alt="seen"
                className="w-[350px] h-[550px] object-cover"
              />
              <div className="absolute w-full bottom-0 bg-brandDark/15">
                <div className="h-full space-y-1 py-6 flex flex-col justify-end items-center">
                  <h3 className="text-2xl font-semibold">{data.title}</h3>
                  <p className="uppercase">{data.place}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="block mx-auto mt-10 text-1.5xl text-brandBlue uppercase font-bold">
          See More
        </button>
      </section>
    </>
  );
};

export default Explore;
