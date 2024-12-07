import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
const CardPortrait = ({ title, tags, image }) => {
  console.log(tags);
  return (
    <div className="mx-auto flex flex-col rounded-lg bg-white px-4 py-4 lg:mx-0">
      <div className="blog-card-top mb-2">
        <Image src={image} width={350} height={100} alt="Image"></Image>
        {/* <div className="blog-title absolute left-0 right-0 top-48 mx-auto w-3/4 bg-gray-300 px-6 py-4">
          {title}
        </div> */}
      </div>
      <div className="blog-card-contents px-3 py-2">
        <div className="blog-title text-xl font-bold">
          5 Things I'm Glad I Bought at that moment.
        </div>
        <div className="blog-description mt-3 text-sm text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus qui,
          itaque nulla illum ullam velit, dolorum incidunt tenetur vero
          laudantium id labore!
        </div>
      </div>
      <div className="blog-label mb-2 mt-4 grid grid-cols-[repeat(auto-fit,_minmax(120px,_1fr))] gap-4 p-4">
        {tags.map((tag, index) => {
          return (
            <Badge
              key={index}
              className={"w-full cursor-pointer truncate px-4 py-2 md:w-auto"}
            >
              {tag}
            </Badge>
          );
        })}
      </div>
    </div>
  );
};

export default CardPortrait;
