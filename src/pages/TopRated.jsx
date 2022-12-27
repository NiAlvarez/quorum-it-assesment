import React, { useEffect } from 'react'
import Card from '../components/ui/card/Card'
import Navbar from '../components/ui/navbar/Navbar'
import Footer from '../components/ui/footer/Footer'
import DotLoader from "react-spinners/DotLoader";
import {
  useQuery,
} from 'react-query'

const TopRated = () => {

  const getNewsByRate = async () => {
    const res = await fetch('https://firebasestorage.googleapis.com/v0/b/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e')
    const data = await res.json()
    const news = Object.keys(data).map(key => {
        return {
            ...data[key],
            id: key
        }
    }
    )
    return orderDataByViews(news)
}

const orderDataByViews = (data) => {
    const filteredData =  data.sort((a, b) => {
        return b.views - a.views
    })
    console.log(filteredData)
    return filteredData;
}

const {data, status} = useQuery('newsByRate', getNewsByRate)

  return (
    <div className="bg-gray-100">
      <Navbar />
      <h1 className="text-2xl mt-10 ml-16 font-bold text-quorum-purple">
        Top rated news for you!
      </h1>
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
}

export default TopRated