import { useState, useRef, useEffect } from "react";
import { Header } from "../Layout/Header";
import { Footer } from "../Layout/Footer";
import { ConfigurationForm } from "../Forms/ConfigurationForm";
import imagepin from "../assests/images/Home1.png";
import ImagewithPin from "../assests/images/Home2.png";
import { Light } from "../assests/svgs/Light";
import { Bell } from "../assests/svgs/Bell";
import { Camera } from "../assests/svgs/Camera";
import { Charge } from "../assests/svgs/Charge";
import { Lawn } from "../assests/svgs/Lawn";
import { Door } from "../assests/svgs/Door";
import { setshowDropdownuser } from "../store/slices/user/userSlice";
import { FeatureForm } from "../Forms/FeatureForm";
import { useDispatch, useSelector } from "react-redux";
import { FeatureDetails } from "../Forms/FeatureDetails";
import { Gurentee } from "../Forms/Gurentee";
import { Carousel } from "../Forms/Carousel";

export const Main = () => {
  const [inputs, setInputs] = useState({});
  const [imageNumber, setImageNumber] = useState(1);

  const [imagepoint, setImagepoint] = useState(false);
  const showFeatures = useSelector((state) => state.user.showFeatures);
  const dispatch = useDispatch();

  console.log("show feature", showFeatures);
  const inputRef = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const isValueInRange = (value) => {
    return value >= -100 && value <= 100;
  };

  const setImageNumberCustom = (refValues) => {
    let imgNo = null;

    Object.entries(refValues).forEach(([key, value], index) => {
      if (isValueInRange(value)) {
        imgNo = index + 1;
      }
    });

    console.log("imgNo", imgNo);

    if (imgNo) setImageNumber(imgNo);
  };

  const scrollHandler = (_) => {
    const refValues = {
      "first-ref": inputRef.current.getBoundingClientRect().y,
      "second-ref": inputRef1.current.getBoundingClientRect().y,
      "third-ref": inputRef2.current.getBoundingClientRect().y,
    };

    // console.log(refValues);

    setImageNumberCustom(refValues);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);

    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, []);

  const Imgewithpin = () => {
    return (
      <div className="flex flex-col">
        <img src={imagepin} alt="img" />
      </div>
    );
  };
  const Imgewithpin1 = () => {
    return (
      <div className="flex flex-col">
        {Object.entries(showFeatures).map(([key, value]) => {
          const Icon = getIcon(value.icon);
          return (
            <div key={value.id} className="image point sm:hidden hidden lg:flex md:flex xl:flex flex-wrap relative top-32">
              <div className={value.className}>
                <div
                  className={
                    value.status === "completed"
                      ? `bg-white px-2 py-2 rounded-full w-fi `
                      : `bg-green-50 px-2 py-2 rounded-full w-fit SvgFilter`
                  }
                >
                  {" "}
                  <Icon />
                </div>
              </div>
            </div>
          );
        })}
        <img src={ImagewithPin} alt="img" />
        <FeatureDetails />
      </div>
    );
  };

  const getImage = () => {
    switch (imageNumber) {
      case 1:
        return Imgewithpin;

      case 2:
        return Imgewithpin1;

      case 3:
        return Carousel;

      default:
        return Imgewithpin;
    }
  };
  const getIcon = (imageName) => {
    switch (imageName) {
      case "Light":
        return Light;

      case "Bell":
        return Bell;

      case "Door":
        return Door;
      case "Camera":
        return Camera;
      case "Lawn":
        return Lawn;
      case "Charge":
        return Charge;
      default:
        return Light;
    }
  };
  const Image = getImage();
  return (
    <>
      <Header />
      <div
        style={{ fontFamily: "mulish" }}
        className="flex"
        onClick={() => {
          dispatch(setshowDropdownuser(false));
        }}
      >
        <div className="w-2/3 sticky top-0 lg:flex xl:flex md:flex sm:hidden hidden flex-col justify-center h-screen bg-white py-10">
          <Image />
        </div>
        <main className="flex flex-col overflow-scroll">
          <div className="  p-10 my-class1" id="my-class1" ref={inputRef}>
            <div className="flex sm:flex xl:hidden mb-2 lg:hidden md:hidden">
              <Imgewithpin />
            </div>
            <ConfigurationForm />
          </div>

          <div className=" p-10" ref={inputRef1}>
            <div className="flex sm:flex xl:hidden mb-2 lg:hidden md:hidden">
              <Imgewithpin1 />
            </div>
            <FeatureForm />
          </div>
          <div className=" p-10" ref={inputRef2}>
            <div className=" xl:hidden mb-2 lg:hidden md:hidden">
              <Carousel />
            </div>
            <Gurentee />
          </div>
          <div className="h-96 bg-white p-10"></div>
        </main>
      </div>
      <Footer />
    </>
  );
};
