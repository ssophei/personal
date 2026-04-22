"use client";

import FileList from "../../components/FileList";
import { contactFiles } from "../data/contact-files";

export default function Contact() {
  return (
    <div className='flex w-full font-sans text-black min-h-screen px-[20vw]'>
      <div className="flex flex-col gap-y-[2vh] w-full py-[5vh]">
        <div>
          <div className='text-2xl font-bold'>
            Contact Me
          </div>
          <div>
            Feel free to reach out!
          </div>
        </div>
        <FileList files={contactFiles} />
      </div>
    </div>
  );
}