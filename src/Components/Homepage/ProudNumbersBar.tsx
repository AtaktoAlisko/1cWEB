"use client";
import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

const stats = [
  { value: 1000, label: "Успешных Проектов" },
  { value: 12, label: "Лето Работы" },
  { value: 200, label: "Постоянных клиентов" },
  { value: 20, label: "Сотрудников" },
];

const ProudNumbersBar = () => {
  return (
    <div className="bg-gradient-to-r from-[#8B1A17] via-[#A22823] to-[#D1453E] text-white py-10 mb-10 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} delay={index * 0.3} />
        ))}
      </div>
    </div>
  );
};

const StatItem = ({
  stat,
  delay,
}: {
  stat: { value: number; label: string };
  delay: number;
}) => {
  const motionValue = useMotionValue(0);
  const animatedValue = useTransform(
    motionValue,
    (latest) => `${Math.round(latest).toLocaleString()}+`
  );
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, stat.value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });

      return controls.stop;
    }
  }, [isInView, motionValue, stat.value, delay]);

  return (
    <div
      ref={ref}
      className="text-center p-4 rounded-lg hover:bg-[#D1453E] transition duration-300"
    >
      <motion.div className="text-4xl md:text-5xl font-extrabold">
        {animatedValue}
      </motion.div>
      <div className="mt-2 text-base md:text-lg font-medium">{stat.label}</div>
    </div>
  );
};

export default ProudNumbersBar;
