export default function Introduction() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-1/2">
                        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Sissejuhatus</h2>

                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 lg:max-w-xl">
                            <div className="my-2">ROBOTITEATER - projekti eesmärk on saada ülevaade võimalustest
                                kasutada tehisintellekti
                                teatris stseenide esitamise protsessis, alates näidendi kirjutamisest kuni täieliku
                                näidendi
                                ja lavastamiseni, mida lavastab ja mängib ainult tehisintellekti abil robot.
                            </div>
                            <div className="my-2">On teada, et tehisintellekt on võimeline teksti sünteesima, kuid seni
                                on
                                tehisintellekti kirjutatud teatrietendused olnud väga abstraktsed. ROBOTITEATERi
                                meeskonna
                                ülesanne on parandada stseenide abstraktsuse puudumist, me soovime mõista
                                tehisintellekti
                                loogikat ja treeningute sisu, et kirjutada võimalikult loogiline dramaturgiline teatrile
                                mõeldud näidend.
                            </div>

                        </p>
                    </div>

                    <div className="mt-8 lg:mt-0 lg:w-1/2">
                        <div className="flex items-center justify-center lg:justify-end">
                            <div className="max-w-lg">
                                <img className="object-cover object-center w-full h-64 rounded-md shadow"
                                     src="/ESILEHT_EST.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}