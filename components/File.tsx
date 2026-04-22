"use client";

interface FileProps {
  name: string;
  type: "folder" | "doc" | "link" | "project";
  date?: string;
}

export default function File({ name, type, date }: FileProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "-";
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).toLowerCase();
  };

  return (
    <div className="w-full border-b border-black hover:bg-taupe-100 transition py-2">
      <div className="grid grid-cols-3 gap-8 text-base">
        <div>{name}</div>
        <div className="text-gray-600">{type || "-"}</div>
        <div className="text-gray-600">{formatDate(date)}</div>
      </div>
    </div>
  );
}