import Image from 'next/image';

export default function Speakers() {
    return (
        <section
            id="about"
            className="bg-[#111111] relative"
        >
            <Image
                src="/images/About.svg"
                alt="icon"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0 z-0"
            />

            <div className="container py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-32 relative z-10">
                {/* Flex container for title and text */}
                <div className="flex flex-col items-center gap-4 max-w-5xl mx-auto">
                    <h2 className="text-center font-no-continue text-4xl md:text-6xl lg:text-[96px] font-normal pb-8 lg:pb-16 leading-normal bg-gradient-to-r from-[#FF0050] via-[#A0E8E6] to-[#00F2EA] bg-clip-text text-transparent">
                        What will happen ?
                    </h2>
                    <p className="text-center text-xl md:text-2xl lg:text-4xl font-normal pb-8 lg:pb-16 leading-tight md:leading-none tracking-tight bg-gradient-to-r from-white via-gray-400 to-gray-600 bg-clip-text text-transparent">
                        Creatorfest is the perfect starting point for beginners looking to dive into the world of content creation. The event will offer practical workshops and discussions to help you make your first steps in building your content and finding your audience. You’ll gain the essential tools, tips, and confidence to kickstart your content creation journey, all in a supportive and inspiring environment.
                    </p>
                </div>

                {/* Speaker cards section */}
                <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 mt-16 lg:mt-32">
                    {/* Card 1 */}
                    <div className="flex flex-col justify-start rounded-lg bg-[#AFAFAF] bg-opacity-20 w-full max-w-[350px] min-h-[300px] z-10 mx-auto">
                        <div className="bg-gradient-to-r from-[#00F2EA] to-[#FF0050] h-[10px] rounded-t-lg"></div>
                        <div className="flex flex-col gap-4 pt-12 mx-4 my-4 items-center">
                            <h1 className="text-2xl md:text-3xl font-futura-bold font-medium text-white text-center">
                                Explore Your Creative Potential
                            </h1>
                            <p className="text-base md:text-lg font-futura-md-bt font-normal text-white p-4 text-center">
                                Dive into the basics of content creation and discover how to turn your ideas into reality. Creatorfest is here to guide you every step of the way.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col justify-start rounded-lg bg-[#AFAFAF] bg-opacity-20 w-full max-w-[350px] min-h-[300px] mx-auto">
                        <div className="bg-gradient-to-r from-[#00F2EA] to-[#FF0050] h-[10px] rounded-t-lg"></div>
                        <div className="flex flex-col pt-12 gap-4 mx-4 my-4 items-center">
                            <h1 className="text-2xl md:text-3xl font-futura-bold font-medium text-white text-center">
                                Hands-On Learning Experience
                            </h1>
                            <p className="text-base md:text-lg font-futura-md-bt font-normal text-white p-4 text-center">
                                Join interactive workshops designed to help you learn practical skills and gain the confidence to start creating. It’s all about taking that first step!
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col justify-start rounded-lg bg-[#AFAFAF] bg-opacity-20 w-full max-w-[350px] min-h-[300px] z-10 mx-auto">
                        <div className="bg-gradient-to-r from-[#00F2EA] to-[#FF0050] h-[10px] rounded-t-lg"></div>
                        <div className="flex flex-col pt-12 gap-4 mx-4 my-4 items-center">
                            <h1 className="text-2xl md:text-3xl font-futura-bold font-medium text-white text-center">
                                Connect and Grow
                            </h1>
                            <p className="text-base md:text-lg font-futura-md-bt font-normal text-white p-4 text-center">
                                Meet like-minded individuals and creators who share your passion. Creatorfest is the perfect place to network, learn, and grow together.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}