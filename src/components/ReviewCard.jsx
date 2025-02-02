import React from "react";
import { star } from "../assets/icons";

export const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="mt-6 max-w-sm info-text text-center">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <div className="flex">
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <img
            src={star}
            alt="rating"
            width={24}
            height={24}
            className="object-contain m-0"
          />
        </div>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">
        {customerName}
      </h3>
    </div>
  );
};
