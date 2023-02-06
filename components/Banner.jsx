import React from "react";
import Book from "../public/images/book.jpg";
import Image from "next/image";
function Banner() {
  return (
    <div>
      <div className="bg-gradient-to-tr   from-gray-900 to-gray-900 h-[42rem] w-full relative">
        <div className="w-[100%] h-[100%] object-cover absolute mix-blend-overlay">
          <Image src={Book} alt="" width="3000%" height="1500%" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
