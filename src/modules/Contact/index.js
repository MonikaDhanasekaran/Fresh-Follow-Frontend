import React, { useState } from 'react';
import Header from "../../Components/Header/Header";
import { FaPaperPlane } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";

const Contact = () => {

  const navigate = useNavigate();
  const [addData, setAddData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInput = (value) => {
    return setAddData(data => {
      return { ...data, ...value }
    });
  }

  const handleSend = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://my-fresh-follow-app.onrender.com/freshFollow/contact/create", addData, {
      headers: {
        accesstoken: localStorage.getItem("token"),
      },
    });
    if (response) {
      setAddData({
        name: "",
        email: "",
        message: "",
      });
      setAddData(response.data);
      toast(response.data.msg);
      navigate("/home");
    }
  }

  return (
    <>
      <Header />
      <div id="Contact">
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="name" className="leading-7 text-sm text-white-600">Name</label>
                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white 
                  focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={addData.name}
                      onChange={(e) => handleInput({ name: e.target.value })} />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 
                  focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={addData.email}
                      onChange={(e) => handleInput({ email: e.target.value })} />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 
                  focus:bg-white focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 
                  ease-in-out" value={addData.message}
                      onChange={(e) => handleInput({ message: e.target.value })}></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="flex mx-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg" onClick={handleSend}>
                    Send &nbsp; <FaPaperPlane className='mt-1' />
                  </button>
                </div>
                <div className="p-2 w-full pt-8 mt-5 border-t border-gray-200 text-center">
                  <a href='' className="text-red-500">admin@gmail.com</a>
                  <p className="leading-normal my-5">49 Smith St.
                    <br />Saint Cloud, MN 56301
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Contact;