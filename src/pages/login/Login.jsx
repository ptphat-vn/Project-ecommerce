import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Account</h2>
          <div className="container">
            <div className="max-w-xl mx-auto">
              <h2 className="font-semibold text-2xl">Login</h2>

              <form action="" className="mt-5">
                <div>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Email*"
                    onChange={handleChange}
                  />
                  {/* <span className="mt-2 inline-block text-xs text-red-600">
                    Email or password invalid
                  </span> */}
                </div>

                <div className="mt-3">
                  <input
                    id="password"
                    type="password"
                    className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                    placeholder="Password*"
                    onChange={handleChange}
                  />
                </div>

                <div className="flex justify-between ">
                  <Link
                    to={"/register"}
                    class="text-xs mt-5 mb-5 block hover:underline"
                  >
                    Register
                  </Link>
                  <Link
                    to={"/forgetpassword"}
                    class="text-xs mt-5 mb-5 block hover:underline"
                  >
                    Forgot password ?
                  </Link>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="w-full uppercase h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="pt-12 pb-12"></section>
    </>
  );
};
