import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ====================== section 1 */}
      <section className="flex flex-col md:flex-row gap-10 md:gap-64">
        <div className="flex-1 flex flex-col gap-7 justify-center pl-4 md:pl-16">
          {/* Text Section */}
          <h1 className="text-[28px] md:text-[45px] leading-[40px] md:leading-[65px] font-black">
            DOWNLOAD APP, SAVE MONEY, MAKE FRIENDS!
          </h1>
          <p className="font-sans text-slate-500 text-sm md:text-1xl">
            Its simple and its free. Play your part in reducing Carbon Footprint
            and help Mother Nature to sustain its beauty. So what are you waiting
            for? Lets ride together
          </p>
          <button className="flex gap-4 md:gap-6">
            <Image
              className="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
              width={150}
              height={150}
              src="/btn1.png"
              alt="btn1"
            />
            <Image
              className="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
              width={150}
              height={150}
              src="/btn2.png"
              alt="btn2"
            />
          </button>
        </div>
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <Image
            className=""
            width={350}
            height={300}
            src="/banner.png"
            alt="banner"
          />
        </div>
      </section>

      {/* Green Box */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-customGreen p-5 md:p-10 w-[90%] mx-auto rounded-md my-10 shadow-2xl">
        <p className="text-white w-full md:w-[20%] text-[16px] md:text-[18px] font-sans font-light">
          Let’s go. Get a link to download the app.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto">
          <input
            className="font-sans text-slate-500 w-full md:w-72 py-3 pl-4 rounded-md"
            type="text"
            placeholder="Enter mobile phone number"
          />
          <button className="font-sans font-light text-sm md:text-1xl text-white bg-black py-3 px-4 rounded-md transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
            APPLY TO DRIVE
          </button>
        </div>
      </div>

      {/* ============================ section 3 */}
      <div className="w-[90%] mx-auto flex flex-col gap-10 md:gap-20">
        <div className="flex flex-col md:flex-row justify-around">
          {/* Card 1 */}
          <div className="flex gap-5 flex-col text-start items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              className="mt-4 object-cover"
              layout="responsive"
              width={300}
              height={300}
              src="/card"
              alt="safe-ride"
            />
            <div className="flex flex-col gap-2 mx-3 text-justify mb-4">
              <h2 className="font-sans font-bold text-2xl md:text-3xl">Safe Rides</h2>
              <p className="text-slate-500 font-sans">
                We ensure that every ride is safe and secure for both the drivers
                and passengers through real-time monitoring and driver verification.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex gap-5 flex-col text-start items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              className="mt-4 object-cover"
              layout="responsive"
              width={300}
              height={300}
              src="/card2"
              alt="Affordable Fares"
            />
            <div className="flex flex-col gap-2 mx-3 text-justify mb-4">
              <h2 className="font-sans font-bold text-2xl md:text-3xl">Affordable Fares</h2>
              <p className="text-slate-500 font-sans">
                Our competitive and affordable fares let you travel comfortably
                without spending more than necessary on each ride.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="flex gap-5 flex-col text-start items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              className="mt-4 object-cover"
              layout="responsive"
              width={300}
              height={300}
              src="/card3.jpg"
              alt="Eco-friendly"
            />
            <div className="flex flex-col gap-2 mx-3 text-justify mb-4">
              <h2 className="font-sans font-bold text-2xl md:text-3xl">Eco-friendly</h2>
              <p className="text-slate-500 font-sans">
                Ride-sharing significantly helps in reducing environmental pollution,
                thereby keeping the air much cleaner.
              </p>
            </div>
          </div>
        </div>

        {/* Cards for Section 3 */}
        <div className="flex flex-col md:flex-row justify-around mb-20">
          {/* Card 4 */}
          <div className="flex gap-5 flex-col text-start items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              className="mt-4 object-cover"
              layout="responsive"
              width={300}
              height={300}
              src="/card4"
              alt="24/7 Availability"
            />
            <div className="flex flex-col gap-2 mx-3 text-justify mb-4">
              <h2 className="font-sans font-bold text-2xl md:text-3xl">24/7 Availability</h2>
              <p className="text-slate-500 font-sans">
                Our service is available at any hour of the day, so you can access
                rides whenever you need them, without delay.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div className="flex gap-5 flex-col text-start items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              className="mt-4 object-cover"
              layout="responsive"
              width={300}
              height={300}
              src="/card5.jpg"
              alt="Easy-to-Use App"
            />
            <div className="flex flex-col gap-2 mx-3 text-justify mb-4">
              <h2 className="font-sans font-bold text-2xl md:text-3xl">Easy-to-Use App</h2>
              <p className="text-slate-500 font-sans">
                Our app is simple and user-friendly, allowing you to book rides,
                manage your account, and view updates with ease.
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div className="flex gap-5 flex-col text-start items-center w-full md:w-80 shadow-2xl rounded-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <Image
              className="mt-4 object-cover"
              layout="responsive"
              width={300}
              height={300}
              src="/card6.jpg"
              alt="Community Driven"
            />
            <div className="flex flex-col gap-2 mx-3 text-justify mb-4">
              <h2 className="font-sans font-bold text-2xl md:text-3xl">Community Driven</h2>
              <p className="text-slate-500 font-sans">
                We build a strong community by connecting like-minded passengers and
                drivers, creating an enjoyable and social experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
