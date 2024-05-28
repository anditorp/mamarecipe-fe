"use client";

import React, { useState } from "react";
import { Button, Input, Checkbox } from "@/components/index";
import { register } from "@/service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password, confirmPassword) => {
    return password.length >= 6 && password === confirmPassword;
  };

  const validatePhoneNumber = (phone) => {
    const re = /^\d+$/;
    return re.test(String(phone));
  };

  const handleFormData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");

      if (!validateEmail(email)) {
        setError("Invalid email format");
        return;
      }

      if (!validatePassword(password, confirmPassword)) {
        setError("Passwords do not match or are less than 6 characters");
        return;
      }

      if (!validatePhoneNumber(phone)) {
        setError("Invalid phone number format");
        return;
      }

      const payload = {
        name,
        email,
        phone,
        password,
      };

      await register(payload);
      router.push("/login");
    } catch (error) {
      console.log(error);
      setError("An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mt-10">
      <div className="flex gap-14">
        <div className="max-lg:hidden">
          <img src="/auth-image.png" alt="RegisterImg" />
        </div>
        <div className="w-[570px] h-[822px] max-sm:w-[400px]">
          <h1 className="text-4xl font-semibold text-primary mb-4 text-center">
            Let’s Get Started!
          </h1>
          <p className="text-tertiary mb-10 text-center">
            Create a new account to access all features
          </p>
          <form onSubmit={handleFormData}>
            <Input
              label="Name"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
              className="w-full border rounded-md py-2 px-3 mb-4"
              required
            />
            <Input
              label="Email"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email Address"
              className="w-full border rounded-md py-2 px-3 mb-4"
              required
            />
            <Input
              label="Phone Number"
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter Phone Number"
              className="w-full border rounded-md py-2 px-3 mb-4"
              required
            />
            <Input
              label="Password"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              className="w-full border rounded-md py-2 px-3 mb-4"
              required
            />
            <Input
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border rounded-md py-2 px-3 mb-4"
              required
            />
            <Checkbox label="I agree to terms & conditions" required />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button
              name="Register Account"
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Register Account
            </Button>
          </form>
          <p className="text-base text-gray-700 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-500">
              Log in Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
