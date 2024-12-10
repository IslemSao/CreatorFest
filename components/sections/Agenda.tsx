'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Define interface for AgendaItem props
interface AgendaItemProps {
    time: string;
    place: string;
    title: string;
    description: string;
    color: string;
}

const AgendaItem: React.FC<AgendaItemProps> = ({ time, place, title, description, color }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    return (
        <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -10 }}
            transition={{ duration: 1.5 }}
            className="grid grid-cols-12 gap-4 md:gap-11 mb-6 md:mb-10"
        >
            <div
                className="col-span-4 lg:col-span-2 bg-opacity-90 shadow-[0_0_7px_currentColor] py-2 lg:py-4 px-2 lg:pl-1 rounded-xl flex flex-col justify-center items-center"
                style={{ backgroundColor: color }}
            >
                <p className="text-xs lg:text-base">{time}</p>
                <p className="text-xs lg:text-base">{place}</p>
            </div>
            <div
                className="col-span-8 lg:col-span-10 bg-opacity-90 shadow-[0_0_7px_currentColor] py-2 lg:py-4 px-2 lg:pl-4 rounded-xl"
                style={{ backgroundColor: color }}
            >
                <div className="flex justify-between items-center">
                    <p className="font-bold text-sm md:text-base">{title}</p>
                </div>
                <div className="relative">
                    <p
                        className={`text-xs md:text-sm ${!isExpanded ? 'line-clamp-2' : ''}`}
                    >
                        {description}
                    </p>
                    {description.length > 100 && (
                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="absolute bottom-0 right-0 flex items-center text-xs hover:bg-opacity-75 rounded"
                        >
                            {isExpanded ? (
                                <>
                                    <ChevronUp size={16} /> Collapse
                                </>
                            ) : (
                                <>
                                    <ChevronDown size={16} /> Read more
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default function Agenda() {
    const agendaItems: AgendaItemProps[] = [
        { time: "13:20-13:30", place: "S28", title: "", description: "Opening ceremony.", color: "#00F2EA" },
        { time: "13:30-14:00", place: "S28", title: "Zinou", description: "Introduction to Audiovisual.", color: "#FF0050" },
        { time: "14:30-14:30", place: "S28", title: "Noureddine", description: " how to match ideas to attract your audience.", color: "#00F2EA" },
        { time: "14:30-15:15", place: "S28", title: "Wanis", description: "Public speaking.", color: "#FF0050" },
        { time: "15:15-15:30", place: "S28", title: "Coffee break", description: "Quick pose", color: "#00F2EA" },
        { time: "15:30-16:15", place: "S28", title: "Wanis", description: "Editing workshop using CapCut.", color: "#FF0050" },
    ];

    return (
        <section
            id="agenda"
            className="py-10 md:py-20 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/bg.svg')" }}
        >
            <div className="absolute inset-0 bg-[#111111] opacity-50"></div>
            <div className="container px-4 relative z-10">
                <h2
                    className="text-center text-white text-4xl md:text-[96px] font-normal leading-normal"
                    style={{
                        WebkitTextStrokeWidth: '1px',
                        WebkitTextStrokeColor: '#000',
                        fontFamily: '"No Continue"'
                    }}
                >
                    Agenda
                </h2>

                <div className="mx-4 md:mx-28">
                    <h2
                        className="mt-10 md:mt-20 text-3xl md:text-[50px] font-medium leading-normal"
                        style={{
                            color: 'var(--Red, #FF0050)',
                            fontFamily: 'Futura-Bold',
                        }}
                    >
                        Tuesday
                    </h2>

                    <p
                        className="text-xl md:text-[30px] font-normal leading-normal"
                        style={{
                            color: '#FFF',
                            fontFamily: '"Futura Md BT"',
                        }}
                    >
                        December 10th
                    </p>
                </div>

                <div className="mx-4 md:mx-28 mt-6 md:mt-10 text-white">
                    {agendaItems.map((item, index) => (
                        <AgendaItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}