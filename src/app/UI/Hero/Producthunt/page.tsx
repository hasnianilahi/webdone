import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="my-4">
      <a 
        href="https://www.producthunt.com/posts/webdone" 
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=830806&theme=light"
          alt="Product Hunt Badge"
          width={250}
          height={54}
          priority={true}
          className="w-[250px] h-[54px] object-contain"
          unoptimized={true}
        />
      </a>
    </div>
  );
};

export default Banner;