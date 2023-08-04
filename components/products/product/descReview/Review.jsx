import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const Review = ({ close }) => {
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();
  const productId = query.productId;
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ author, email, text, title }) => {
    setLoading(true);
    try {
      const response = await axios.post(`/api/products/${productId}/comments`, {
        author,
        email,
        text,
        title
      });
      console.log(response);
      toast.success("نظر شما با موفقیت ثبت شد!");
      reset();
      
    } catch (error) {
      toast.error("خطایی رخ داده است!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className={`py-10 mt-10 ${
        !close ? "hidden" : "block"
      } border-t border-gray-300`}
    >
      <h1 className="text-black font-bold text-xl mb-4">یک نظر بنویس</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col">
          <label htmlFor="author" className="text-gray-400 font-bold">
            نام
          </label>
          <input
            type="text"
            name="author"
            id="author"
            placeholder="تام"
            className="bg-white p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
            {...register("author", {
              required: "لطفا یک نام وارد کنید!",
            })}
          />
          {errors.author && (
            <div className="text-red-500 ">{errors.author.message}</div>
          )}
        </div>
        <div className="flex flex-col mt-6">
          <label htmlFor="email" className="text-gray-400 font-bold">
            ایمیل
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="ایمیل"
            className="bg-white p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
            {...register("email", {
              required: "لطفا یک ایمیل وارد کنید!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "لطفا یک ایمیل معتبر وارد کنید!",
              },
            })}
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <h1 className="text-gray-400 font-bold mb-2">رتبه</h1>
        <div className="flex text-yellow-500 text-xl">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
        <div className="flex flex-col mt-6">
          <label htmlFor="title" className="text-gray-400 font-bold">
            عنوان نظر
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="عنوان نظر"
            className="bg-gray-100 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-6"
            {...register("title", {
              required: "لطفا یک عنوان وارد کنید!",
            })}
          />
          {errors.title && (
            <div className="text-red-500 ">{errors.title.message}</div>
          )}
        </div>
        <div className="flex flex-col mb-6">
          <label htmlFor="text" className="text-gray-400 font-bold">
            متن نظر
          </label>
          <textarea
            className="bg-gray-100 p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600"
            name="text"
            id="text"
            cols={30}
            rows={10}
            placeholder="نظر خود را بنویسید"
            {...register("text", {
              required: "لطفا یک پیام بنویسید!",
              pattern: {
                message: "لطفا یک ایمیل معتبر وارد کنید!",
              },
            })}
          />
          {errors.text && (
            <div className="text-red-500">{errors.text.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="bg-slate-800 w-[200px] rounded-md py-2 px-4 font-bold text-white hover:bg-[#438259] duration-200 cursor-pointer"
        >
          ثبت نظر
        </button>
        <Toaster />
      </form>
    </div>
  );
};

export default Review;
