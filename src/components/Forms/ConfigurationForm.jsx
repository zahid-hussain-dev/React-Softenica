import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Modal from "react-modal";

export const ConfigurationForm = () => {
  const onSubmit = (values, onSubmitProps) => {
    console.log("Form Data", values);
  };

  const initialValues = {
    status: "",
    status1: "",
    status2: "",
    status3: "",
    description: "",
  };
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div
        style={{ fontFamily: "mulish" }}
        className="text-gray-900 text-3xl text-center font-bold"
      >
        Configuration for your Home
      </div>

      <div className="w-full mt-4">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <div className="grid space-y-2">
              <Field name="status">
                {(props) => {
                  const { field } = props;
                  return (
                    <>
                      {" "}
                      <label className="text-base font-semibold" htmlFor="cars">
                        Installationsort
                      </label>
                      <select
                        {...field}
                        className="form-select  
                            block
                            w-full
                            rounded-full
                            px-4
                            placeholder-gray-400
                            py-3
                            text-base
                            font-normal
                            bg-default bg-clip-padding bg-no-repeat
                            border border-solid border-gray-200
                            transition
                            text-gray-900
                            ease-in-out
                            m-0
                             focus:border-green-50 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option value="" disabled selected hidden>
                          Haus
                        </option>
                        <option value="active">Haus Active</option>
                        <option value="discontinued"> Haus Discontinued</option>
                        <option value="phase_out">Haus Phase out</option>
                      </select>
                    </>
                  );
                }}
              </Field>
              <Field name="status1">
                {(props) => {
                  const { field } = props;
                  return (
                    <>
                      {" "}
                      <label className="text-base font-semibold" htmlFor="cars">
                        Installationsort
                      </label>
                      <select
                        {...field}
                        className="form-select  
                          block
                          w-full
                          rounded-full
                          px-4
                          placeholder-gray-400
                          py-3
                          text-base
                          font-normal
                          bg-default bg-clip-padding bg-no-repeat
                          border border-solid border-gray-200
                          transition
                          text-gray-900
                          ease-in-out
                          m-0
                           focus:border-green-50 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option value="" disabled selected hidden>
                          Haus
                        </option>
                        <option value="active">Haus Active</option>
                        <option value="discontinued">Haus Discontinued</option>
                        <option value="phase_out">Haus Phase out</option>
                      </select>
                    </>
                  );
                }}
              </Field>
              <Field name="status2">
                {(props) => {
                  const { field } = props;
                  return (
                    <>
                      {" "}
                      <label className="text-base font-semibold" htmlFor="cars">
                        Installationsort
                      </label>
                      <select
                        {...field}
                        className="form-select  
                        block
                        w-full
                        rounded-full
                        px-4
                        placeholder-gray-400
                        py-3
                        text-base
                        font-normal
                        bg-default bg-clip-padding bg-no-repeat
                        border border-solid border-gray-200
                        transition
                        text-gray-900
                        ease-in-out
                        m-0
                         focus:border-green-50 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option value="" disabled selected hidden>
                          Haus
                        </option>
                        <option value="active">Haus Active</option>
                        <option value="discontinued">Haus Discontinued</option>
                        <option value="phase_out">Haus Phase out</option>
                      </select>
                    </>
                  );
                }}
              </Field>
              <Field name="status3">
                {(props) => {
                  const { field } = props;
                  return (
                    <>
                      {" "}
                      <label className="text-base font-semibold" htmlFor="cars">
                        Installationsort
                      </label>
                      <select
                        {...field}
                        className="form-select  
                      block
                      w-full
                      rounded-full
                      px-4
                      placeholder-gray-400
                      py-3
                      text-base
                      font-normal
                      bg-default bg-clip-padding bg-no-repeat
                      border border-solid border-gray-200
                      transition
                      text-gray-900
                      ease-in-out
                      m-0
                       focus:border-green-50 focus:outline-none"
                        aria-label="Default select example"
                      >
                        <option value="" disabled selected hidden>
                          Haus
                        </option>
                        <option value="active">Haus Active</option>
                        <option value="discontinued">Haus Discontinued</option>
                        <option value="phase_out">Haus Phase out</option>
                      </select>
                    </>
                  );
                }}
              </Field>
            </div>
            <div className="grid space-y-4 mt-32">
              <div
                style={{ fontFamily: "mulish" }}
                className="text-gray-900 text-3xl text-center font-bold"
              >
                Intention
              </div>
              <div className="text-base font-semibold">
                What are your preferences?
              </div>
              <Field name="description mt-8">
                {(props) => {
                  const { field } = props;
                  return (
                    <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                      <input
                        {...field}
                        type="checkbox"
                        id="sparen"
                        name="sparen"
                        value="sparen"
                      />
                      <label htmlFor="sparen" className="ml-2">
                        {" "}
                        Heizkosten sparen
                      </label>
                      <br></br>
                    </div>
                  );
                }}
              </Field>
              <Field name="description ">
                {(props) => {
                  const { field } = props;
                  return (
                    <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                      <input
                        {...field}
                        type="checkbox"
                        id="Stromkosten"
                        name="Stromkosten"
                        value="Stromkosten"
                      />
                      <label htmlFor="Stromkosten" className="ml-2">
                        {" "}
                        Stromkosten sparen
                      </label>
                      <br></br>
                    </div>
                  );
                }}
              </Field>
              <Field name="description ">
                {(props) => {
                  const { field } = props;
                  return (
                    <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                      <input
                        {...field}
                        type="checkbox"
                        id="Wohnkomfort"
                        name="Wohnkomfort"
                        value="Wohnkomfort"
                      />
                      <label htmlFor="Wohnkomfort" className="ml-2">
                        {" "}
                        Wohnkomfort steigern
                      </label>
                      <br></br>
                    </div>
                  );
                }}
              </Field>
              <Field name="description ">
                {(props) => {
                  const { field } = props;
                  return (
                    <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                      <input
                        {...field}
                        type="checkbox"
                        id="Sicherheit"
                        name="Sicherheit"
                        value="Sicherheit"
                      />
                      <label htmlFor="Sicherheit" className="ml-2">
                        {" "}
                        Mehr Sicherheit{" "}
                      </label>
                      <br></br>
                    </div>
                  );
                }}
              </Field>
              <Field name="description ">
                {(props) => {
                  const { field } = props;
                  return (
                    <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                      <input
                        {...field}
                        type="checkbox"
                        id="Wertsteigerung"
                        name="Wertsteigerung"
                        value="Wertsteigerung"
                      />
                      <label htmlFor="Wertsteigerung" className="ml-2">
                        {" "}
                        Wertsteigerung der Immobilie
                      </label>
                      <br></br>
                    </div>
                  );
                }}
              </Field>
              <Field name="description ">
                {(props) => {
                  const { field } = props;
                  return (
                    <div className="border py-3 bg-default relative block w-full px-4 border-gray-200 rounded-full hover:border-green-500 foucs: outline-none focus:border-green-50 transition-colors">
                      <input
                        {...field}
                        type="checkbox"
                        id="Barrierefreiheit"
                        name="Barrierefreiheit"
                        value="Barrierefreiheit"
                      />
                      <label htmlFor="Barrierefreiheit" className="ml-2">
                        {" "}
                        Barrierefreiheit im Alter
                      </label>
                      <br></br>
                    </div>
                  );
                }}
              </Field>
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
                                onClick={toggleModal}
                              >
                                Details zur Intention
                              </button>
                            ) : (
                              <button
                                type="submit"
                                className=" font-semibold text-gray-400 bg-gray-200 hover:bg-green-200 place-content-center rounded-full py-2 px-2 flex flex-grow"
                                onClick={toggleModal}
                              >
                                Details zur Intention
                              </button>
                            )}
                          </div>
                          <Modal
                            isOpen={isOpen}
                            onRequestClose={toggleModal}
                            contentLabel="My dialog"
                            className="mymodal px-10"
                            overlayClassName="myoverlay"
                            closeTimeoutMS={500}
                          >
                            <div className="flex text-center m-auto place-content-center">
                              <h3 className="text-2xl text-black text-center font-bold pl-3 pt-3 ">
                                Do you really want to leave?
                              </h3>
                              <div className="text-base font-bold absolute right-0 m-5">
                                <span
                                  className=" cursor-pointer"
                                  onClick={toggleModal}
                                >
                                  X
                                </span>
                              </div>
                            </div>
                            <h3 className="text-sm text-gray-400  font-medium px-8 pt-3 ">
                              We have got a great offer for you, just leave your
                              details and we will get back to you!
                            </h3>
                            <div className="mt-4">
                              <form className="px-8" onSubmit={handleSubmit}>
                                <input
                                  type="text"
                                  name="username"
                                  placeholder="Name"
                                  value={inputs.username || ""}
                                  className="
                          block
                          w-full
                          rounded-lg
                          px-2
                          placeholder-gray-400
                          py-2
                          text-base
                          font-normal
                          bg-default bg-clip-padding bg-no-repeat
                          border border-solid border-gray-200
                          transition
                          text-gray-900
                          ease-in-out
                          m-0
                           focus:border-green-50 focus:outline-none"
                                  onChange={handleChange}
                                />
                                <div className="mt-4">
                                  <input
                                    type="text"
                                    name="LastName"
                                    placeholder="Last Name"
                                    className="
                            block
                            w-full
                            rounded-lg
                            px-2
                            placeholder-gray-400
                            py-2
                            text-base
                            font-normal
                            bg-default bg-clip-padding bg-no-repeat
                            border border-solid border-gray-200
                            transition
                            text-gray-900
                            ease-in-out
                            m-0
                             focus:border-green-50 focus:outline-none"
                                    value={inputs.LastName || ""}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="mt-4">
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="admin@gmail.com"
                                    className="
                        block
                        w-full
                        rounded-lg
                        px-2
                        placeholder-gray-900
                        py-2
                        text-base
                        font-normal
                        bg-default bg-clip-padding bg-no-repeat
                        border border-solid border-gray-200
                        transition
                        text-gray-900
                        ease-in-out
                        m-0
                         focus:border-green-50 focus:outline-none"
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="small-svg   ">
                                  <svg
                                    className="ml-auto  cursor-pointer relative bottom-8 mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                                      stroke="#01E994"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M22 4L12 14.01L8.5 11.5"
                                      stroke="#01E994"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>
                                <div className="mt-4">
                                  <input
                                    type="text"
                                    name="phone"
                                    placeholder="03000000000"
                                    className="
                        block
                        w-full
                        rounded-lg
                        px-2
                        placeholder-gray-900
                        py-2
                        text-base
                        font-normal
                        bg-default bg-clip-padding bg-no-repeat
                        border border-solid border-gray-200
                        transition
                        text-gray-900
                        ease-in-out
                        m-0
                         focus:border-green-50 focus:outline-none"
                                    value={inputs.phone || ""}
                                    onChange={handleChange}
                                  />
                                </div>
                                <div className="small-svg   ">
                                  <svg
                                    className="ml-auto  cursor-pointer relative bottom-8 mr-2"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M22 11.0799V11.9999C21.9988 14.1563 21.3005 16.2545 20.0093 17.9817C18.7182 19.7088 16.9033 20.9723 14.8354 21.5838C12.7674 22.1952 10.5573 22.1218 8.53447 21.3744C6.51168 20.6271 4.78465 19.246 3.61096 17.4369C2.43727 15.6279 1.87979 13.4879 2.02168 11.3362C2.16356 9.18443 2.99721 7.13619 4.39828 5.49694C5.79935 3.85768 7.69279 2.71525 9.79619 2.24001C11.8996 1.76477 14.1003 1.9822 16.07 2.85986"
                                      stroke="#01E994"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                    <path
                                      d="M22 4L12 14.01L8.5 11.5"
                                      stroke="#01E994"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                </div>

                                <div className="flex p-3  rounded-b">
                                  <button
                                    type="submit"
                                    className="text-white m-auto bg-green-50 hover:bg-green-500  w-1/3 place-content-center font-medium rounded-full text-lg px-4 py-2.5 text-center inline-flex items-center "
                                    onClick={(e) => {
                                      toggleModal();
                                      handleSubmit(e);
                                    }}
                                  >
                                    {" "}
                                    Submit
                                  </button>
                                </div>
                              </form>
                            </div>
                          </Modal>
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
