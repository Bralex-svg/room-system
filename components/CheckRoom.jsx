import React from "react";
import { useRouter } from "next/router";
function Book() {
  const router = useRouter();

  const push = (e) => {
    e.preventDefault();
    router.push("/booking/book-room");
  };
  return (
    <>
      <h1 className="absolute top-[20px] text-5xl font-bold ml-[20%] text-white">
        CHECK FOR AVAILABILITY OF ROOM...
      </h1>

      <div className="absolute  top-[50px] sm:top-[100px] left-0 rounded-lg sm:left-[800px] bg-gray-100 z-20">
        <div>
          <form className="max-w-[550px] mt-[2%]   h-[520px] w-[300px] sm:w-[400px]  ">
            <h2 className="text-4xl -translate-y-[10%]  font-bold text-center">
              CHECK
            </h2>
            <div className="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                className="form-label text-2xl ml-[7%] inline-block mb-2 text-gray-700"
              >
                Venue:
              </label>
              <select
                // id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                   

                focus:border-blue-500 block w-[70%] ml-[8%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose your venue</option>
                <option value="NH1">NH1</option>
                <option value="VCR">Video Room</option>
                <option value="NH2">NH2</option>
              </select>
            </div>
            <div className="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                className="form-label text-2xl ml-[7%] inline-block mb-2 text-gray-700"
              >
                Date:
              </label>
              <input
                type="date"
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
                id="exampleFormControlInput1"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                className="form-label text-2xl ml-[7%] inline-block mb-2 text-gray-700"
              >
                Start Time:
              </label>
              <input
                type="time"
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
                id="exampleFormControlInput1"
                placeholder="Enter password"
              />
            </div>
            <div className="mb-3 xl:w-96">
              <label
                for="exampleFormControlInput1"
                className="form-label text-2xl ml-[7%] inline-block mb-2 text-gray-700"
              >
                End Time:
              </label>
              <input
                type="time"
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
                id="exampleFormControlInput1"
                placeholder="Enter password"
              />
            </div>

            <div>
              <p className="ml-[30%]">Forgot Passwprd</p>
            </div>
            <button
              onClick={push}
              className="bg-blue-900 my-[5%] ml-[35%] py-2 px-8 text-white"
            >
              CHECK
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Book;
