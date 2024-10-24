"use client";
import React, { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit login logic here
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="my-4">
        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Login Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>

      {/* Forgot Password & Registration */}
      <div className="mt-6 flex justify-between text-sm text-gray-600">
        <Link href="/forgot-password" className="hover:underline">
          Forgot Password?
        </Link>
        <Link href="/register" className="hover:underline">
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
