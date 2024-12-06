import Image from "next/image";
import image from "../../app/public/Grid.svg";
import logo from "../../app/public/Logo.svg";
import slogan from "../../app/public/slogan.svg";
import { RiMapPin2Line } from "react-icons/ri";
import { LuCalendar } from "react-icons/lu";
import button from "../../app/public/Register.svg";
import Link from "next/link";

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center bg-[#111111] w-full"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt="Background Grid"
                    fill
                    style={{ objectFit: "cover" }}
                    className="h-full w-full"
                />
            </div>

            {/* Content Container */}
            <div className="container px-4 py-16 flex flex-col items-center justify-center z-40 gap-6">
                {/* Logo */}
                <div className="w-48 sm:w-64 md:w-80 lg:w-96">
                    <Image src={logo} alt="Company Logo" width={500} height={500} className="mx-auto" />
                </div>

                {/* Slogan */}
                <div className="w-64 sm:w-80 md:w-96 lg:w-[600px]">
                    <Image src={slogan} alt="Slogan" width={600} height={400} className="mx-auto" />
                </div>

                {/* Information and Button */}
                <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center gap-6">
                    {/* Location and Date */}
                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-start text-white">
                        <div className="flex items-center gap-2 text-[#00F2EA] mb-4 sm:mb-0 lg:mb-4">
                            <RiMapPin2Line className="text-3xl" />
                            <p className="text-sm sm:text-base lg:text-sm">S28 at ESI Alger</p>
                        </div>
                        <div className="flex items-center gap-2 text-[#FF0050]">
                            <LuCalendar className="text-3xl" />
                            <p className="text-sm sm:text-base lg:text-sm">Afternoon 10/12/2024</p>
                        </div>
                    </div>

                    {/* Register Button */}
                    <div className="flex justify-center w-full lg:pr-48">
                        <Link href="https://tripetto.app/run/ZLQXZ10XGD">
                            <Image
                                src={button}
                                alt="Register Button"
                                width={200}
                                height={200}
                                className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
