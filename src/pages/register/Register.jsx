// import axios from "axios";
import React, { useState } from "react";
import { API_REGISTER } from "../../constant/Apis";
import axiosClient from "../../services/axiosClient";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [formRegister, setFormRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosClient.post(API_REGISTER, formRegister);
      console.log(res, "ressss");
      if (res.status === 201) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Account</h2>
          <div className="container">
            <div className="max-w-xl mx-auto">
              <h2 className="font-semibold text-2xl">Register</h2>

              <form action="" className="mt-5">
                <div>
                  <input
                    type="text"
                    name="name"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Full Name*"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-3">
                  <input
                    name="email"
                    type="email"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Email*"
                    onChange={handleChange}
                  />
                  {/* <span className="mt-2 inline-block text-xs text-red-600">
                    Email or password invalid
                  </span> */}
                </div>

                <div className="mt-3 mb-5">
                  <input
                    name="password"
                    type="password"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Password*"
                    onChange={handleChange}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-12 pb-12"></section>
    </>
  );
};
