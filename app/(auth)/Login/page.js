import React from "react";
import { Button, Input, Checkbox } from "@/components/index";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className=" h-screen flex flex-col justify-center items-center mt-10">
        <div className="flex gap-14 ">
          <div className=" max-lg:hidden">
            <img src="/auth-image.png" alt="LoginImg" />
          </div>
          <div className="w-[570px] h-[822px] max-sm:w-[400px]  ">
            <h1 className="text-4xl font-semibold text-primary mb-4 text-center">
              WELCOME
            </h1>
            <p className=" text-tertiary mb-10 text-center">
              "Find delicious and inspiring recipes for your family's special
              meals"
            </p>
            <form>
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

              <Button
                name="Log in"
                type="submit"
                className=" w-full bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
              >
                Masuk
              </Button>
              <a
                href="#"
                className="  text-right text-sm text-gray-700 mb-4 block"
              >
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
    </>
  );
};

export default Login;
