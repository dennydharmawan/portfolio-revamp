import { useState } from 'react';

function App() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <>
      <div className="container mx-auto space-y-4 px-4">
        <header>
          <span className="fixed start-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/20 blur-[200px]"></span>

          <nav className="bg-white border-gray-200 px-4 py-2.5 dark:bg-gray-800 lg:px-6">
            <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
              <a href="#" className="flex items-center">
                <img src="logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="dark:text-white self-center whitespace-nowrap text-xl font-semibold">
                  Denny Dharmawan
                </span>
              </a>
              <div className="flex items-center lg:order-2">
                <a
                  href="#"
                  className="dark:text-white mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-800 lg:px-5 lg:py-2.5"
                >
                  Resume
                </a>
                <a
                  href="#"
                  className="text-white mr-2 rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:px-5 lg:py-2.5"
                >
                  Get started
                </a>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                id="mobile-menu-2"
              >
                <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                  <li>
                    <a
                      href="#"
                      className="text-white dark:text-white lg:bg-transparent block rounded bg-primary-700 py-2 pl-3 pr-4 lg:p-0 lg:text-primary-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:hover:text-white lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:text-primary-700"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:hover:text-white lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:text-primary-700"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:hover:text-white lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:text-primary-700"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="dark:hover:text-white lg:hover:bg-transparent lg:dark:hover:bg-transparent lg:dark:hover:text-white block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 lg:border-0 lg:p-0 lg:hover:text-primary-700"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}

export default App;
