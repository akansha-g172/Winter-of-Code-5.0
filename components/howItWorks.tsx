import Link from 'next/link';
import Image from 'next/image';
import arrow from '../public/arrow.svg';
import aboutus from '../public/aboutus.svg';
import faqcard from '../public/faqcard.svg';
import faqcard1 from '../public/faqcard1.svg';
import faqcard2 from '../public/faqcard2.svg';

const description = "Winter of Code is a 3-month-long open-source journey brought to you by GDG on campus IIIT Kalyani (formerly known as GDSC IIIT Kalyani), in collaboration with Google Developer Groups on Campus. Modeled after Google Summer of Code (GSoC), this program offers an exciting opportunity for developers to dive into open source, contribute to impactful projects, and collaborate with like-minded peers.";
const steps = [
    {
        title: "Program Overview",
        points: [
            "Review phases end-to-end: exploration, proposal, selection, coding, evaluation, finale.",
            "Confirm timelines, participation rules, and contribution expectations.",
            "Block calendar time to remain consistent through the coding phase."
        ]
    },
    {
        title: "Organization & Project Exploration",
        points: [
            "Audit participating orgs and shortlist projects aligned to your skills and goals.",
            "Study READMEs, contribution guides, and open issues to gauge fit.",
            "Validate tech stacks, prerequisites, and success criteria before committing."
        ]
    },
    {
        title: "Inaugural Ceremony (10 January)",
        points: [
            "Attend kickoff for program walkthrough and coding expectations.",
            "Internalize evaluation criteria, communication norms, and support channels.",
            "Resolve any final clarifications with organizers or mentors."
        ]
    },
    {
        title: "Communication & Community",
        points: [
            "Join the official Discord; stay on top of announcements and threads.",
            "Ask precise questions to mentors/maintainers to refine scope and feasibility.",
            "Document agreements and decisions; uphold respectful, transparent communication."
        ]
    },
    {
        title: "Proposal Phase",
        points: [
            "Submit up to 3 tailored proposals across 3 distinct organizations.",
            "Follow org-specific templates; avoid generic or duplicated content.",
            "Present milestones, deliverables, risks, and a realistic execution timeline."
        ]
    },
    {
        title: "Submission & Deadlines",
        points: [
            "File proposals before the cutoff—late changes are not accepted.",
            "Verify formatting, required fields, and repository links prior to submission.",
            "Keep local backups of your drafts and final copies."
        ]
    },
    {
        title: "Selection & Onboarding",
        points: [
            "Monitor announcements and reply promptly to mentor outreach.",
            "Complete onboarding: repo access, environment setup, required forms.",
            "Establish cadence for standups, reporting, and code reviews."
        ]
    },
    {
        title: "Coding Phase",
        points: [
            "Set up builds/tests; validate end-to-end flows early.",
            "Ship in small, reviewable increments with clean commits and documentation.",
            "Surface blockers quickly; sync regularly with mentors."
        ]
    },
    {
        title: "Evaluation & Mentorship",
        points: [
            "Hit agreed milestones and provide concise progress updates.",
            "Address review feedback promptly while maintaining code quality.",
            "Demonstrate learning, collaboration, and consistency over perfection."
        ]
    },
    {
        title: "Final Submission & Showcase",
        points: [
            "Deliver code, docs, and handover notes ahead of the finale.",
            "Be ready to demo outcomes, impact, and learnings.",
            "Celebrate responsibly and recognize mentors and collaborators."
        ]
    },
    {
        title: "Code of Conduct & Support",
        points: [
            "Adhere to the Code of Conduct—be respectful, inclusive, collaborative.",
            "Escalate issues via official channels; use Discord for day-to-day support.",
            "Uphold open-source ethics, transparency, and fairness at all times."
        ]
    }
];

const HowItWorks = () => {
    return (
        <section className='w-full p-4 pt-[10%]' id="about">
            <div className="bg-[#868686] bg-opacity-10 m-auto max-w-[90%] pb-[10%] relative">
                <div className="w-full flex">
                    <div className='text-[#00FF84] bg-black w-fit rounded-br-xl border-[#868686] border-opacity-10 pr-4 text-scale-40 font-kleemax text-nowrap'>
                        HOW IT WORKS
                    </div>
                    <div className='w-full bg-black'>
                        <div className='h-full bg-[#868686] bg-opacity-10 rounded-tl-xl border-black'></div>
                    </div>
                    <div className='w-[5%]'>
                        <Link href="/">
                        <Image src={arrow} alt="woc"/>
                        </Link>
                    </div>
                </div>
                <div className="w-full flex p-[5%] font-chakra text-scale-20-5 text-grey relative">
                    <div className="space-y-6 z-10 w-full">
                        <p className="text-scale-20 mb-14">{description}</p>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {steps.map((step, idx) => {
                                const cards = [faqcard, faqcard, faqcard];
                                const cardImg = cards[idx % cards.length];
                                return (
                                    <div key={idx} className="relative w-full">
                                        <Image src={cardImg} alt="card" className="w-full" />
                                        <div className="absolute inset-0 p-5 flex flex-col justify-start">
                                            <div className="text-[#00ff84] font-kleemax text-scale-40 mb-2">
                                                {String(idx + 1).padStart(2, "0")}
                                            </div>
                                            <p className="font-semibold text-white text-scale-30 mb-2">{step.title}</p>
                                            <ul className="list-disc pl-4 space-y-1 text-grey text-scale-25">
                                                {step.points.map((point, i) => (
                                                    <li key={i}>{point}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Image className="absolute w-[50%] -bottom-[18vw] left-[25%] backdrop-blur opacity-80 pointer-events-none" src={aboutus} alt="woc" />
                </div>
            </div>
            <hr className="flex max-w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] mt-[20%]" />
        </section>
    );
};

export default HowItWorks;