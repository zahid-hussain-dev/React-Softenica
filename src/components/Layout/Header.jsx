import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setshowDropdownuser } from "../store/slices/user/userSlice";
export const Header = () => {
  const dispatch = useDispatch();
  const showDropdownforUser = useSelector(
    (state) => state.user.showDropdownuser
  );
  const showdropdownUser = () => {
    dispatch(setshowDropdownuser(!showDropdownforUser));
  };
  return (
    <nav
      className="bg-white px-2 sm:px-4 py-2.5 border-b-2 border-gray-200 w-full z-20 top-0 left-0 sticky"
      // onClick={() => {
      //   dispatch(setshowDropdownuser(!showDropdownforUser));
      // }}
      style={{ fontFamily: "mulish" }}
    >
      <div className=" flex flex-wrap justify-between items-center ">
        <div className="flex md:order-2 ml-auto">
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div className="text-gray-900 text-sm font-medium items-center flex flex-wrap mr-16">
              <svg
                className="mr-3"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.08984 8.00057C8.32495 7.33224 8.789 6.76868 9.3998 6.4097C10.0106 6.05073 10.7287 5.91951 11.427 6.03928C12.1253 6.15906 12.7587 6.52209 13.2149 7.0641C13.6712 7.6061 13.9209 8.29209 13.9198 9.00057C13.9198 11.0006 11 12.0005 11 12.0005"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.25 13C10.25 13.4142 10.5858 13.75 11 13.75C11.4142 13.75 11.75 13.4142 11.75 13H10.25ZM10.25 12V13H11.75V12H10.25Z"
                  fill="#122C44"
                />
                <path
                  d="M11 16H11.01"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Need Help ?
            </div>
            <div
              className="flex text-center justify-center ml-6 cursor-pointer"
              onClick={showdropdownUser}
            >
              <svg
                className="text-center justify-center mr-3 mt-2.5"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.83765 5.61719C4.31567 5.85296 0.756836 8.36434 0.756836 11.4277C0.756836 13.7528 2.80706 15.7599 5.77251 16.6953V17.4774V19.1991L7.27251 18.3539L8.83765 17.4721V15.7504L8.49067 15.9459L7.27251 16.6322V15.5957L6.22377 15.2648C3.52596 14.4138 2.25684 12.7888 2.25684 11.4277C2.25684 10.4785 2.83643 9.43305 4.15746 8.55584C5.32527 7.78037 6.95926 7.22983 8.83765 7.11945V5.61719Z"
                  fill="#122C44"
                />
                <rect
                  x="11.5381"
                  y="0.749023"
                  width="12.7111"
                  height="22.5"
                  rx="2.25"
                  stroke="#122C44"
                  strokeWidth="1.5"
                />
                <line
                  x1="7.56738"
                  y1="11.249"
                  x2="8.08759"
                  y2="11.249"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="16.6582"
                  y1="20.249"
                  x2="19.1986"
                  y2="20.249"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="4.53711"
                  y1="11.249"
                  x2="5.05731"
                  y2="11.249"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex-col">
                <div className="text-center text-gray-900 text-sm font-medium m-auto">
                  Contact Us
                </div>
                <div className="text-center text-gray-900 text-sm font-normal m-auto">
                  0800 1234 567
                </div>
              </div>
              <svg
                className="text-center justify-center ml-4 mr-3 mt-5"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999023 0.999023L4.99902 4.99902L8.99902 0.999023"
                  stroke="#122C44"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {showDropdownforUser ? (
              <div className="absolute rounded-lg bg-white top-14 shadow-md right-6 ">
                <ul className="py-2 text-sm text-gray-900 ">
                  <li>
                    <a className="flex py-2 px-4  hover:bg-gray-100">
                      <svg
                        className="mt-2"
                        width="20"
                        height="21"
                        viewBox="0 0 24 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <mask id="path-1-inside-1_228_102" fill="white">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11.999 16.097C18.6264 16.097 23.999 12.4933 23.999 8.048C23.999 3.60267 18.6264 -0.000976562 11.999 -0.000976562C5.37161 -0.000976562 -0.000976562 3.60267 -0.000976562 8.048C-0.000976562 11.2589 2.80197 14.0306 6.85616 15.3224V18.7799L11.5789 16.0921C11.7184 16.0954 11.8584 16.097 11.999 16.097Z"
                          />
                        </mask>
                        <path
                          d="M6.85616 15.3224H8.35616V14.2261L7.31156 13.8932L6.85616 15.3224ZM6.85616 18.7799H5.35616V21.3595L7.5981 20.0836L6.85616 18.7799ZM11.5789 16.0921L11.6135 14.5925L11.1981 14.583L10.837 14.7885L11.5789 16.0921ZM22.499 8.048C22.499 9.61738 21.5509 11.2179 19.6487 12.4938C17.7562 13.7632 15.0561 14.597 11.999 14.597V17.597C15.5694 17.597 18.8693 16.629 21.3199 14.9852C23.7608 13.3479 25.499 10.924 25.499 8.048H22.499ZM11.999 1.49902C15.0561 1.49902 17.7562 2.33283 19.6487 3.60224C21.5509 4.87813 22.499 6.47863 22.499 8.048H25.499C25.499 5.17205 23.7608 2.74806 21.3199 1.11079C18.8693 -0.532957 15.5694 -1.50098 11.999 -1.50098V1.49902ZM1.49902 8.048C1.49902 6.47863 2.44712 4.87813 4.34931 3.60224C6.24184 2.33283 8.942 1.49902 11.999 1.49902V-1.50098C8.42863 -1.50098 5.12879 -0.532957 2.67817 1.11079C0.23722 2.74806 -1.50098 5.17205 -1.50098 8.048H1.49902ZM7.31156 13.8932C3.53345 12.6894 1.49902 10.304 1.49902 8.048H-1.50098C-1.50098 12.2137 2.07049 15.3718 6.40077 16.7516L7.31156 13.8932ZM5.35616 15.3224V18.7799H8.35616V15.3224H5.35616ZM7.5981 20.0836L12.3208 17.3958L10.837 14.7885L6.11423 17.4763L7.5981 20.0836ZM11.999 14.597C11.8699 14.597 11.7414 14.5955 11.6135 14.5925L11.5443 17.5917C11.6953 17.5952 11.8469 17.597 11.999 17.597V14.597Z"
                          fill="#122C44"
                          mask="url(#path-1-inside-1_228_102)"
                        />
                        <line
                          x1="6.74902"
                          y1="7.64941"
                          x2="8.24902"
                          y2="7.64941"
                          stroke="#122C44"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="11.749"
                          y1="7.64941"
                          x2="13.249"
                          y2="7.64941"
                          stroke="#122C44"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="16.749"
                          y1="7.64941"
                          x2="18.249"
                          y2="7.64941"
                          stroke="#122C44"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="flex flex-col ml-4">
                        <div className="text-sm font-medium">088 334344</div>
                        <div className="text-xs text-gray-400">
                          {" "}
                          Mo. - Fr. von 8:00 - 18:00 Uhr{" "}
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      // href="#"
                      className="flex py-2 px-4 hover:bg-gray-100"
                      onClick={() => {
                        dispatch(setshowDropdownuser(false));
                      }}
                    >
                      <svg
                        className="mt-2"
                        width="16"
                        height="24"
                        viewBox="0 0 16 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.749023"
                          y="0.749023"
                          width="14.5"
                          height="22.5"
                          rx="2.25"
                          stroke="#122C44"
                          strokeWidth="1.5"
                        />
                      </svg>
                      <div className="flex flex-col ml-4">
                        <div className="text-sm font-medium">
                          Digitaler Chat-Assistent
                        </div>
                        <div className="text-xs text-gray-400">
                          {" "}
                          24/7 für Sie verfügbar
                        </div>
                      </div>
                    </a>
                  </li>

                  <li>
                    <a
                      // href="#"
                      className="flex py-2 px-4 hover:bg-gray-100  "
                      onClick={() => {
                        dispatch(setshowDropdownuser(false));
                      }}
                    >
                      <svg
                        className="mt-2"
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <line
                          x1="0.801758"
                          y1="8.19629"
                          x2="19.1965"
                          y2="8.19629"
                          stroke="#122C44"
                          strokeWidth="1.5"
                          strokeLinecap="square"
                        />
                        <line
                          x1="5.22266"
                          y1="0.749023"
                          x2="5.22266"
                          y2="4.77534"
                          stroke="#122C44"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <line
                          x1="14.7754"
                          y1="4.77539"
                          x2="14.7754"
                          y2="0.749075"
                          stroke="#122C44"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <rect
                          x="0.749023"
                          y="2.74902"
                          width="18.5"
                          height="17.5"
                          rx="2.25"
                          stroke="#122C44"
                          strokeWidth="1.5"
                        />
                      </svg>

                      <div className="flex flex-col ml-4">
                        <div className="text-sm font-medium">
                          Expertenberatung
                        </div>
                        <div className="text-xs text-gray-400">
                          {" "}
                          Persönliches Beratungsgespräch
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
            // onClick={() => setOpenModal(!OpenModal)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
