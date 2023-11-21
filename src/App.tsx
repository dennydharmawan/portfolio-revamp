import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconCircleCheck,
  IconDownload,
  IconMail,
  IconMessages,
  IconPointFilled
} from '@tabler/icons-react';

import { Button } from '@/components/ui/button';

import IconBullet from './assets/bullet-icon.svg?react';
import IconHighlightUnderline from './assets/highlight-underline.svg?react';
import IconStarsDoodle from './assets/stars-doodle.svg?react';
import IconUnderlineDoodle from './assets/underline-doodle.svg?react';

function App() {
  return (
    <>
      <span className="fixed start-1/2 top-1/2 h-[600px] w-[600px] rounded-full bg-primary-700/20 blur-[200px] -translate-x-1/2 -translate-y-1/2"></span>

      <section className="content-grid relative min-h-[95vh] items-center bg-blue-navy-950 pb-[2rem]">
        {/* change to fixed nav */}
        <header className="full-width absolute left-0 top-0 z-50 w-full">
          <nav className="py-2.5 dark:bg-slate-800">
            <div className="flex max-w-screen-xl flex-wrap items-center justify-between">
              <a href="#" className="flex items-center">
                <img src="logo.svg" className="mr-3 h-6 sm:h-9" alt="Website Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                  John Doe
                </span>
              </a>
              <div className="flex items-center lg:order-2">
                <Button variant="outline">
                  <IconDownload className="mr-2 h-4 w-4" /> Resume
                </Button>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-slate-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:text-slate-400 dark:hover:bg-slate-700 dark:focus:ring-slate-600 lg:hidden"
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
                      className="block rounded bg-primary-700 py-2 pl-3 pr-4 text-white dark:text-white lg:bg-transparent lg:p-0 lg:text-primary-700"
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block border-b border-slate-100 py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block border-b border-slate-100 py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                    >
                      Experience
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block border-b border-slate-100 py-2 pl-3 pr-4 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white lg:border-0 lg:p-0 lg:hover:bg-transparent lg:hover:text-primary-700 lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* hero background gradient */}
        <div
          className="full-width absolute bottom-0 left-0 right-0 top-0 h-full bg-gradient-to-b from-primary-200 to-yellow-50"
          style={{
            clipPath: 'ellipse(100% 55% at 48% 44%)'
          }}
        ></div>

        {/* nullify fixed nav with margin top */}
        <div className="mt-[60px] grid lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <div className="relative lg:col-span-5">
            {/* spinner */}
            <div className="overflow-hidden after:absolute after:-top-[12%] after:left-[1.2rem] after:aspect-square after:w-32 after:animate-[spin_10s_linear_infinite] after:rounded-lg after:bg-primary-700 after:opacity-[0.08]"></div>

            <h1 className="mb-10 text-4xl font-bold leading-snug">
              Beyond Development, Creating Solutions: Building&nbsp;
              <span className="relative text-accent-600">
                Impactful Websites.
                <IconUnderlineDoodle className="absolute bottom-0 left-0 translate-y-[85%] rotate-2" />
              </span>
              {/* <img src="/img/underline-doodle.svg" alt="underline" className="w-full -translate-y-1.5" /> */}
            </h1>

            <p className="prose mb-6 max-w-2xl text-lg text-slate-700 dark:text-slate-400 lg:mb-8">
              Hi, my name’s John Doe. A software engineer with 5+ years experience in developing and
              maintaining websites. I possess a strong orientation towards personal development, enjoy
              learning about new technologies, and have passion for web development.
            </p>
            <a
              href="#"
              className="mb-14 mr-3 inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              See My Projects
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <div className="mb-8 flex items-center gap-4 text-lg font-medium">
              Also find me on
              <div className="h-1 w-4 rounded-md bg-orange-400"></div>
              <div className="flex gap-[18px] text-accent-600">
                <div className="relative z-10 flex items-center justify-center transition after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-cyan-800 after:transition after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-slate-50 hover:after:scale-[1.4]">
                  <IconBrandLinkedin strokeWidth={2.5} width={32} height={32} />
                </div>
                <div className="relative z-10 flex items-center justify-center transition after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-cyan-800 after:transition after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-slate-50 hover:after:scale-[1.4]">
                  <IconBrandGithub strokeWidth={2.5} width={32} height={32} />
                </div>
                <div className="relative z-10 flex items-center justify-center transition after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-cyan-800 after:transition after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-slate-50 hover:after:scale-[1.4]">
                  <IconMail strokeWidth={2.5} width={32} height={32} />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:col-span-7 lg:mt-0 lg:flex">
            <img
              src="https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-960/artboard-workspace.png"
              // srcSet="https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-960/artboard-workspace.png 1920w,https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-720/artboard-workspace.png 1440w, https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-480/artboard-workspace.png 960w"
              // alt="workspace"
              width={2800}
              height={2000}
              style={{
                backgroundImage: `url("https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:q-1,bl-6/artboard-workspace.png")`
              }}
              className="mask-layer object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="content-grid relative bg-blue-navy-950 py-[8rem] text-white">
        <div className="grid py-8 lg:grid-cols-12 lg:gap-8 lg:py-0 xl:gap-10">
          <div className="content-grid relative col-span-7 ">
            {/* left rect */}
            <div className="absolute top-1/2 ml-12 h-64 w-12 rounded-l-md bg-[#00CAF4] -translate-x-full -translate-y-1/2"></div>

            {/* right rect */}
            <div className="absolute right-0 top-0 mr-12 aspect-square w-14 rounded-md bg-primary-500 translate-x-1/2 translate-y-[180%]"></div>

            <div className="p-12">
              <img
                src="https://ik.imagekit.io/tr:w-1720/ddharmawan/dennydharmawan_com/artboard-multi-device.png"
                srcSet="https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-960/artboard-multi-device.png 1920w,https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-720,q-100/artboard-multi-device.png 1440w, https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-480/artboard-multi-device.png 960w"
                alt="workspace"
                width={2800}
                height={2000}
                style={{
                  backgroundImage: `url("https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:q-1,bl-6/artboard-multi-device.png")`
                }}
                className="rounded-2xl object-cover object-center shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-8 place-self-center lg:col-span-5">
            <h1 className="relative text-4xl font-bold after:absolute after:-top-2 after:left-0 after:h-[5px] after:w-[120px] after:rounded-lg after:bg-accent-400">
              My Specialties
            </h1>
            <p className="prose max-w-2xl text-lg text-slate-50">
              Whether you are launching a new business or looking to scale your current product, I've got you
              covered with end-to-end skills that can bring your idea to life product.
            </p>
            <ul className="text-md flex max-w-md list-inside flex-col gap-2 font-semibold dark:text-slate-400">
              <li className="flex items-center gap-3">
                <IconBullet width={18} />
                Frontend Development
              </li>
              <li className="flex items-center gap-3">
                <IconBullet width={18} />
                Backend Development
              </li>
              <li className="flex items-center gap-3">
                <IconBullet width={18} />
                UI/UX Design
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-grid py-[6rem]">
        <h2 className="mb-[120px] text-center">
          <span className="relative text-4xl font-bold after:absolute after:bottom-1 after:end-0 after:start-0 after:h-2 after:w-full after:rounded-md after:bg-primary-700/30 after:scale-110">
            My Projects
          </span>
        </h2>
        <div className="flex flex-col gap-[120px]">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="text-lg">
              <h2 className="mb-4 text-2xl font-extrabold text-slate-900">Work with tools you already use</h2>

              <p className="prose mb-2 text-lg text-slate-700">
                Deliver great service experiences fast - without the complexity of traditional ITSM
                solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
              </p>

              <ul className="list-none border-t-2 border-solid border-slate-200 py-8">
                <li className="flex items-center gap-3">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="font-medium text-slate-800">Continuous integration and deployment</span>
                </li>

                <li className="flex items-center gap-3">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="font-medium text-slate-800">Development workflow</span>
                </li>

                <li className="flex items-center gap-3">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="font-medium text-slate-800">Knowledge management</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <Button>Live Preview</Button>
                <Button variant="secondary">Source Code</Button>
              </div>
            </div>

            <img
              className="flex h-[31.73rem] w-[36.50rem] rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png"
            />
          </div>

          <div className="flex flex-col items-center gap-16 md:flex-row">
            <img
              className="flex h-[31.73rem] w-[36.50rem] rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png"
            />

            <div className="text-lg">
              <h2 className="mb-4 text-2xl font-extrabold text-slate-900">Work with tools you already use</h2>

              <p className="prose mb-2 text-lg text-slate-700">
                Deliver great service experiences fast - without the complexity of traditional ITSM
                solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.
              </p>

              <ul className="list-none border-t-2 border-solid border-slate-200 py-8">
                <li className="flex items-center gap-3">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="font-medium text-slate-800">Continuous integration and deployment</span>
                </li>

                <li className="flex items-center gap-3">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="font-medium text-slate-800">Development workflow</span>
                </li>

                <li className="flex items-center gap-3">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="font-medium text-slate-800">Knowledge management</span>
                </li>
              </ul>

              <div className="flex gap-4">
                <Button>Live Preview</Button>
                <Button variant="outline">Source Code</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid bg-blue-light-50 py-[6rem]">
        <h2 className="mb-[120px] text-center">
          <span className="relative text-4xl font-bold after:absolute after:bottom-1 after:end-0 after:start-0 after:h-2 after:w-full after:rounded-md after:bg-primary-700/30 after:scale-110">
            Work Experience
          </span>
        </h2>
        <div className=" grid grid-cols-[1fr_2px_3fr]">
          <div className="ml-auto pr-6 text-right font-semibold">
            <h3 className="text-lg">Bank BTPN - Jenius</h3>
            <h4 className="text-md text-slate-500">Dec 2019 - Jan 2023</h4>
          </div>
          <div className="relative h-full bg-slate-300">
            <div className="after absolute left-1/2 top-0 grid aspect-square w-6 place-items-center rounded-full border-2 border-primary-700 bg-primary-100 -translate-x-1/2">
              <IconPointFilled width={12} height={12} className="text-primary-700" />
            </div>
          </div>
          <div className="flex flex-col gap-8 pb-16 pl-6">
            <h3 className="text-lg font-semibold">Backend Developer</h3>
            <p className="prose">
              A digital banking app from Bank BTPN with more than 3.000.000 users. It has a variety of
              features such as savings, payment, investment, loan, and many more. I am mainly responsible for
              lending feature.
            </p>
            <div>
              <div className="mb-2 flex items-center gap-2">
                <div className="h-1 w-7 rounded bg-orange-400"></div>
                <h4 className=" text-lg font-medium text-primary-700">Key achievements</h4>
              </div>
              <ul className="flex flex-col gap-2 font-normal text-slate-700">
                <li className="flex items-start gap-3 font-medium">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="prose">
                    Maintained and enhanced Flexi Cash that experienced averaged 147% increase in user growth
                    within 3 years (https://www.jenius.com/app/fund/flexi-cash)
                  </span>
                </li>
                <li className="flex gap-3 font-medium">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="prose">
                    Spearheaded partnership development with Eraphone, Sentraponsel, and Ikea in selling Flexi
                    Cash
                  </span>
                </li>
                <li className="flex gap-3 font-medium">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="prose">
                    Migrated 300+ user’s data into a new Forgerock realm on partnership platform
                  </span>
                </li>
                <li className="flex gap-3 font-medium">
                  <IconCircleCheck className="text-primary-700" />

                  <span className="prose">
                    Refactored a slow-performing website/microservices and increased its average execution
                    time by 37%
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="content-grid">
        <div className="grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img
              src="https://ik.imagekit.io/ddharmawan/dennydharmawan_com/tr:w-960/teamwork-illustration.svg"
              alt="teamwork illustration"
            />
          </div>
          <div className="place-self-center px-16 lg:col-span-7">
            <h3 className="mb-8 text-3xl font-bold leading-snug">
              Let's make a
              <span className="relative text-primary-700">
                &nbsp;connection&nbsp;
                <IconHighlightUnderline className="absolute -bottom-3 left-0 m-auto w-full overflow-hidden -scale-x-125" />
              </span>
              today.
              <IconStarsDoodle className="inline-block -translate-y-[35%]" />
            </h3>
            <p className="prose mb-8 text-gray-700 md:text-lg lg:mb-8 lg:text-xl">
              It all starts with an email. Get in touch and let’s kick-start something amazing together. Who
              knows, I may be the missing puzzle that you’re looking for.
            </p>
            <a
              href="#"
              className="relative inline-flex items-center justify-center rounded-lg bg-primary-600 px-5 py-3 text-center text-base font-medium text-white after:absolute after:left-2 after:top-2 after:-z-10 after:h-full after:w-full after:rounded-lg after:bg-slate-400 hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Let's chat
              <IconMessages className="ml-3" />
            </a>
          </div>
        </div>
      </section>

      <footer className="content-grid bg-blue-navy-950 text-white">
        <div className="my-12 flex">
          <div className="flex items-center gap-4">
            <div className="text-xl font-semibold">Denny Dharmawan</div>
            <div className="h-full w-[1px] bg-white"></div>
            <div className="text-slate-100">© {new Date().getFullYear()}. All rights reserved.</div>
          </div>
          <div className="ml-auto">
            <div className="flex gap-[18px] text-slate-100">
              <div className="relative z-10 flex items-center justify-center transition after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-accent-400 after:transition after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-blue-navy-950 hover:after:scale-[1.4]">
                <IconBrandLinkedin width={32} height={32} />
              </div>
              <div className="relative z-10 flex items-center justify-center transition after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-accent-400 after:transition after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-blue-navy-950 hover:after:scale-[1.4]">
                <IconBrandGithub width={32} height={32} />
              </div>
              <div className="relative z-10 flex items-center justify-center transition after:absolute after:left-1/2 after:top-1/2 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-accent-400 after:transition after:-translate-x-1/2 after:-translate-y-1/2 after:scale-[0] hover:text-blue-navy-950 hover:after:scale-[1.4]">
                <IconMail width={32} height={32} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
