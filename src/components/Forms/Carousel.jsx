import React from "react";
import imagepin from "../assests/images/Home1.png";
import ImagewithPin2 from "../assests/images/Home2.png";
import { Infoicon } from "../assests/svgs/Infoicon";
import ImagewithPin from "../assests/images/Home3.png";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Carousel = () => {
  const slideImages = [
    {
      url: imagepin,
    },
    {
      url: ImagewithPin2,
    },
    {
      url: ImagewithPin,
    },
  ];

  const Progress = [
    {
      id: 1,
      name: "Effizienz",
      value: "35%",
      change: "3/10",
    },
    {
      id: 2,
      name: "Sicherheit",
      value: "100%",
      change: "10/10",
    },
    {
      id: 3,
      name: "Komfort",
      value: "40%",
      change: "5/10",
    },
    {
      id: 4,
      name: "Wertsteigerung",
      value: "20%",
      change: "2/10",
    },
  ];
  const ProgressChnage = [
    {
      id: 1,
      name: "Heizkosten",
      value: "35%",
      change: "3/10",
    },
    {
      id: 2,
      name: "Stromverbrauch",
      value: "40%",
      change: "5/10",
    },
    {
      id: 3,
      name: "CO  Emmisionen",
      value: "100%",
      change: "10/10",
    },
  ];

  return (
    <div className=" ">
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div key={index}>
              <div
                className="flex items-center justify-center h-[450px]"
                style={{
                  //   ...divStyle,
                  backgroundSize: "cover",
                  backgroundImage: `url(${slideImage.url})`,
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
      <div className="flex flex-wrap mb-2 mt-2 space-x-0 xl:space-x-2 lg:space-x-2 md:space-x-2 sm:space-x-2 mx-2">
        <div className="flex-1 mt-2 lg:mt-0 md:mt-0 xl:mt-0 sm:mt-2 bg-gray-50 rounded-md p-2">
          <div className="flex flex-wrap mx-2">
            <h1 className="text-base font-semibold">
              Ihre Ausstattung im Vergleich
            </h1>
            <div className="ml-4 mt-1">
              <Infoicon />
            </div>
          </div>
          <div className="flex flex-wrap p-1 mt-2">
            {Progress.map((items, index) => (
              <div key={items.id} className="flex w-1/2 px-2">
                <div className="mr-auto w-10 truncate">{items.name}</div>
                <div className="contents mx-3 pt-2">
                  <div className="w-16 bg-gray-300  hover:bg-gray-50 mt-2 mx-2  rounded-full h-2 ">
                    <div
                      className="bg-green-50  hover:bg-gray-500  w-full -mt-[1px] h-2 rounded-full"
                      style={{ width: `${items.value}` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-auto">{items.change}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 mt-2 lg:mt-0 md:mt-0 xl:mt-0 sm:mt-2 bg-gray-50 rounded-md p-2">
          <div className="flex flex-wrap mx-2">
            <h1 className="text-base font-semibold">Ihre Ersparnis</h1>
            <div className="ml-4 mt-1">
              <Infoicon />
            </div>
          </div>
          <div className="flex flex-wrap p-1 mt-2">
            {ProgressChnage.map((items, index) => (
              <div key={items.id} className="flex w-1/2 px-2">
                <div className="mr-auto w-10 truncate">{items.name}</div>
                <div className="contents mx-3 pt-2">
                  <div className="w-16 bg-gray-300  hover:bg-gray-500 mt-2 mx-2  rounded-full h-2 ">
                    <div
                      className="bg-green-50  hover:bg-gray-50  w-full -mt-[1px] h-2 rounded-full"
                      style={{ width: `${items.value}` }}
                    ></div>
                  </div>
                </div>
                <div className="ml-auto">{items.change}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
