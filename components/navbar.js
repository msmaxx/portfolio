import {MenuIcon, SunIcon, VideoCameraIcon, MoonIcon} from '@heroicons/react/solid'
import useDarkMode from "./useDarkMode";


export default function Navbar() {
    const [colorTheme, setTheme] = useDarkMode();

    return (
        <nav className="bg-gray-100 shadow dark:bg-gray-900 shadow-2xl">
            <div className="container px-6 py-4 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <a className="text-md font-bold text-gray-800 inline-flex dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
                               href="#"><VideoCameraIcon
                                className="h-5 w-5 my-1 mx-2 text-gray-800 dark:text-white"/> ROBOTITEATER 4 -
                                DOKUMENTAALFILM </a>
                        </div>

                        <div className="flex md:hidden">
                            {colorTheme === "light" ? (
                                <a onClick={() => setTheme("light")}
                                   className="px-2 py-1 mx-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                    <SunIcon
                                        className="h-5 w-5 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"/>
                                </a>
                            ) : (
                                <a onClick={() => setTheme("dark")}
                                   className="px-2 py-1 mx-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                    <MoonIcon
                                        className="h-5 w-5 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"/>
                                </a>
                            )
                            }
                            <button type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <MenuIcon
                                        className="h-5 w-5 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <a href="#sissejuhatus"
                               className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Sissejuhatus
                            </a>
                            <a href="#projekti-aruanne"
                               className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Projekti aruanne
                            </a>
                            <a href="#projekti-tegevuskava"
                               className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Projekti tegevuskava
                            </a>
                            <a href="#meediakajastus"
                               className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Meediakajastus
                            </a>
                            <a href="#rühma-liikmete-õpikogemus"
                               className="px-2 py-1 mx-2 mt-2 text-md font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                Rühmakiikmete õpikogemus
                            </a>
                        </div>
                        <div className="hidden md:flex items-center mt-4">
                            {colorTheme === "light" ? (
                                <a onClick={() => setTheme("light")}
                                   className="px-2 py-1 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                    <SunIcon
                                        className="h-5 w-5 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"/>
                                </a>
                            ) : (
                                <a onClick={() => setTheme("dark")}
                                   className="px-2 py-1 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">
                                    <MoonIcon
                                        className="h-5 w-5 text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"/>
                                </a>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}