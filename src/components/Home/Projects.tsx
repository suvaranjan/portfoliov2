import Image from "next/image";
import Link from "next/link";
import profile from "@/data/profile.json";

export default function Projects() {
  return (
    <section className="mx-auto max-w-7xl py-5" id="work">
      <h2 className="text-gray-500 mb-10 text-sm font-medium tracking-widest uppercase">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {profile.projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({
  project,
}: {
  project: { title: string; description: string; imgUrl: string; id: string };
}) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div className="group relative">
        <div className="pointer-events-none absolute inset-0 rounded-xl border border-neutral-200 " />
        <div className="pointer-events-none absolute inset-1 rounded-lg border border-neutral-200 " />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-10  " />
          <div className="relative aspect-[4/3] overflow-hidden bg-gray-50 ">
            <Image
              src={project.imgUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 " />
          </div>
          <div className="flex flex-1 flex-col p-5 pt-4">
            <div className="flex items-start justify-between">
              <h3 className="font-medium text-gray-900">{project.title}</h3>

              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <p className="mt-1 text-sm text-gray-500 ">{project.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
