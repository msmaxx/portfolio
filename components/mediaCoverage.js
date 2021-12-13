export default function MediaCoverage() {
    return (
        <section className="bg-white dark:bg-gray-800">
            <div className="container px-6 py-8 mx-auto">
                <div className="items-center lg:flex">
                    <div className="lg:w-full">
                        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">Meediakajastus</h2>
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
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )

}