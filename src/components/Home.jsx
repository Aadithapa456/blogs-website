import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Cardlandscape from "./CardLandscape";
import Image from "next/image";
import CardPortrait from "./CardPortrait";
const Home = ({ data }) => {
  return (
    <>
      <div className="home-cards flex flex-col gap-10 md:flex-row md:gap-4">
        <div className="home-card-left relative self-center overflow-hidden rounded-lg shadow-md">
          <Image
            src={
              "https://media.discordapp.net/attachments/1275803991804084258/1314963682337230928/image.png?ex=6755aedc&is=67545d5c&hm=e5d2b7cd8203fcd76bf366e882e4481462a506abd2f36de773e11af0bb9ba530&=&format=webp&quality=lossless&width=687&height=701"
            }
            width={200}
            height={200}
            className="w-full"
            alt="Cards"
          />
          <div className="home-card-title absolute bottom-4 text-xl text-white">
            A shadow is caused by an object when it blocks light.
          </div>
        </div>
        <div className="home-card-right">
          <Cardlandscape />
          <Cardlandscape />
          <Cardlandscape />
        </div>
      </div>
      <div className="latest-articles">
        <div className="latest font-poppins text-2xl font-extrabold text-red-600">
          Latest Articles
        </div>
        <div className="latest-articles-grid grid grid-cols-1 gap-4 p-4 md:grid-cols-3 lg:grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))]">
          {data
            ? data.map((card) => {
                return (
                  <CardPortrait
                    key={card.id}
                    title={card.title}
                    tags={card.tag_list}
                    image = {card.social_image}
                  />
                );
              })
            : "Loading"}
        </div>
      </div>
    </>
  );
};

export default Home;
