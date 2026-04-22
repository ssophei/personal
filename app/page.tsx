"use client";
import {ArrowUpRight, Copy, Check} from "lucide-react";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className='flex justify-center items-center text-black'>
      <div className="flex flex-col gap-y-[1vh]">
        <div className = 'text-3xl font-bold'>
          sophie nguyen
        </div>
        <div>
          hi! i'm an undergraduate @ uc berkeley studying computer science + econ. i'm an incoming data analyst intern at volvo group.
        </div>
        <div>
          let’s explore together!
        </div>
        <div className="flex flex-row gap-x-[1vw]">
          <a 
          href="https://www.linkedin.com/in/sophie-nguyen-615118303"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-1 hover:text-taupe-600 transition">
            linkedin
            <ArrowUpRight size={20} />
          </a>
          <a 
          href="https://github.com/ssophei"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-1 hover:text-taupe-600 transition">
            github
            <ArrowUpRight size={20} />
          </a>
          <button
          onClick={() => {
            navigator.clipboard.writeText("sophie.nguyen@berkeley.edu");
            toast.custom(() => (
              <div className="rounded-sm bg-taupe-900 text-neutral-50 px-3 py-3 shadow flex flex-row gap-x-[0.5em] justify-center items-center">
                <Check size={20} />
                copied to clipboard!
              </div>
            ));
          }}
          className="flex items-center gap-x-2 hover:text-taupe-600 transition">
            email
            <Copy size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
