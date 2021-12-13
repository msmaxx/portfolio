export default function Info() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-full">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Projekti aruanne</h2>

                        <div id="main" className="grid  grid-flow-col my-4">
                            <div className="rounded-lg">
                                <img className="object-cover object-center w-60 rounded-md shadow"
                                     src="https://www.tlu.ee/sites/default/files/TUKO/%C3%9Clikoolo%20logo/TLU-logo-pilt-vrv-suur.jpg"
                                />
                            </div>
                            <div className="rounded-lg">
                                <img className="object-cover object-center w-60 rounded-md shadow"
                                     src="https://www.tlu.ee/sites/default/files/TUKO/%C3%9Clikoolo%20logo/TLU-logo-pilt-vrv-suur.jpg"
                                />
                            </div>
                            <div className="bg-green-500 rounded-lg m-4 h-12">3</div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}