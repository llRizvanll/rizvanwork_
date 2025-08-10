import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-3/4 sm:w-2/3 md:w-5/12 max-w-xs sm:max-w-sm md:max-w-none"
    >
      <div className="relative rounded-full overflow-hidden">
        <Image
          src="/assets/profile_image.jpeg"
          alt="Rizvan Hawaldar"
          width={500}
          height={500}
          className="rounded-full"
          priority
        />
      </div>
    </motion.div>
  );
}
