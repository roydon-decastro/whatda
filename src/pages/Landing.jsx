import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Landing = () => {
  const logos = [
    {
      id: 1,
      img_url:
        "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e022df47d704e9958f3_MintyDefault.svg",
    },
    {
      id: 2,
      img_url:
        "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12d717a5df974cd42415a_EbooksDefault.svg",
    },
    {
      id: 3,
      img_url:
        "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12dcfc7ae6798c49b2a55_IcebergDefault.svg",
    },
    {
      id: 4,
      img_url:
        "https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e78784f087c65fe2757_SnapShotDefault.svg",
    },
  ];

  return (
    <>
      <section className="relative">
        <div className="container mx-auto overflow-hidden">
          <div className="relative z-20 flex items-center justify-between bg-transparent px-4 py-5">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="mr-14 w-auto flex gap-2 items-center">
                  <a className="text-3xl font-bold leading-none" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#4F46E5"
                      className="h-8 w-8"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clipRule="evenodd"
                      />
                      <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                    </svg>
                  </a>
                  <h1 className=" text-2xl text-indigo-600 font-extrabold">
                    whatda
                  </h1>
                </div>
                {/* <div className="hidden w-auto lg:block">
                  <ul className="mr-16 flex items-center">
                    <li className="mr-9 font-medium">
                      <a href="#">Features</a>
                    </li>
                    <li className="mr-9 font-medium">
                      <a href="#">Solutions</a>
                    </li>
                    <li className="mr-9 font-medium">
                      <a href="#">Resources</a>
                    </li>
                    <li className="font-medium">
                      <a href="#">Pricing</a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="mr-5 hidden w-auto lg:block">
                  <div className="inline-block">
                    <Link
                      to="/login"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <button
                        className="w-full rounded-xl bg-transparent py-3 px-5 font-medium transition duration-200 ease-in-out"
                        type="button"
                      >
                        Sign In
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="hidden w-auto lg:block">
                  <div className="inline-block">
                    <Link
                      to="/signup"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <button className="w-full rounded-md bg-indigo-600 py-3 px-5 font-semibold text-white">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-auto lg:hidden">
                  <a href="#">
                    <svg
                      className="navbar-burger text-indigo-600"
                      width="51"
                      height="51"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="56"
                        height="56"
                        rx="28"
                        fill="currentColor"
                      ></rect>
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden pt-16 pb-48">
          <div className="container relative mx-auto px-4">
            <div className="-m-8 flex flex-col lg:flex-row">
              <div className="w-full p-8 lg:w-6/12">
                <h1 className="lg:text-13xl font-heading mb-9 text-6xl font-bold leading-none md:max-w-2xl md:text-8xl">
                  Discuss Whats On Your Mind
                </h1>
                <div>
                  <p className="dark:text-gray-300ss mb-9 text-xl font-medium text-gray-900 dark:text-gray-300 md:max-w-sm">
                    Encouraging Open Dialogue: Discussing Topics important to
                    you With anonimity in Mind.
                  </p>
                  <div className="mb-12 md:inline-block">
                    <Link
                      to="/signup"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      <button className="w-full rounded-xl border border-indigo-700 bg-indigo-600 py-4 px-6 font-semibold text-white transition duration-200 ease-in-out hover:bg-indigo-700 focus:ring focus:ring-indigo-300">
                        Create An Account Now
                      </button>
                    </Link>
                  </div>
                  <h3 className="mb-3 font-semibold text-gray-900 dark:text-gray-300">
                    Trusted by 1M+ customers
                  </h3>
                  <div className="-m-1 flex flex-wrap items-center">
                    <div className="w-auto p-1">
                      <div className="-m-0.5 flex flex-wrap">
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                        <div className="w-auto p-0.5">
                          <svg
                            width="17"
                            height="16"
                            viewBox="0 0 17 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                              fill="#6366F1"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-auto p-1">
                      <div className="-m-0.5 flex flex-wrap">
                        <div className="w-auto p-0.5">
                          <p className="font-bold text-gray-900 dark:text-gray-300">
                            4.2/5
                          </p>
                        </div>
                        <div className="w-auto p-0.5">
                          <p className="font-medium text-gray-600 dark:text-gray-400">
                            (45k Reviews)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Landing;
