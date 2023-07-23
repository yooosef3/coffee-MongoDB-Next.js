import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React from "react";
import { useAuthContext } from "@/context/authContext";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { handleRegister } = useAuthContext();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async (e, { name, email, password }) => {
    const data = { name, email, password };
    handleRegister(data, e);
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="bg-white w-[380px] md:w-[450px] mx-auto rounded-md shadow-lg p-5"
    >
      <h1 className="text-black font-bold text-center text-2xl">ثبت نام</h1>
      <div className="flex flex-col mb-4">
        <label htmlFor="name" className="text-gray-600">
          نام
        </label>
        <input
          placeholder="نام"
          className="bg-gray-200 h-11 rounded-md border outline-none pr-2 focus:border-blue-500 text-slate-700 font-bold"
          type="text"
          id="name"
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
      <div className="flex flex-col mb-4">
        <label htmlFor="email" className="text-gray-600">
          ایمیل
        </label>
        <input
          placeholder="ایمیل"
          className="bg-gray-200 h-11 rounded-md border outline-none pr-2 focus:border-blue-500 text-slate-700 font-bold"
          type="email"
          id="email"
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
      <div className="flex flex-col mb-4">
        <label htmlFor="password" className="text-gray-600">
          رمز
        </label>
        <input
          placeholder="رمز"
          className="bg-gray-200 h-11 rounded-md border outline-none pr-2 focus:border-blue-500 text-slate-700 font-bold"
          type="password"
          id="password"
          {...register("password", {
            required: "لطفا یک رمز وارد کنید!",
            minLength: {
              value: 6,
              message: "رمز شما باید بیشتر از 5 کاراکتر باشد!",
            },
          })}
        />
        {errors.password && (
          <div className="text-red-500 ">{errors.password.message}</div>
        )}
      </div>
      <div className="flex flex-col mb-5">
        <label htmlFor="confirm" className="text-gray-600">
          تایید رمز
        </label>
        <input
          placeholder="تایید رمز"
          className="bg-gray-200 h-11 rounded-md border outline-none pr-2 focus:border-blue-500 text-slate-700 font-bold"
          type="text"
          id="confirm"
          {...register("confirmPassword", {
            required: "لطفا رمز خود را تایید کنید!",
            validate: (value) => value === getValues("password"),
            minLength: {
              value: 6,
              message: "رمز شما باید بیشتر از 5 کاراکتر باشد!",
            },
          })}
        />
        {errors.confirmPassword && (
          <div className="text-red-500 ">{errors.confirmPassword.message}</div>
        )}
        {errors.confirmPassword &&
          errors.confirmPassword.type === "validate" && (
            <div className="text-red-500 ">رمز عبور مطابقت ندارد!</div>
          )}
      </div>
      <div className="flex mb-5">
        <span className="text-slate-800 font-semibold">
          از قبل اکانت دارید؟
        </span>
        <Link href="/login">
          <span className="text-blue-600 font-semibold mr-4">وارد شوید</span>
        </Link>
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-full h-12 rounded-md mb-2 text-lg font-bold hover:bg-slate-800 duration-200"
      >
        ثبت نام
      </button>
      <div className="group flex justify-center items-center gap-2 bg-blue-100 hover:bg-blue-300 duration-200 cursor-pointer rounded-md h-11">
        <FcGoogle className="text-2xl" />
        <h1 className="text-lg text-blue-800 font-bold group-hover:text-blue-900 duration-200">
          ثبت نام با Google
        </h1>
      </div>
    </form>
  );
};

export default RegisterForm;
