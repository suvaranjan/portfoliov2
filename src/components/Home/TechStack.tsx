/* eslint-disable prettier/prettier */
import Image from "next/image";
import profile from "@/data/profile.json";
import { Marquee } from "../Marquee";

const TechIcon = ({ tech }: { tech: { name: string; icon: string } }) => {
  return (
    <Image
      src={tech.icon}
      alt={tech.name}
      width={45}
      height={45}
      className="ml-2 opacity-90 transition-opacity hover:opacity-100"
    />
  );
};

export default function TechStack() {
  return (
    <section className="mt-10 mb-5" id="tech-stack">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-[0.7px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-neutral-600" />
        <h2 className="font-medium tracking-widest text-neutral-800 uppercase dark:text-neutral-200">
          Tech Stack
        </h2>
        <div className="h-[0.7px] flex-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent dark:via-neutral-600" />
      </div>

      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="py-2 [--duration:25s]">
          {profile.skills.map((tech, index) => (
            <TechIcon key={index} tech={tech} />
          ))}
        </Marquee>

        {/* Light mode only fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent dark:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent dark:hidden" />
      </div>
    </section>
  );
}
