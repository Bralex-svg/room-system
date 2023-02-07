import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Controller from "../controller";
import { baseUrl } from "../configuration";
import { EndPointParams } from "../constants";

function Login() {
  const router = useRouter();

  const [data, setDate] = useState([]);

  const push = (e) => {
    e.preventDefault();
    router.push("/booking/check-room");
  };

  // const fetchSec = async () => {
  //   const { data } = await axios.post(
  //     "https://genapps.cktutas.edu.gh/venueapi",
  //     {
  //       type: "login",
  //       key: "apiapp098",
  //     }
  //   );
  //   console.log(data);
  // };

  // const fetchSec = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       "https://genapps.cktutas.edu.gh/venueapi/index.php",
  //       {
  //         type: "login",
  //         key: "apiapp098",
  //       }
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  async function testRequest() {
    try {
      const response = await Controller(
        baseUrl(
          EndPointParams.auth.login,
          EndPointParams.key,
          "department=statistics&password=statisticS0011"
        ),
        "post"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    testRequest();
  }, []);
  // useEffect(() => {
  //   fetchSec();
  // }, []);

  return (
    <>
      <h1 className="absolute top-[30px] text-5xl font-bold ml-[15%] text-white">
        CONFERENCE ROOM BOOKING SYSTEM
      </h1>
      <h2 className="absolute top-[600px] text-white text-2xl font-medium ml-[5%]">
        The system is powered by DICTS
      </h2>
      <div className="absolute  top-[70px] sm:top-[120px] left-0 rounded-lg sm:left-[800px] bg-gray-100 z-20">
        <div>
          <form className="max-w-[550px] mt-[20%]   h-[400px] w-[300px] sm:w-[400px]  ">
            <h2 className="text-4xl -translate-y-[130%]  font-bold text-center">
              SIGN IN
            </h2>
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-2xl ml-[7%] inline-block mb-2 text-gray-700"
              >
                Dept. Name:
              </label>
              <input
                type="text"
                className="
        form-control
        block
        w-[70%]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        ml-[8%]
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                // id="exampleFormControlInput1"
                placeholder="Enter your department's name"
              />
            </div>
            <div className="mb-3 xl:w-96">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label text-2xl ml-[7%] inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                className="
        form-control
        block
     w-[70%]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
            ml-[8%]
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                // id="exampleFormControlInput1"
                placeholder="Enter password"
              />
            </div>

            <div>
              <p className="ml-[30%]">Forgot Passwprd</p>
            </div>
            <button
              onClick={push}
              className="bg-blue-900 my-[15%] ml-[35%] py-2 px-8 text-white"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
