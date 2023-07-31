import toast, { Toaster } from "react-hot-toast";

import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  const submitHandler = async ({ email, name, text }) => {
    toast.success("پیام شما با موفقیت دریافت شد!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="lg:w-[60%]">
      <div className="flex flex-col md:flex-row md:gap-2">
        <div className="flex flex-col mt-6 md:w-[50%]">
          <label className="text-gray-400 font-bold" htmlFor="name">
            نام
          </label>
          <input
            {...register("name", {
              required: "لطفا یک نام وارد کنید!",
              minLength: {
                value: 6,
                message: "نام باید بیشتر از 5 کاراکتر باشد!",
              },
            })}
            className="bg-white p-2 h-12 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600"
            type="text"
            id="name"
            placeholder="نام"
          />
          {errors.name && (
            <div className="text-red-500 ">{errors.name.message}</div>
          )}
        </div>
        <div className="flex flex-col mt-6 md:w-[50%]">
          <label className="text-gray-400 font-bold" htmlFor="email">
            ایمیل
          </label>
          <input
            className="bg-white p-2 h-12 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600"
            {...register("email", {
              required: "لطفا یک ایمیل وارد کنید!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "لطفا یک ایمیل معتبر وارد کنید!",
              },
            })}
            type="email"
            id="email"
            placeholder="ایمیل"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <label className="text-gray-400 font-bold" htmlFor="message">
          متن پیام
        </label>
        <textarea
          {...register("text", {
            required: "لطفا یک پیام وارد کنید!",
            minLength: {
              value: 6,
              message: "پیام شما باید بیشتر از 6 کاراکتر باشد!",
            },
          })}
          className="bg-white p-2 rounded-md outline-none border text-slate-900 border-slate-300 focus:border-blue-600"
          cols={30}
          rows={10}
          id="message"
          placeholder="متن پیام"
        />
        {errors.text && (
          <div className="text-red-500">{errors.text.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-800 w-[200px] rounded-md py-2 px-4 font-bold text-white hover:bg-[#438259] duration-200 cursor-pointer mt-4"
      >
        ارسال
      </button>
      <Toaster />
    </form>
  );
};

export default Form;
