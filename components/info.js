export default function Info() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-full">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Projekti juhendaja(d): Liina Keevallik</h2>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Projekti Kaasjuhendaja(d): Jaagup Kippar, Janika Leoste, Ermo Säks, Indrek Ibrus</h2>

                        <div id="main" className="grid  grid-flow-col my-6">
                            <div className="rounded-lg">
                                <img className="object-cover object-center w-60 rounded-md shadow"
                                     src="https://www.tlu.ee/sites/default/files/TUKO/%C3%9Clikoolo%20logo/TLU-logo-pilt-vrv-suur.jpg"
                                />
                            </div>
                            <div className="rounded-lg items-center">
                                <img className="object-cover object-center w-44 rounded-md shadow"
                                     src="https://www.eas.ee/wp-content/uploads/2016/01/EL_Regionaalarengu_Fond_horisontaalne.jpg"
                                />
                            </div>
                            <div className="rounded-lg">
                                <img className="object-cover object-center rounded-md shadow"
                                     src="https://elu.tlu.ee/sites/default/files/styles/footer_logo/public/2020-09/ELU_2020_Valge_4x.png?itok=NdhsgtVp"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}