"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Submitted Data:", data);
  };

  return (
    <div className="grid place-content-center h-screen">
      <div className="bg-[#f9f7f7] px-14 py-10 grid gap-6 shadow-lg text-black rounded-lg w-96">
        <h2 className="text-center text-2xl font-semibold">Logo</h2>

        <div className="grid gap-2">
          <label className="text-base font-medium">Email</label>
          <input
            type="email"
            className="border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-600 text-sm font-medium">
              Email is required
            </p>
          )}
        </div>

        <div className="grid gap-2 relative">
          <label className="text-base font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="border border-gray-700 rounded-lg px-4 py-2 w-full pr-12 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-600 text-sm font-medium">
              password is required
            </p>
          )}
        </div>

        <div className="grid place-content-center">
          <button
            className="bg-blue-800 text-white px-6 py-2 rounded-lg text-lg font-medium transition hover:bg-blue-700"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
