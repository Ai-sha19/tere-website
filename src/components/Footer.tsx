import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col md:flex-row justify-between items-center bg-white px-8 py-10 mb-10 shadow-2xl">
            <div className="flex justify-center mb-6 md:mb-0">
                <Image width={120} height={50} src="/logo.png" alt="logo" />
            </div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
                <ul className="leading-8 text-slate-500 text-center">
                    <li className="text-black text-2xl font-sans font-semibold mb-2">Stay Connected</li>
                    <li>12, Green Valley, New York</li>
                    <li>contact@delishbite.com</li>
                    <li>123-456-7890</li>
                </ul>
            </div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
                <ul className="leading-8 text-slate-500 text-center">
                    <li className="text-black text-2xl font-sans font-semibold mb-2">Be Our Friend</li>
                    <li>3, Season Park, Jakarta</li>
                    <li>support@foodyar.co,id</li>
                    <li>021 - 1111 - 2222</li>
                </ul>
            </div>
            <div className="flex justify-center">
                <button className="flex gap-5">
                    <Image className="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105" width={200} height={200} src="/btn1.png" alt="btn1" />
                    <Image className="transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105" width={200} height={200} src="/btn2.png" alt="btn2" />
                </button>
            </div>
        </footer>
    );
}



























