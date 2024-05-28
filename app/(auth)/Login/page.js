"use client";

import React, { useState } from "react";
import { Button, Input, Checkbox } from "@/components/index";
import { login } from "@/service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword = (password) => {
    return password.length >= 6; // Example: password must be at least 6 characters long
  };

  const handleFormData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    try {
      const email = formData.get("email");
      const password = formData.get("password");

      if (!validateEmail(email)) {
        setError("Invalid email format");
        return;
      }

      if (!validatePassword(password)) {
        setError("Password must be at least 6 characters long");
        return;
      }

      const payload = {
        email,
        password,
      };

      await login(payload);
      router.push("/");
    } catch (error) {
      console.log(error);
      setError("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center mt-10">
      <div className="flex gap-14">
        <div className="max-lg:hidden">
          <img src="/auth-image.png" alt="LoginImg" />
        </div>
        <div className="w-[570px] h-[822px] max-sm:w-[400px]">
          <h1 className="text-4xl font-semibold text-primary mb-4 text-center">
            WELCOME
          </h1>
          <p className="text-tertiary mb-10 text-center">
            "Find delicious and inspiring recipes for your family's special
            meals"
          </p>
          <form onSubmit={handleFormData}>
            <Input
              label="Email"
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email Address"
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
            <Checkbox label="I agree to terms & conditions" required />
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <Button
              name="Log in"
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
            >
              Log in
            </Button>
            <a href="#" className="text-right text-sm text-gray-700 mb-4 block">
              Forgot Password?
            </a>
          </form>
          <p className="text-base text-gray-700 mt-6">
            Don’t have an account?{" "}
            <Link href="/register" className="text-yellow-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
