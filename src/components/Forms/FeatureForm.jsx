import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { setshowFeatures, setshowPrice } from "../store/slices/user/userSlice";

export const FeatureForm = () => {
  const dispatch = useDispatch();

  const [Features, SetFeatures] = useState([
    {
      id: 1,
      label: "Heizung",
      name: "light",
      value: "+ 1.232,00€",
      status: "completed",
      className: "absolute left-32",
      icon: "Light",
    },
    {
      id: 2,
      label: "Beschattung",
      name: "Bell",
      value: "+ 1.232,00€",
      status: "completed",
      className: "absolute left-96 top-20",
      icon: "Bell",
    },
    {
      id: 3,
      label: "Beschattung",
      name: "Charge",
      value: "+ 1.232,00€",
      status: "completed",
      className: "absolute left-48",
      icon: "Charge",
    },
    {
      id: 4,
      label: "Beschattung",
      name: "Door",
      className: "absolute left-2/3 top-28",
      value: "+ 1.232,00€",
      status: "completed",
      icon: "Door",
    },
    {
      id: 5,
      label: "Beschattung",
      name: "Lawn",
      className: "absolute left-4 top-36",
      value: "+ 1.232,00€",
      status: "completed",
      icon: "Lawn",
    },
    {
      id: 6,
      label: "Beschattung",
      name: "Camera",
      className: "absolute left-24",
      value: "+ 1.232,00€",
      status: "completed",
      icon: "Camera",
    },
  ]);
  const initialValues = {
    status: "",
    status1: "",
    status2: "",
    status3: "",
    description: "",
  };
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data", values);
  };

  const setValueRate = (Features) => {
    let rate = null;

    Object.entries(Features).forEach(([key, value], index) => {
      if (value.status !== "completed") {
        rate = rate + 1222;
      }
    });

    // console.log("rate", rate);

    if (rate) {
      dispatch(setshowPrice(rate));
    }
  };

  const handleComplete = (id, index) => {
    console.log("id", id);
    const Task = Features.map((items) => {
      if (items.id === id) {
        if (items.status === "completed") {
          return { ...items, status: "Uncompleted" };
        } else {
          return { ...items, status: "completed" };
        }
      }
      return items;
    });
    SetFeatures(Task);
    dispatch(setshowFeatures(Task));
    // console.log("Features....", Task);
    setValueRate(Task);
    // Features[index].status === "Uncompleted";
    // console.log("UnCompleted")
  };
  // console.log("rate",rate)
  useEffect(() => {
    dispatch(setshowFeatures(Features));
  }, []);
  return (
    <>
      <div
        style={{ fontFamily: "mulish" }}
        className="text-gray-900 text-3xl mt-8 text-center font-bold"
      >
        Funktionen
      </div>
      <div className="w-full">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          // validationSchema={validationSchema}
          // validateOnMount
        >
          <Form>
            <div className="grid space-y-4 mt-4">
              {Features.map((items, index) => (
                <Field key={index} name={`description-${items.id} mt-8`}>
                  {(props) => {
                    const { field } = props;
                    return (
                      <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                        <input
                          {...field}
                          type="checkbox"
                          id={items.id}
                          name={items.name}
                          value={items.label}
                          onChange={() => handleComplete(items.id, index)}
                        />
                        <label htmlFor="sparen" className="ml-2">
                          {items.label}{" "}
                          <span className="text-right font-semibold float-right">
                            {items.value}
                          </span>
                        </label>
                        <br></br>
                      </div>
                    );
                  }}
                </Field>
              ))}
            </div>

            <Field>
              {(props) => {
                const {  form } = props;
                const { isSubmitting } = form;
                return (
                  <>
                    <div className="flex items-center justify-center pt-8 sm:px-6 lg:px-8">
                      <div className="w-full space-y-8">
                        <div className="flex flex-row space-x-3 justify-center">
                          <div className="flex flex-col w-4/5">
                            {!isSubmitting ? (
                              <button
                                type="submit"
                                className=" font-semibold text-gray-400 bg-gray-200 hover:bg-green-200 place-content-center rounded-full  py-2 px-2 flex flex-grow"
                              >
                                Funktionen vergleichen
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className=" font-semibold text-gray-400 bg-gray-200 hover:bg-green-200 place-content-center rounded-full py-2 px-2 flex flex-grow"
                              >
                                Funktionen vergleichen
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }}
            </Field>
          </Form>
        </Formik>
      </div>
    </>
  );
};
