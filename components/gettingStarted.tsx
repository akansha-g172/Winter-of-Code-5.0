import Link from 'next/link';
import Image from 'next/image'
import arrow from '../public/arrow.svg'
import aboutus from '../public/aboutus.svg'
import card1 from '../public/timelinecard1.svg'
import card2 from '../public/timelinecard2.svg'
import start from '../public/start.svg'
import asset2 from '../public/triangle.svg'
import asset3 from '../public/triangle2.svg'
import asset4 from '../public/web.svg'
import asset5 from '../public/lock.svg'

interface TEvent{
    startDate:string;
    title:string;
    description:string;
    endDate?: string;
}

const numerate = (index:number) => {
    if(index<10){
        return `0${index}`
    }
    return index
}

const timelineData: TEvent[] = [
    {
        startDate: "STEP 1",
        title: "Understand the Program",
        description:
            "Read the How It Works page, understand phases and rules, learn open-source workflows, and ensure you can commit time during the coding phase."
    },
    {
        startDate: "STEP 2",
        title: "Explore Orgs AND Projects",
        description:
            "Browse all organizations, study project descriptions, check required skills, review repos/documentation, and pick projects that fit your interests and level."
    },
    {
        startDate: "STEP 3",
        title: "Attend WoC 5.0 Inauguration",
        description:
            "On 10 January, join for the official kickoff covering program walkthrough, coding expectations, evaluations, and communication guidelines."
    },
    {
        startDate: "STEP 4",
        title: "Prepare Your Proposals",
        description:
            "Select up to 3 projects from 3 different orgs, write focused proposals per project, follow guidelines, and set clear, realistic goals—avoid generic copies."
    },
    {
        startDate: "STEP 5",
        title: "Communicate with Mentors",
        description:
            "Join the official communication channel, ask thoughtful questions, clarify scope and expectations, and discuss feasibility early—good communication improves proposals."
    },
    {
        startDate: "STEP 6",
        title: "Submit During Proposal Phase",
        description:
            "Submit before the deadline, verify formatting and required fields, and remember no edits are allowed after the proposal window closes."
    },
    {
        startDate: "STEP 7",
        title: "Wait for your Selection",
        description:
            "Monitor announcements, reply promptly to mentors, be patient during evaluation, and follow onboarding steps if selected."
    },
    {
        startDate: "STEP 8",
        title: "Begin the Coding Phase",
        description:
            "Set up your environment, follow mentor guidance, work consistently, submit clean contributions, and document your work properly."
    }
];

const TimelineCard = ({ event, index }: { event: TEvent; index: number }) => {
    const hasEnd = Boolean(event.endDate);
    const card = hasEnd ? card2 : card1;
    const source = index % 2 === 0 ? asset2 : asset3;
    const TBA = false;
    return (
        <div className={`${hasEnd ? "mb-[4%]" : ""} sm:mt-[-5%] w-full sm:flex ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
            <div className="relative w-fit max-w-[80%] sm:max-w-[40%] mx-auto sm:mx-0">
                <Image className="backdrop-blur" src={card} alt="timeline card" />
                <div className="absolute top-0 left-0 p-[2%] font-kleemax font-xl w-[40%] text-center text-white text-scale-30 text-nowrap overflow-hidden">
                    {event.startDate.toUpperCase()}
                </div>
                <div className="absolute top-0 right-0 p-[1%] font-kleemax w-[20%] text-center text-white text-scale-60 text-nowrap overflow-hidden">
                    {numerate(index + 1)}
                </div>
                <pre className={`absolute ${hasEnd ? "top-[18.0%]" : "top-[19.0%]"} left-[25%] pr-[2%] font-kleemax w-[75%] text-scale-50 text-left text-timeline text-wrap overflow-hidden`}>
                    {event.title.toUpperCase()}
                </pre>
                <div className={`absolute ${hasEnd ? "top-[44%] h-[35%]" : "top-[46.5%] h-[37%]"} left-0 p-[2%] w-[100%] text-left font-chakra text-grey text-scale-25 overflow-hidden`}>
                    {event.description}
                    {TBA && (
                        <div className="absolute flex justify-center top-[30%] w-full">
                            <Image className="w-[6%] drop-shadow-red" src={asset5} alt="lock" />
                            <p className="pl-[2%] pt-[2%] text-timeline font-kleemax drop-shadow-redmini text-scale-50 font-semibold">TO BE ANNOUNCED</p>
                        </div>
                    )}
                </div>
                {event.endDate && (
                    <div className="absolute bottom-[-0.5%] left-0 p-[2%] font-kleemax font-xl w-[40%] text-center text-white text-scale-30 text-nowrap overflow-hidden">
                        {event.endDate.toUpperCase()}
                    </div>
                )}
            </div>
            <hr className="hidden sm:block w-[8%] bg-gradient-to-t from-timeline to-timeline my-[8.4%]" />
            <Image className={`hidden sm:block z-20 w-[4%] ${hasEnd ? "-mt-[2.3%]" : "-mt-[1.35%]"}`} src={source} alt="<>" />
        </div>
    );
};

const description = "Winter of Code is a 3-month-long open-source journey brought to you by GDG on campus IIIT Kalyani (formerly known as GDSC IIIT Kalyani) , in collaboration with Google Developer Groups on Campus. Modeled after Google Summer of Code (GSoC), this program offers an exciting opportunity for developers to dive into the world of open source, contribute to impactful projects, and collaborate with like-minded peers. Whether you're a seasoned coder or just starting out, Winter of Code 5.0 is your chance to enhance your skills, make meaningful contributions, and become part of the global open-source community."
const GettingStarted = () => {
    return (
        <section className='w-full h-full mx-auto pt-[10%] bg-black' id="timeline">
            <div className='text-center text-timeline font-kleemax text-scale-40 drop-shadow-red'>
                GETTING STARTED
            </div>
            <div className='w-full p-[10%] sm:p-[5%] relative'>
            <Image className="z-20 mx-auto w-[30%] mb-[10%] " src={start} alt="start" />
            <div className='hidden sm:block z-10 h-[80.4%] w-[0.4%] mx-auto bg-white absolute top-[8.0%] left-[49.8%]'></div> 
            <div className='sm:hidden z-10 h-[5.2%] w-[0.4%] mx-auto bg-gradient-to-b from-white to-timeline absolute top-[5.9%] left-[49.8%]'></div>
            <div className='sm:hidden z-10 h-[2.9%] w-[0.4%] mx-auto bg-gradient-to-t from-white to-timeline absolute bottom-[7.65%] left-[49.8%]'></div>
            {timelineData.map((event, index) => (
                <TimelineCard key={index} event={event} index={index} />
            ))}
            <Image className="z-20 mx-auto w-[5%] my-[10%]" src={asset4} alt="end" />
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to to-black"/>
        </section>
    );
};

export default GettingStarted;