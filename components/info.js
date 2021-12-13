export default function Info() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-full">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Projekti juhendaja(d): Liina Keevallik</h2>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Projekti Kaasjuhendaja(d): Jaagup Kippar, Janika Leoste, Ermo Säks, Indrek Ibrus</h2>

                        <div id="main" className="grid place-items-center grid-flow-col my-12">
                            <div className="rounded-lg">
                                <img className="object-cover object-center w-20 rounded-md "
                                     src="https://www.we.ee/images/tlu/logo.png"
                                />
                            </div>
                            <div className="rounded-lg items-center">
                                <img className="object-cover object-center w-52 rounded-md "
                                     src="https://rethink.ee/img/el-erf.png"
                                />
                            </div>
                            <div className="rounded-lg">
                                <img className="object-cover object-center w-32 rounded-md "
                                     src="https://estonian.ee/wp-content/uploads/2021/05/ELU_2020_Punagradient_4x.png"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}