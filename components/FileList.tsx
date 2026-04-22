"use client";

import { useState } from "react";
import Link from "next/link";
import { Clover, ArrowUp, ArrowDown, Minus } from "lucide-react";
import File from "./File";
import { FileItem } from "@/app/contact/types/files";

type NameSort = "a-z" | "z-a" | "random";
type TypeSort = "a-z" | "z-a";
type DateSort = "asc" | "desc";

interface FileListProps {
  files: FileItem[];
}

export default function FileList({ files }: FileListProps) {
  const [activeSort, setActiveSort] = useState<"name" | "type" | "date">("name");
  const [nameSort, setNameSort] = useState<NameSort>("a-z");
  const [typeSort, setTypeSort] = useState<TypeSort>("a-z");
  const [dateSort, setDateSort] = useState<DateSort>("asc");
  const [randomKey, setRandomKey] = useState(0);

  const sortedFiles = getSortedFiles([...files], activeSort, nameSort, typeSort, dateSort, randomKey);

  const handleNameSort = () => {
    setActiveSort("name");
    if (nameSort === "a-z") setNameSort("z-a");
    else if (nameSort === "z-a") {
      setNameSort("random");
      setRandomKey(prev => prev + 1);
    } else {
      setNameSort("a-z");
    }
  };

  const handleTypeSort = () => {
    setActiveSort("type");
    if (typeSort === "a-z") setTypeSort("z-a");
    else setTypeSort("a-z");
  };

  const handleDateSort = () => {
    setActiveSort("date");
    if (dateSort === "asc") setDateSort("desc");
    else setDateSort("asc");
  };

  return (
    <div className="w-full">
      <div className="w-full border-b border-black pb-2">
        <div className="grid grid-cols-3 gap-8 text-base font-semibold">
          <div className="flex items-center gap-1">
            <span>name</span>
            <button
              onClick={handleNameSort}
              className="text-xs font-normal hover:bg-gray-200 px-1 py-1 rounded transition"
            >
              {activeSort === "name" ? (nameSort === "random" ? <Clover size={16} /> : nameSort === "a-z" ? <ArrowUp size={16} /> : <ArrowDown size={16} />) : <Minus size={16} />}
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span>file type</span>
            <button
              onClick={handleTypeSort}
              className="text-xs font-normal hover:bg-gray-200 px-1 py-1 rounded transition"
            >
              {activeSort === "type" ? (typeSort === "a-z" ? <ArrowUp size={16} /> : <ArrowDown size={16} />) : <Minus size={16} />}
            </button>
          </div>
          <div className="flex items-center gap-1">
            <span>last updated</span>
            <button
              onClick={handleDateSort}
              className="text-xs font-normal hover:bg-gray-200 px-1 py-1 rounded transition"
            >
              {activeSort === "date" ? (dateSort === "asc" ? <ArrowUp size={16} /> : <ArrowDown size={16} />) : <Minus size={16} />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        {sortedFiles.map((file) => (
          <Link key={file.id} href={file.href} className="w-full">
            <File name={file.name} type={file.type} date={file.date} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function getSortedFiles(
  files: FileItem[],
  activeSort: "name" | "type" | "date",
  nameSort: NameSort,
  typeSort: TypeSort,
  dateSort: DateSort,
  randomKey: number
): FileItem[] {
  const sorted = [...files];

  if (activeSort === "name") {
    switch (nameSort) {
      case "a-z":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "z-a":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "random":
        sorted.sort(() => Math.random() - 0.5);
        break;
    }
  } else if (activeSort === "type") {
    sorted.sort((a, b) =>
      typeSort === "a-z"
        ? (a.type || "").localeCompare(b.type || "")
        : (b.type || "").localeCompare(a.type || "")
    );
  } else if (activeSort === "date") {
    sorted.sort((a, b) => {
      const timeA = new Date(a.date || 0).getTime();
      const timeB = new Date(b.date || 0).getTime();
      return dateSort === "asc" ? timeA - timeB : timeB - timeA;
    });
  }

  return sorted;
}
