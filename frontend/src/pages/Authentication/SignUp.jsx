import React from 'react';
import {Link} from 'react-router-dom'
const SignUp = () => {

  return (
    <>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <div>
              <h1 className="text-2xl font-semibold sm:text-3xl items-center uppercase text-[#240046] animate-bounce">
               Get Inspired ?
              </h1>
              <span className="text-md flex justify-center font-medium items-center uppercase underline text-[#5b8266]">
                Just Signup{' '}
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="2em"
                  width="2em"
                  className="text-[#5a189a] ml-2 animate-bounce"
                >
                  <path d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 012.83 0 2 2 0 11-2.83 0zM3 21a7.81 7.81 0 005-2l-3-3c-2 1-2 5-2 5z" />
                </svg>
              </span>
            </div>
            <p className="mt-4 text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
              nulla eaque error neque ipsa culpa autem, at itaque nostrum!
            </p>
          </div>
          <form
           
            className="mx-auto mb-0 mt-8 max-w-md space-y-4"
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  placeholder="Enter email"
                  required
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm outline-none"
                  placeholder="Enter Your Password"
                
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <div className="relative flex mt-4 w-full rounded-lg border-gray-500 p-4 pe-12 text-sm bg-[#fff] shadow-lg">
                <label className="mr-4 flex items-center text-xs">
                  <span className="w-full rounded-lg border-gray-200 whitespace-nowrap text-xs">
                    {' '}
                    SignUp As{' '}
                  </span>{' '}
                  <input
                    required
                    type="radio"
                    name="role"

                    className="mr-2 ml-2 accent-[#8800ff]"
                  />
                  Admin
                </label>
                <label className=" flex items-center text-xs">
                  <input
                    type="radio"
                    name="role"
                    className="mr-2 accent-[#8800ff]"
                  />
                  User
                </label>

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    height="2em"
                    width="1em"
                    className="text-[#222]"
                  >
                    <path d="M0 8a4 4 0 017.465-2H14a.5.5 0 01.354.146l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708 0L13 9.207l-.646.647a.5.5 0 01-.708 0L11 9.207l-.646.647a.5.5 0 01-.708 0L9 9.207l-.646.647A.5.5 0 018 10h-.535A4 4 0 010 8zm4-3a3 3 0 102.712 4.285A.5.5 0 017.163 9h.63l.853-.854a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708 0l.646.647.646-.647a.5.5 0 01.708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 01-.451-.285A3 3 0 004 5z" />
                    <path d="M4 8a1 1 0 11-2 0 1 1 0 012 0z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Have An account? {'  '}
                <Link className="underline" to="/">
                  Sign In{' '}
                </Link>
              </p>

              <button
                type="submit"
                className="inline-block rounded-full bg-[#5a189a] px-5 py-2 shadow-xl text-sm font-medium text-white"
              >
                Register
              </button>
            </div>
          </form>
        </div>

        <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <img
            alt=""
            src="https://plus.unsplash.com/premium_photo-1668383778596-2cd7c4f91157?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover rounded-sm shadow-2xl border-2 border-[#ccc]"
          />
        </div>
      </section>
    </>
  );
};

export default SignUp;
