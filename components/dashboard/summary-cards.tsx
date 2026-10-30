import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import type { DocumentItem } from "@/types/document";

export function SummaryCards({ documents }: { documents: DocumentItem[] }) {
  const processed = documents.filter(
    (document) => document.status === "Processed",
  ).length;
  const needsAttention = documents.filter(
    (document) =>
      document.status === "Processing" || document.status === "Failed",
  ).length;

  const cards = [
    {
      title: "Total documents",
      value: String(documents.length),
      caption: "In your workspace",
      image: "/images/documents-summary.jpg",
      alt: "Documents stored in the cloud",
    },
    {
      title: "Storage used",
      value: "3.2 GB",
      caption: "of 10 GB demo capacity",
      image: "/images/storage-summary.jpg",
      alt: "Cloud storage usage",
    },
    {
      title: "Processed",
      value: String(processed),
      caption: "Ready for use",
      image: "/images/processed-summary.jpg",
      alt: "Processed document",
    },
    {
      title: "Needs attention",
      value: String(needsAttention),
      caption: "Processing or failed",
      image: "/images/attention-summary.jpg",
      alt: "Document needing attention",
    },
  ];

  return (
    <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map(({ title, value, caption, image, alt }) => (
        <Card
          key={title}
          className="relative min-h-28 overflow-hidden rounded-lg border-slate-200/80 py-0 shadow-sm shadow-slate-950/[0.02]"
        >
          <CardContent className="relative z-10 p-4 pr-24">
            <p className="text-sm font-medium text-slate-600">{title}</p>
            <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              {value}
            </p>
            <p className="mt-1 text-xs text-slate-500">{caption}</p>
          </CardContent>
          <Image
            src={image}
            alt={alt}
            width={96}
            height={96}
            className="absolute bottom-0 right-1 size-24 object-contain mix-blend-multiply"
          />
        </Card>
      ))}
    </section>
  );
}
