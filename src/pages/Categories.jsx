import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import DotLoader from "react-spinners/DotLoader";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";
import Card from "../components/ui/card/Card";

const Categories = () => {
  const getNewByHash = async () => {
    const res = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e"
    );
    const data = await res.json();
    const news = Object.keys(data).map((key) => {
      return {
        ...data[key],
        id: key,
      };
    });
    const url = await window.location.href;
    const hash = await url.split("/").pop();
    const filteredData = await news.filter((news) => {
      return news.category === hash;
    }
    );
    return filteredData;
  };

  const { data, status } = useQuery("newByHash", getNewByHash);

  return (
    <div className="bg-gray-100">
      <Navbar />
      {status === "success" ? (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-auto">
          {data &&
            data.map((news) => (
              <Card
                key={news.id}
                article={false}
                id={news.id}
                title={news.title}
                imageUrl={news.imageUrl}
                subtitle={news.subtitle}
                category={news.category}
                views={news.views}
                createdAt={news.createdAt}
                body={news.body}
              />
            ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen">
          <DotLoader color={"#9F75D3"} loading={true} size={70} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Categories;
