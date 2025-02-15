'use client';

import React from 'react';
import Image from 'next/image';

const ProfileImage: React.FC = () => {
  const placeholderImage = "/profile_image.jpeg"; // Update with your image path

  return (
    <div className="aspect-square relative rounded-2xl overflow-hidden">
      <Image
        src={placeholderImage}
        alt="Profile"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={95}
        className="object-cover"
        priority
      />
    </div>
  );
};

export default ProfileImage;