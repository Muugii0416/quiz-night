import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div  className="rounded-full ...">
      <Image
            src='/logo.png'
            alt='menu'
            width={90}
            height={90}
            className="rounded-full ..."
          />

    </div>
  );
};

export default Logo;
