import Image from "next/image"

export default function TereBenefits() {
    return (
        <main className="mb-40">
            <h1 className="text-center text-customGreen font-sans font-extrabold text-5xl mb-24 pt-8">TERE <span className="text-black">BENEFITS</span></h1>

            <section className="flex flex-col gap-32">
                {/* card 1 */}
                <div className="flex justify-between px-20 items-center w-[80%] h-72 ml-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.46)]
">
                    <div className="flex flex-col gap-3">

                        <div className="relative">
                            <h2 className="text-customGreen text-8xl font-sans font-bold ">01.</h2>
                            <h2 className="w-60 font-sans text-4xl font-semibold absolute left-20 bottom-1">Flexible working hours</h2>
                        </div>
                        <div>
                            <p className="w-72 font-sans font-thin text-slate-500 text-[20px]">You can decide when, and how much time you want to drive.</p>
                        </div>
                    </div>
                    <div>
                        <Image width={250} height={250} src="/Frame1.png" alt="frame"></Image>
                    </div>
                </div>

                {/* card 2 */}
                <div className="flex justify-between pl-20 items-center w-[80%] h-72 ml-40 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.46)]
">
                    <div>
                        <Image width={250} height={250} src="/Frame2.png" alt="frame"></Image>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center">
                            <h2 className="text-customGreen text-8xl font-sans font-bold ">02.</h2>
                            <h2 className="w-60 font-sans text-4xl font-semibold mb-10">Earnings</h2>
                        </div>
                        <div>
                            <p className="w-72 font-sans font-thin text-slate-500 text-[20px]">By driving with tere you can earn more.</p>
                        </div>
                    </div>
                </div>

                {/* card 3 */}
                <div className="flex justify-between px-20 items-center w-[80%] h-72 ml-20 rounded-2xl shadow-[0_0_10px_rgba(0,0,0,0.46)]
">
                    <div className="flex flex-col gap-3">

                        <div className="flex">
                            <h2 className="text-customGreen text-8xl font-sans font-bold ">03.</h2>
                            <h2 className="w-60 font-sans text-4xl font-semibold pt-3 pl-2">Customer support 24/7</h2>
                        </div>
                        <div>
                            <p className="w-96 font-sans font-thin text-slate-500 text-[20px]">Tere is a local service provider and we are proud to support you in your local language. We are proud to be at your service 24/7!</p>
                        </div>
                    </div>
                    <div>
                        <Image width={300} height={300} src="/Frame3.png" alt="frame"></Image>
                    </div>
                </div>
            </section>


        </main>
    )
}