import Image from "next/image";
import React from "react";

type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div
      className="
        relative rounded-lg border border-sky-500 transition-all duration-300
        ease-in-out  h-[300px] w-[350px] md:h-[800px] md:w-[350px] text-center
      "
    >
      <div className=" absolute bottom-3 z-10 left-3">
        <h2 className="text-sky-700  border rounded-full text-center text-sm bg-background">
          {title}
        </h2>

        <p className="text-sm">{description}</p>
      </div>

      <div className="overflow-hidden rounded-lg shadow-lg h-full w-full  relative">
        <Image
          src={image}
          alt={title}
          fill
          priority
          sizes="50vw"
          className="object-cover w-full rounded-lg p-3"
        />
      </div>

      <div
        className="
          absolute rounded-lg bottom-0 h-1/4 w-full left-0 bg-gradient-to-t
          from-black via-black/20 to-black/10
        "
      />
    </div>
  );
};

export default Card;
