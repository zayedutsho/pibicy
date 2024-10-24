"use client";
import React, { useState } from "react";
import Link from "next/link";
import InputField from "@/components/custom/inputs/InputField";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    username: "",
    displayName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    dateOfBirth: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex justify-center items-center min-h-screen mt-5 px-4 sm:px-0">
      <form
        className="bg-white shadow-md rounded px-8 pb-8 mb-4 w-full max-w-5xl"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            id="name"
            label="Full Name"
            type="text"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <InputField
            id="username"
            label="Username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            id="email"
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            id="phone"
            label="Phone"
            type="text"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            id="password"
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <InputField
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField
            id="address"
            label="Address"
            type="text"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleInputChange}
            required={false}
          />
          <InputField
            id="city"
            label="City"
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleInputChange}
            required={false}
          />
          <InputField
            id="state"
            label="State"
            type="text"
            name="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleInputChange}
            required={false}
          />
          <InputField
            id="country"
            label="Country"
            type="text"
            name="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleInputChange}
            required={false}
          />
          <InputField
            id="zip"
            label="Zip Code"
            type="text"
            name="zip"
            placeholder="Enter your zip code"
            value={formData.zip}
            onChange={handleInputChange}
            required={false}
          />
          <InputField
            id="dateOfBirth"
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            required={false}
          />
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            type="submit"
            className="bg-primary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
