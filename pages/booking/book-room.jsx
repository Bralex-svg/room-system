import React from "react";
import Room from "../../public/images/room.jpg";
import Image from "next/image";
import Book from "../../components/Book";
function Booking() {
  return (
    <div>
      <div className="bg-gradient-to-tr   from-gray-900 to-gray-900 h-[42rem] w-full relative">
        <div className="w-[100%] h-[100%] object-cover absolute mix-blend-overlay">
          <Image src={Room} alt="" width="3000%" height="1500%" />
        </div>
      </div>
      <Book />
    </div>
  );
}

export default Booking;
