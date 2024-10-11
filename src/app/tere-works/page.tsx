import Image from "next/image"

export default function TereWorks() {
    return (
        <main>

            {/* section 1 */}
            <div className="flex flex-col items-center pb-20 pt-10">
                <h1 className="text-4xl font-extrabold mb-5">HOW <span className="text-customGreen">TERE</span> WORKS</h1>
                <p className="w-1/3 text-slate-400 text-center leading-">Download and install the tere app. Enter your phone number and make your user account. when approved you
                    may start driving.</p>
            </div>

            {/* section 2 */}
            <section className="flex justify-center w-[80%] mx-auto gap-10 mb-40">
                <div className="flex flex-col flex-1 gap-12">
                    <div className="flex flex-col items-end gap-3 text-right">
                        <Image width={50} height={50} src="/circle.png" alt="circle"></Image>
                        <h1 className="font-sans font-extrabold text-2xl">REQUEST A RIDE</h1>
                        <p className="font-sans text-slate-500">Have to reach office or going for shopping ?
                            Just put your current location and destination and search a ride that suits you</p>
                    </div>
                    <div className="flex flex-col items-end gap-3 text-right">
                        <Image width={50} height={50} src="/circle.png" alt="circle"></Image>
                        <h1 className="font-sans font-extrabold text-2xl">INSTANT NOTIFICATIONS</h1>
                        <p className="font-sans text-slate-500">Get instant notifications for your rides and be in contact with fellow riders all the time</p>
                    </div>
                </div>
                <div className="w-[400px] h-[400px] pt-8">
                    <div className=" w-[400px] h-[400px] flex flex-1 bg-customGreen text-customGreen rounded-full"></div>
                </div>

                <div className="flex flex-col flex-1 gap-12">
                    <div className="flex flex-col gap-3">
                        <Image width={50} height={50} src="/circle.png" alt="circle"></Image>
                        <h1 className="font-sans font-extrabold text-2xl">POST A RIDE</h1>
                        <p className="font-sans text-slate-500">Need to get to the office or going out for shopping? Just enter your current location and destination, then find a ride that fits you. </p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Image width={50} height={50} src="/circle.png" alt="circle"></Image>
                        <h1 className="font-sans font-extrabold text-2xl">CASHLESS PAYMENT</h1>
                        <p className="font-sans text-slate-500">Payments become simple by using your own Wallet – no need to carry cash anymore, making your transactions quick and hassle-free.</p>
                    </div>
                </div>
            </section>

        </main >
    )
}