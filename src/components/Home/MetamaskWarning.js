import React, { useContext } from "react";
import { PiWarningOctagonBold } from "react-icons/pi";
import { AppContext } from '../../context/AppContext'
import { IoMdReturnRight } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const MetamaskWarning = () => {

  const {setResult} = useContext(AppContext);
  const navigate = useNavigate();

  function bahar() {
    setResult({
      isLoading: true,
      isAuthorized: false,
      username: '',
      email: '',
      id: '',
    })
    navigate('/')
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
      
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-80"></div>

      <div className="flex flex-col items-center bg-[#2B0404] p-16 rounded-xl border-red-500 border-2 text-white text-xl z-10">
        
        <div className=" flex items-center mr-4">
          <PiWarningOctagonBold className=" text-yellow-50 text-5xl" />
          <h2 className=" text-3xl ml-2 font-semibold">Warning...</h2>
        </div>

        <div className=" mt-4">
          <p>Yo have not installed the <span className=" text-yellow-50">Metamask</span>          </p>

            <button onClick={bahar} className="mt-4 text-red-500 hover:text-red-700 font-semibold flex items-center">
              Go back
              <IoMdReturnRight className="text-white ml-2" />
            </button>

        </div>

      </div>
    </div>
  );
};

export default MetamaskWarning;
