import { Mails } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const email = "suvaranjan01@gmail.com";

  return (
    <section
      id="contact"
      className="mt-16 flex flex-col items-center justify-center rounded-3xl border p-1 text-center shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:border-neutral-900"
    >
      <div className="w-full rounded-3xl border border-neutral-200 bg-white p-1 shadow-inner dark:border-neutral-800 dark:bg-neutral-900">
        <div className="rounded-3xl bg-white px-3 py-10 sm:px-10 dark:bg-neutral-900">
          <div className="flex flex-col items-center">
            <div className="mb-6">
              <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
              Get in touch
            </h2>

            <p className="mt-4 max-w-md text-neutral-600 dark:text-neutral-400">
              Do you have a job opportunity or an idea you'd like to discuss?
              Feel free to reach out to me.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href={`mailto:${email}`}
                className="group hover:text-primary-500 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-neutral-700 transition-all hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800"
              >
                <Mails />
                <span>{email}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
