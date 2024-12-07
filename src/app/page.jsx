"use client";
import Home from "@/components/Home";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import Register from "@/components/Register";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Page() {
  const [articleList, setArticleList] = useState([]);
  const getArticles = async () => {
    const response = await fetch("https://dev.to/api/articles");
    const data = await response.json();
    setArticleList(data);
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="h-full w-full bg-gray-300">
      <Navbar />
      <Home data={articleList} />
    </div>
  );
}
