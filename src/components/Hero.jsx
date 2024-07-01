import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin text-white tracking-tight lg:mt-16 lg:text-8x1"
            >
              Sadaif Rizvi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500
to-purple-500 bg-clip-text lg:text-4xl text-2xl tracking-tight text-transparent"
            >
              Senior Software Engineer
            </motion.span>

            <motion.div
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-6"
            >
              <p className="my-1  max-w-xl  font-light tracking-tighter">
                📊 I’ve built 1M+ users web app
              </p>
              <p className="my-1  max-w-xl  font-light tracking-tighter">
                ⭐️ 3+ years in development
              </p>
              <p className="my-1  max-w-xl  font-light tracking-tighter">
                ⭐️ 20+ successfully completed projects.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              transition={{ duration: 1, delay: 1.2 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              src={profilePic}
              alt="Sadaif"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
