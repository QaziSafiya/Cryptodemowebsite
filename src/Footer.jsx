import React from "react";
import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[1240px] h-full relative  border-blue-800 ">
        <div className="grid md:grid-cols-6 grid-cols-1">
          <div className="md:mx-2    md:my-6 ">
            <h1 className="md:mb-2 md:mt-9 text-2xl text-blue-900  font-bold">
              Let's More
            </h1>
            <p className="text-blue-900  my-5 md:mb-5">
              Lorem ipsum et voluptate praesentium nesciunt eveniet asperiores
              sapiente error saepe. Autem alias cum atque.
            </p>
          </div>
          <div className=" md:my-9 md:mt-[35px] text-blue-900">
            <h1 className="md:text-2xl text-blue-900 md:mb-3 font-bold mt-7">
              Solution
            </h1>
            <p className="md:my-2">lorem ipsum</p>
            <p className="md:my-2">many ipsum</p>
            <p className="md:my-2">abour ipsum</p>
          </div>

          <div className=" md:my-9 md:mt-[35px] text-blue-900">
            <h1 className="md:text-2xl text-blue-900 md:mb-3 font-bold mt-7">
              Legal
            </h1>
            <p className="md:my-2">Claims</p>
            <p className="md:my-2">Privacy</p>
            <p className="md:my-2">Terms</p>
            <p className="md:my-2">Conditions</p>
          </div>

          <div className=" md:my-9 md:mt-[35px] text-blue-900">
            <h1 className="md:text-2xl text-blue-900 md:mb-3 font-bold mt-7">
              Support
            </h1>
            <p className="md:my-2">loremipsum</p>
            <p className="md:my-2">manyipsum</p>
            <p className="md:my-2">abouripsum</p>
          </div>

          <div className=" md:mx-[50px] md:px-9 md:mt-8 text-blue-900 mt-7">
            <h1 className="font-bold mb-4 text-2xl md:mt-8">Email</h1>
            <p className="mb-3">crypto@123gmail.com</p>
            <p>WWW.crypto.com</p>
            <p>9870756434</p>
          </div>
        </div>

        <div className="flex mt-5 md:ml-6 ml-12 ">
          <p className="md:px-2 px-3 text-blue-900">
            <FaInstagram size={30} />
          </p>
          <p className="md:px-2 px-3 text-blue-900">
            <FaFacebookSquare size={30} />
          </p>
          <p className="md:px-2 px-3 text-blue-900">
            <FaTwitter size={30} />
          </p>
          <p className="md:px-2 px-3 text-blue-900">
            <FaLinkedin size={30} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
