"use client";

import React, { useEffect, useState } from "react";
import { Tabs } from "../../../components/index";

const Profile = () => {
  const [myProfile, setMyProfile] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getMyProfile = async () => {
    try {
      setLoading(true);

      const response = await fetch(`/v1/users/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        // throw new Error('Login failed');
        setError("Get my profile failed");
        toast.error(error);
        setLoading(false);
        return;
      }

      const res = await response.json();
      setMyProfile(res.data);

      // toast.success(`Get my profile success`)
      // console.log(res.data);
    } catch (err) {
      setError(err.message);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <section className="flex flex-col items-center mt-20">
        <div className="flex flex-row items-end mb-5">
          <img
            className="rounded-full size-[172px]"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            alt="image error"
          />
          <details className="dropdown relative">
            <summary className="btn border-none shadow-none flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="-ml-10"
              >
                <path
                  d="M12 20H21"
                  stroke="#EFC81A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.5 3.49998C16.8978 3.10216 17.4374 2.87866 18 2.87866C18.2786 2.87866 18.5544 2.93353 18.8118 3.04014C19.0692 3.14674 19.303 3.303 19.5 3.49998C19.697 3.69697 19.8532 3.93082 19.9598 4.18819C20.0665 4.44556 20.1213 4.72141 20.1213 4.99998C20.1213 5.27856 20.0665 5.55441 19.9598 5.81178C19.8532 6.06915 19.697 6.303 19.5 6.49998L7 19L3 20L4 16L16.5 3.49998Z"
                  stroke="#EFC81A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-primary rounded-box w-52 absolute top-10">
              <li>
                <a>Change Photo Profile</a>
              </li>
              <li>
                <a>Change Password</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="flex flex-col items-center mb-10">
          <h3>{myProfile.name || " Garneta Sharina"}</h3>
          <svg
            width="319"
            height="1"
            viewBox="0 0 319 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="0.5"
              x2="318.5"
              y2="0.5"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>
      <section className="mb-10 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Tabs />
        </div>
      </section>
    </main>
  );
};

export default Profile;
