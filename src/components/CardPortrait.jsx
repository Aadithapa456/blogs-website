import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
const CardPortrait = ({ title, description, tags, image, url }) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 rounded-lg bg-white px-4 py-4 shadow-md lg:mx-0 lg:mb-8">
      <div className="blog-card-top mb-2">
        <Image src={image} width={350} height={100} alt="Image"></Image>
        {/* <div className="blog-title absolute left-0 right-0 top-48 mx-auto w-3/4 bg-gray-300 px-6 py-4">
          {title}
        </div> */}
      </div>
      <div className="blog-card-contents px-3 py-6">
        <div className="blog-title text-xl font-bold">{title}</div>
        <div className="blog-description mt-3 text-sm text-gray-700">
          {description}
        </div>
      </div>
      <div className="mb-4 mt-auto flex w-full flex-wrap items-center justify-center gap-2">
        {tags.map((label, index) => (
          <span
            key={index}
            className="cursor-pointer self-start rounded-lg border border-gray-300 px-3 py-1.5 text-sm shadow-md transition duration-300 hover:border-gray-600 hover:bg-gray-200"
          >
            {label}
          </span>
        ))}
      </div>
      <div className="read-more mx-auto my-6 self-stretch">
        <a
          href={url}
          target="_blank"
          className="rounded-lg border border-gray-300 px-6 py-3 text-center shadow-md transition duration-300 hover:border-gray-600 hover:bg-gray-200"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default CardPortrait;
