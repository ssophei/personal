export type FileItem = {
  id: string;
  name: string;
  href: string;
  type: "folder" | "doc" | "link" | "project";
  date?: string;
  status?: string;
};