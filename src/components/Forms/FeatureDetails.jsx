import React from "react";
import { SaveFile } from "../assests/svgs/SaveFile";
import { SafeHand } from "../assests/svgs/SafeHand";
import { Pig } from "../assests/svgs/Pig";
import { Progress } from "../assests/svgs/Progress";
import { Security } from "../assests/svgs/Security";
import { Tree } from "../assests/svgs/Tree";
import { Chat } from "../assests/svgs/Chat";

export const FeatureDetails = () => {
  const EquipFeatures = [
    {
      id: 1,
      label: "Heizung",
      name: "Effizienz",
      status: "completed",
      value: "2/10",
      className: "border-t-2 border-r-2",
      icon: Tree,
    },
    {
      id: 2,
      label: "Beschattung",
      name: "Komfort",
      status: "completed",
      className: "border-t-2 border-r-2",
      value: "10/10",
      icon: Chat,
    },
    {
      id: 3,
      label: "Beschattung",
      name: "Sicherheit",
      status: "completed",
      className: "border-t-2 border-r-2",
      value: "5/10",
      icon: Security,
    },
    {
      id: 4,
      label: "Beschattung",
      name: "Wertsteigerung",
      value: "2/10",
      className: "border-t-2 border-r-2",
      status: "completed",
      icon: Progress,
    },
  ];
  const SavingFeatures = [
    {
      id: 1,
      label: "Heizung",
      name: "Heizkosten",
      status: "completed",
      value: "-35%",
      icon: SaveFile,
    },
    {
      id: 2,
      label: "Beschattung",
      name: "Stromkosten",
      status: "completed",
      value: "-50%",
      icon: Pig,
    },
    {
      id: 3,
      label: "Beschattung",
      name: "CO Emmisionen",
      status: "completed",
      value: "-40%",
      icon: SafeHand,
    },
  ];

  return (
    <div className="flex flex-wrap mb-2  mt-2">
      <div className="flex-1">
        <div className="flex flex-wrap mx-2">
          <h1 className="text-base font-semibold w-3/4">
            Ihre Ausstattung im Vergleich
          </h1>
          <div className="text-base font-normal underline ml-auto">
            Mehr Info
          </div>
        </div>
        <div className="flex flex-wrap mt-3">
          {EquipFeatures.map((items, index) => (
            <div key={items.id} className=" mx-4">
              <div>
                <div
                  className={`bg-gray-50  px-6 py-4 rounded-full w-fit border-l-white border-b-2 border-l-2 border-b-white border-green-50 ${items.className}`}
                >
                  {" "}
                  <items.icon />
                  <div className="text-sm font-medium"> {items.value}</div>
                </div>
                <div className="text-sm font-normal text-center">
                  {items.name}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap mx-2">
          <h1 className="text-base font-semibold w-3/4">Ihre Ersparnis</h1>
          <div className="text-base font-normal underline ml-auto">
            Mehr Info
          </div>
        </div>
        <div className="flex flex-wrap mt-3">
          {SavingFeatures.map((items, index) => (
            <div key={items.id} className=" mx-4 ">
              <div>
                <div
                  className={`bg-gray-50 px-6 py-4 rounded-full w-fit border-2 border-l-white border-b-2 border-l-2 border-b-white  border-green-50 `}
                >
                  {" "}
                  <items.icon />
                  <div className="text-sm font-medium"> {items.value}</div>
                </div>
                <div className="text-sm font-normal text-center">
                  {items.name}{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
