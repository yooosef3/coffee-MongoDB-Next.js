import { BsGithub } from "react-icons/bs";
import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ email, password }) => {};

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="flex flex-col justify-center bg-white w-[380px] h-32 md:w-[450px] mx-auto rounded-md shadow-lg p-5"
    >
      {/* <h1 className="text-black font-bold text-center text-2xl mb-11">ورود</h1>

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
      <div className="flex items-center gap-2 mb-4">
        <label htmlFor="save" className="text-gray-600">
          مرا به خاطر پسپار
        </label>
        <input
          className="bg-gray-200 h-11 rounded-lg border outline-none pr-2 focus:border-blue-500 text-slate-700 font-bold"
          type="checkbox"
          id="save"
        />
      </div>
      <div className="flex">
        <span className="text-slate-800 font-semibold">هنوز اکانت ندارید؟</span>
        <Link href="/register">
          <span className="text-blue-600 font-semibold mr-4">ثبت نام کنید</span>
        </Link>
      </div>
      <button
        type="submit"
        className="bg-blue-600 w-full h-12 rounded-md mb-2 mt-16 text-lg font-bold hover:bg-slate-800 duration-200"
      >
        ورود
      </button> */}
      <div onClick={() => signIn("github", { callbackUrl: "/" })} className="flex justify-center items-center gap-3 bg-black hover:bg-gray-800 duration-200 cursor-pointer rounded-md h-11">
        <BsGithub className="text-3xl" />
        <h1 className="text-lg font-bold duration-200">
          ورود با گیت هاب
        </h1>
      </div>
    </form>
  );
};

export default LoginForm;
