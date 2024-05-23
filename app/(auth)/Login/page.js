import React from "react";
import { Button, Input, Checkbox } from "@/components/index";

const Login = () => {
  return (
    <>
      <div className=" min-h-screen flex justify-center items-center">
        <div className="flex gap-14 ">
          <div className="hidden md:block">
            <img src="/auth-image.png" alt="LoginImg" />
          </div>
          <div className="w-[570px] h-[822px]  ">
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
              <a href="#" className="text-yellow-500">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
