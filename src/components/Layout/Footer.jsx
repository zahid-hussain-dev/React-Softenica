import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Footer = () => {
  const showPrice = useSelector((state) => state.user.showPrice);

  return (
    <nav className="bg-white  sm:px-4 py-2.5 border border-gray-100 shadow-lg px-4 w-full z-20 bottom-0 fixed left-0 "  style={{ fontFamily: "mulish" }}>
      <div className=" flex flex-wrap justify-between items-center ">
        <div className="flex-1 md:order-2 mx-4 ">
          <div
            className="sm:justify-center justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="footer-sticky"
          >
            <div className="text-gray-900 items-center text-sm font-medium sm:items-center sm:mr-0 md:mr-16 lg:mr-16 xl:mr-16 sm:mt-0 md:mt-2 lg:mt-2 xl:mt-2 mt-2 flex flex-col mr-0">
              <div className="font-semibold text-lg">Gesamtpreiseis</div>
              <div className="font-medium text-sm text-gray-400">
                {" "}
                inkl. MwSt{" "}
              </div>
            </div>
            <div className="flex text-center justify-center mr-auto cursor-pointer">
              <div className="font-medium line-through text-lg text-gray-400 mr-4">
                1.299€
              </div>
              <div className="font-semibold text-lg ml-4">{showPrice}€</div>
            </div>
          </div>
        </div>
        <div className="flex-1 md:order-2 mx-4 ">
          <div
            className=" sm:text-center  justify-between text-center w-full md:flex md:w-auto md:order-1"
            id="footer-sticky"
          >
            <button
              className="bg-white hover:bg-green-50 hover:text-white hover:border-none sm:mt-0 md:mt-2 lg:mt-2 xl:mt-2 mt-2 ml-6 rounded-3xl font-medium text-lg  border-gray-900 border px-6 py-2  text-center inline-flex items-center justify-center  text-gray-900"
              type="button"
            >
              Konfiguration speichern
            </button>
            <button
              className="bg-green-50 hover:bg-green-500 ml-6 rounded-3xl font-medium text-lg sm:mt-0 md:mt-2 lg:mt-2 xl:mt-2 mt-2  px-6 py-2  text-center inline-flex items-center justify-center  text-white"
              type="button"
            >
              In den Warenkorb
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
