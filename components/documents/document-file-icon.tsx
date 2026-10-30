import { File, FileArchive, FileImage, FileText } from "lucide-react";

type DocumentFileIconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function DocumentFileIcon({
  name,
  className,
  size = 19,
}: DocumentFileIconProps) {
  const extension = name.split(".").pop()?.toLowerCase();
  const Icon = ["png", "jpg", "jpeg", "webp"].includes(extension ?? "")
    ? FileImage
    : ["zip", "rar", "7z"].includes(extension ?? "")
      ? FileArchive
      : ["pdf", "doc", "docx", "txt"].includes(extension ?? "")
        ? FileText
        : File;

  return <Icon className={className} size={size} />;
}
