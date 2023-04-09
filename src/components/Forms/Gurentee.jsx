import React from "react";
import { SecurityG } from "../assests/svgs/SecurityG";
import { Achivement } from "../assests/svgs/Achivement";
import { Feedback } from "../assests/svgs/Feedback";
export const Gurentee = () => {
  const GurenteeFeatures = [
    {
      id: 1,
      name: "Festpreisgarantie",
      label: "Sie kennen alle Kosten von Anfang an. Keine versteckten Kosten.",
      icon: SecurityG,
    },
    {
      id: 2,
      label:
        "Kostenfreie Stornierung, wenn Sie am Markt bessere Leistung finden.",
      name: "Best-Leistungsgarantie",
      icon: Achivement,
    },
    {
      id: 3,
      label:
        "Sind Sie nicht zufrieden, erhalten Sie bedingungslos Ihr Geld zurück.",
      name: "30 Tage “Geld zurück”",
      icon: Feedback,
    },
  ];
  return (
    <>
      <div
        style={{ fontFamily: "mulish" }}
        className="text-gray-900 text-3xl text-center font-bold"
      >
        Garantien
      </div>
      {GurenteeFeatures.map((items, index) => (
        <div key={items.id} className="flex  ml-6 cursor-pointer mt-4">
          <div className="bg-gray-50 h-fit p-2.5  rounded-full w-fit ">
            <items.icon />
          </div>
          <div className="flex-col ml-3">
            <div className=" text-gray-900 text-base font-medium m-auto">
              {items.name}
            </div>
            <div className=" text-gray-400 text-sm font-normal m-auto">
              {items.label}
            </div>
          </div>
        </div>
      ))}
      <div className="flex flex-row space-x-3 mt-4 justify-center">
        <div className="flex flex-col w-2/3">
          <button
            type="submit"
            className=" font-semibold text-gray-400 bg-gray-200 hover:bg-green-200 place-content-center rounded-full py-2 px-2 flex flex-grow"
          >
            Details zu Garantien
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-3 mt-16 justify-center">
        <div className="flex flex-col w-4/5">
          <button
            className="bg-green-50 hover:bg-green-500  rounded-3xl font-medium text-lg flex flex-grow  px-6 py-2  text-center  items-center justify-center  text-white"
            type="button"
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-3 mt-4 justify-center">
        <div className="flex flex-col w-4/5">
          <button
            className="bg-white hover:bg-green-50 hover:text-white hover:border-none  rounded-3xl font-medium text-lg  border-gray-900 border px-6 py-2  text-center flex flex-grow items-center justify-center  text-gray-900"
            type="button"
          >
            Save Configuration
          </button>
        </div>
      </div>
      <div className="flex flex-row space-x-3 mt-4 justify-center">
        <div className="flex flex-col items-center  w-4/5">
          <button
            className="bg-white w-fit underline hover:border-none  rounded-3xl font-medium text-lg   px-6 py-2  text-center flex flex-grow items-center justify-center  text-gray-900"
            type="button"
          >
            Need Help? Contact Us
          </button>
        </div>
      </div>
    </>
  );
};
