import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  SparklesIcon,
  MusicalNoteIcon,
  XMarkIcon,
  NewspaperIcon,
  ComputerDesktopIcon,
  BeakerIcon,
  GlobeAmericasIcon,
  TruckIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const resources = [
  {
    name: "Technology",
    description:
      "Did Steve Jobs really say that? Find out what he really said.",
    href: "/technology",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Entertainment",
    description:
      "Looking what to watch? Check out our recommendations for the best shows and movies.",
    href: "/entertainment",
    icon: MusicalNoteIcon,
  },
  {
    name: "Environment",
    description: "Are we going to run out of water? Find out that and more.",
    href: "/environment",
    icon: CalendarIcon,
  },
  {
    name: "Fashion",
    description: "Get the latest fashion trends and learn how to dress up.",
    href: "/fashion",
    icon: SparklesIcon,
  },
  {
    name: "Finances",
    description: "Financial news and tips. Learn how to save money.",
    href: "/finances",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Science",
    description: "Science is the future. Learn more about it.",
    href: "/science",
    icon: BeakerIcon,
  },
  {
    name: "Car",
    description: "Car tips and tricks. Learn how to fix your car.",
    href: "/car",
    icon: TruckIcon,
  },
  {
    name: "Travel",
    description:
      "Looking for a new place to visit? Check out our recommendations.",
    href: "/travel",
    icon: GlobeAmericasIcon,
  },
];

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ')
}

const Navbar = () => {

  return (
    <Popover className="relative bg-quorum-purple">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b-2 border-quorum-purple py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
              <div className='flex flex-row justify-center items-center'>
              <NewspaperIcon className="h-8 w-auto sm:h-10 mr-5 text-white" />
              <span className='text-white'>Awesome News</span>
              </div>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-white hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                    <a href={`/`} className='text-white'>Recent News</a>
                </>
              )}
            </Popover>

            <a href='/rated' className="text-base font-medium text-white hover:text-gray-900">
              Top Rated
            </a>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-white' : 'text-white',
                      'group inline-flex items-center rounded-md bg-quorum-purple text-base font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2'
                    )}
                  >
                    <span>Categories</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <item.icon className="h-6 w-6 flex-shrink-0 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <a className="whitespace-nowrap text-base font-medium text-white hover:text-gray-900">
              Sign in
            </a>
            <a
              
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-quorum-purple shadow-sm hover:bg-quorum-pink hover:text-white"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-black hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )

                }

export default Navbar