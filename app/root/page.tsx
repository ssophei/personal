"use client";
import Link from "next/link";
import FileList from "../../components/FileList";
import { rootFiles } from "../data/root-files";

export default function Home() {
  return (
    <div className='flex w-full font-sans text-black'>
      <div className="flex flex-col w-full">
        <FileList files={rootFiles} />
      </div>
    </div>
  );
}