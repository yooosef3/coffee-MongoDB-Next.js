import React from "react";
import { useForm } from "react-hook-form";

const CommentForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, name }) => {};

  return (
    <div className="py-10">
      <h1 className="text-black font-bold text-2xl mb-5">یک نظر بنویس</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-col mt-6">
          <label htmlFor="name" className="text-gray-400 font-bold">
            نام
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="تام"
            className="bg-white p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600 mb-2"
            {...register("name", {
              required: "لطفا یک نام وارد کنید!",
              minLength: {
                value: 6,
                message: "نام باید بیشتر از 5 کاراکتر باشد!",
              },
            })}
          />
          {errors.name && (
            <div className="text-red-500 ">{errors.name.message}</div>
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
        <div className="flex flex-col my-6">
          <label htmlFor="message" className="text-gray-400 font-bold">
            متن نظر
          </label>
          <textarea
            className="bg-white p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600"
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="نظر خود را بنویسید"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-slate-800 w-[200px] rounded-md py-2 px-4 font-bold text-white hover:bg-[#438259] duration-200 cursor-pointer"
        >
          ثبت نظر
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
