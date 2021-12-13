export default function MediaCoverage() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-full">
                        <h2 id="meediakajastus" className="text-lg font-bold text-gray-800 dark:text-gray-100">Meediakajastus</h2>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                            <div className="my-4">
                                Meie meeskonnaliige Aljona sai rääkida meie projektist ETV+ hommikuprogrammis, kus ta
                                jagas teavet etenduse kohta, kuhu nad olid koos Liinaga kutsutud (alates 10. minutist). Kasutati ka mõningaid
                                programmis sisalduvaid kaadreid.
                            </div>
                            <div style={{position : 'relative', width : '100%', height : '0', paddingBottom: '55.00%'}}>
                            {/*<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">*/}
                                <iframe
                                    // style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
                                    style={{position : 'absolute', top : '0', left : '0', width : '100%', height : '100%', border : 'none'}}
                                    src="//services.err.ee/media/embed/1421339" frameBorder="0"
                                    allowFullScreen="allowfullscreen"/>
                            </div>
                            <h2 className="text-xl font-bold mt-4 my-2 text-gray-800 dark:text-gray-100">
                                Meediamainimised:
                            </h2>
                            <ul className="list-disc mx-4">
                                <li>
                                    <a href="https://kultuur.err.ee/1608392681/robotiteater-toob-lavale-esimese-tehisintellekti-loodud-lavastuse" className="text-md font-bold no-underline hover:underline">
                                        ERR | Robotiteater toob lavale esimese tehisintellekti loodud lavastuse (Link)
                                    </a>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}