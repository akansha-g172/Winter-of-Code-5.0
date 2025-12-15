import Image from "next/image";
import Link from "next/link";
import asset1 from "../public/team.svg";
import asset2 from "../public/teamLink.svg";
import asset3 from "../public/teamName.svg";
import JumbleText from "@/components/jumble";
import members from "../data/team.json";

interface Teammate {
  name: string;
  bio: string;
}

const teamData: Teammate[] = members;

const TeamCard = ({ name, bio }: Teammate) => {
  var fname = name.split(" ")[0].toUpperCase();
  return (
    <div className="relative w-[35%] sm:w-[20%] my-[1.5%] overflow-hidden hover:scale-105 duration-700">
      <Image src={asset1} alt="teammate card" />
      <div className="absolute left-[5%] bottom-[5%] w-[90%] h-[80%] flex items-center justify-center overflow-hidden rounded-md">
        <Image
          src={`/team/${name}.jpg`}
          alt={`${name} photo`}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 20vw"
        />
      </div>
      <Image
        className="z-10 absolute left-[10%] w-[80%] bottom-[0%]"
        src={asset3}
        alt="teammate name"
      />
      <div className="z-10 absolute bottom-[calc(2%-3px)] left-[10%] w-[80%] align-middle font-kleemax text-scale-60-3 text-center text-black text-nowrap overflow-hidden">
        {fname.toUpperCase()}
      </div>
      <Link
        href={bio}
        rel="noopener noreferrer"
        target="_blank"
        className="absolute top-[2.5%] right-[3.5%] w-[6%] hover:scale-110 duration-700"
      >
        <Image src={asset2} alt="teammate link" />
      </Link>
    </div>
  );
};

const Team = () => {
  var TBA = false;
  return (
    <section className="w-full h-full mx-auto pt-[5%] bg-black" id="team">
      <div className="text-center text-team font-kleemax text-scale-40 drop-shadow-sky">
        <JumbleText text="OUR TEAM" id="teamjumble" />
      </div>
      {TBA ? (
        <div className="pt-[5%] flex w-full justify-center text-team drop-shadow-sky font-kleemax text-scale-30 font-semibold">
          TO BE ANNOUNCED
        </div>
      ) : (
        <div className="pt-[5%] w-full gap-[calc(3%+4px)] flex justify-center flex-wrap">
          {teamData.map((teamMate, index) => (
            <TeamCard key={index} name={teamMate.name} bio={teamMate.bio} />
          ))}
        </div>
      )}
      <hr className="flex mt-[10%] w-full flex-grow bg-gradient-to-r from-black via-[#CCCCCC50] to-black" />
    </section>
  );
};

export default Team;
