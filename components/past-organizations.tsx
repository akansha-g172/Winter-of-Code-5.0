import Image from 'next/image'
import partnercard from '../public/partner.svg'

interface PastOrg {
    name: string;
    link: string;
    image: string;
}

const pastOrgData: PastOrg[] = [
    {
        name: "OpenPrinting",
        link: "https://openprinting.github.io/",
        image: "OpenPrinting.webp"
    },
    {
        name: "DebugSwift",
        link: "https://github.com/DebugSwift/DebugSwift",
        image: "Debug Swift.webp"
    },
    {
        name: "Tiled",
        link: "https://www.mapeditor.org/",
        image: "Tiled.png"
    },
    {
        name: "ClassroomIO",
        link: "https://www.classroomio.com/",
        image: "ClassroomIO.webp"
    },
    {
        name: "ChartDB",
        link: "https://chartdb.io/",
        image: "ChartDB.webp"
    },
    {
        name: "Brisa",
        link: "https://brisa.build/",
        image: "Brisa.webp"
    },
    {
        name: "TensorZero",
        link: "https://www.tensorzero.com/",
        image: "TensorZero.webp"
    },
    {
        name: "Mixxx",
        link: "https://mixxx.org/",
        image: "Mixxx.webp"
    },
    {
        name: "GDevelop",
        link: "https://gdevelop.io/",
        image: "GDevelop.webp"
    },
    {
        name: "SQL Page",
        link: "https://sql.datapage.app/",
        image: "SQLPage.webp"
    },
    {
        name: "Holidays Framework",
        link: "https://github.com/vacanza/holidays",
        image: "HolidaysFramework.webp"
    },
    {
        name: "Laudspeaker",
        link: "https://laudspeaker.com/",
        image: "Laudspeaker.webp"
    },
    {
        name: "Snapcrafters",
        link: "https://snapcrafters.org/",
        image: "Snapcrafters.webp"
    },
    {
        name: "Mifos",
        link: "https://mifos.org/",
        image: "Mifos.webp"
    },
    {
        name: "API Dash",
        link: "https://apidash.dev/",
        image: "APIDash.png"
    },
    {
        name: "The Stellar Group",
        link: "https://stellar-group.org/",
        image: "TheStellarGroup.webp"
    }
];

const PastOrgCard = ({ org }: { org: PastOrg }) => {
    return (
        <a
            className="relative w-[45%] sm:w-[30%] gap-[2%] my-[2%] hover:scale-105 duration-700"
            href={org.link}
            rel="noopener noreferrer"
            target="_blank"
        >
            <Image className="backdrop-blur" src={partnercard} alt="org card" />
            <div className='absolute top-[4%] left-[10%] w-[80%] font-chakra font-bold text-scale-40-4 text-center text-orgs text-nowrap overflow-hidden'>
                {org.name}
            </div>

            <div
                className="absolute left-[50%] -translate-x-[50%] top-[28%] w-[65%] h-[55%] items-center flex overflow-hidden"
            >
                <img
                    src={`/past-orgs/${org.image}`}
                    className='w-full h-full mx-auto object-contain'
                    alt={org.name}
                />
            </div>
        </a>
    );
};

const PastOrganizations = () => {
    return (
        <section className='w-full h-full mx-auto pt-[10%]' id="past-orgs">
            <div className='text-center text-orgs font-kleemax text-scale-50 drop-shadow-gold'>
                PAST ORGANIZATIONS
            </div>

            <div className='w-full pt-[8%] px-[10%] sm:px-[5%] gap-[2%] flex justify-center flex-wrap'>
                {pastOrgData.map((org, index) =>
                    <PastOrgCard key={index} org={org} />
                )}
            </div>

            <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50]" />
        </section>
    );
}

export default PastOrganizations;
