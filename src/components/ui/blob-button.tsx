import React from 'react';
import { motion } from 'framer-motion';

export default function BlobButton(props: { children: React.ReactNode }) {
  return (
    <motion.button
      initial="hidden"
      whileHover="show"
      className="relative z-10 rounded-sm bg-gradient-to-tr from-primary-500 to-primary-700 px-8 py-3 font-semibold text-white shadow-md transition-transform duration-75 active:scale-[.95]"
    >
      {props.children}
      <div className="absolute left-0 top-0 -z-20 h-full w-full overflow-hidden">
        <motion.div
          className="absolute -left-[16%] top-0 -z-10 flex h-full w-full"
          style={{
            filter: "url('#goo')"
          }}
        >
          {[0, 1, 2, 3].map((number, idx) => (
            <motion.div
              variants={{
                hidden: {
                  y: '175%',
                  scale: 1.6,
                  left: `${idx * (128 / 4)}%`
                },
                show: { y: 0 }
              }}
              transition={{ delay: idx * 0.06, ease: 'easeOut' }}
              key={idx}
              className="absolute inline-block h-full w-1/4 translate-y-full scale-150 rounded-full bg-primary-700"
            ></motion.div>
          ))}
        </motion.div>
      </div>
    </motion.button>
  );
}
