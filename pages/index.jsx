import Bean from '../models/Bean';
import Beans from "@/components/home/beanSlider/Beans";
import Blog from '../models/Blog';
import Blogs from "@/components/home/blogs/Blogs";
import BrazilCoffee from "@/components/home/Brazil/BrazilCoffee";
import HandPicked from "@/components/home/handPicked/HandPicked";
import Head from "next/head";
import Product from '../models/Product';
import Slider from "@/components/home/top-slider/Slider";
import Sponsors from "@/components/home/sponsors/Sponsors";
import Testimonials from "@/components/home/testimonials/Testimonials";
import Trending from "@/components/home/trending/Trending";
import { createContext } from "react";
import dbConnect from '../lib/db';
import { useSelector } from 'react-redux';

export const HomeContext = createContext();

export default function Home({ productsList, beansList, blogsList }) {
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
  

  dbConnect();
  const products = await Product.find({});
  const beans = await Bean.find({});
  const blogs = await Blog.find({});

  return {
    props: {
      productsList: JSON.parse(JSON.stringify(products)),
      beansList: JSON.parse(JSON.stringify(beans)),
      blogsList: JSON.parse(JSON.stringify(blogs)),
    },
  };
};
