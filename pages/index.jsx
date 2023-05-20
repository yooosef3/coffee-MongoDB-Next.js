import Beans from "@/components/home/beanSlider/Beans";
import Blogs from "@/components/home/blogs/Blogs";
import BrazilCoffee from "@/components/home/Brazil/BrazilCoffee";
import HandPicked from "@/components/home/handPicked/HandPicked";
import Head from "next/head";
import Slider from "@/components/home/top-slider/Slider";
import Sponsors from "@/components/home/sponsors/Sponsors";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Trending from "@/components/home/trending/Trending";
import axios from "axios";
import { createContext } from "react";

export const HomeContext = createContext();

export default function Home({productsList, beansList, blogsList}) {
  return (
    <>
      <Head>
        <title>coffee store</title>
        <meta name="description" content="Best Coffee for you" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HomeContext.Provider value={{ productsList, beansList, blogsList }}>
        <main>
          <Slider />
          <Beans />
          <HandPicked />
          <BrazilCoffee />
          <Trending />
          <Testimonials />
          <Sponsors />
          <Blogs />
        </main>
      </HomeContext.Provider>
    </>
  );
}

export const getServerSideProps = async () => {
  const [productsRes, beansRes, blogsRes] = await Promise.all([
    axios.get("http://localhost:3000/api/products"),
    axios.get("http://localhost:3000/api/beans"),
    axios.get("http://localhost:3000/api/blogs"),
  ]);

  return {
    props: {
      productsList: productsRes.data,
      beansList: beansRes.data,
      blogsList: blogsRes.data,
    },
  };
};
