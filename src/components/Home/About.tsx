import Image from "next/image";
import React from "react";
import profile from "@/data/profile.json";

function About() {
  return (
    <div
      className="flex flex-col-reverse items-start justify-between gap-6 py-5 sm:flex-row sm:items-start sm:gap-8 md:py-10 xl:py-10"
      id="about"
    >
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-medium tracking-tight text-gray-900">
              {profile.about.name}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18 18"
              fill="none"
              className="ml-1 h-5 w-5 text-blue-500"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8.9991 1.3923L6.5871 0L5.2497 2.3175H2.4444V5.1768L0 6.588L1.3923 9L0 11.4115L2.4444 12.8232V15.4805H5.13315L6.5871 18L8.9991 16.6077L11.4111 18L12.8655 15.48H15.6384V12.7755L18 11.4115L16.6072 9L18 6.58845L15.6384 5.22495V2.31795H12.7498L11.4111 0L8.9991 1.3923ZM12.3358 6.44355L13.3501 7.4727L8.20665 12.6477L5.1309 9.5292L6.1407 8.5131L8.20485 10.5745L12.3358 6.44355Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="text-md ">{profile.about.title}</p>
        </div>

        <p className="text-gray-700 leading-relaxed space-y-5 max-w-xl">
          {profile.about.description[0]}
        </p>

        <p className="max-w-xl ">
          Currently Looking for work as developer.
          <a className="ml-2 text-sm font-semibold" href="#contact">
            Hire me?
          </a>
        </p>
      </div>

      <div className="relative flex-shrink-0">
        <div className="overflow-hidden rounded-md border-2 border-gray-100 p-0.5">
          <Image
            src="/images/profile.jpg"
            alt="Suvaranjan Pradhan"
            width={100}
            height={100}
            className="rounded-md object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default About;
