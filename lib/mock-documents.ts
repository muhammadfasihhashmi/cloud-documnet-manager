import type { DocumentItem } from "@/types/document";

export const initialDocuments: DocumentItem[] = [
  {
    id: 1,
    name: "Cloud Computing Assignment.pdf",
    type: "PDF document",
    size: "2.4 MB",
    modified: "Oct 28, 2026",
    status: "Processed",
  },
  {
    id: 2,
    name: "Project Proposal.docx",
    type: "Word document",
    size: "840 KB",
    modified: "Oct 27, 2026",
    status: "Processed",
  },
  {
    id: 3,
    name: "Architecture Diagram.png",
    type: "Image",
    size: "1.2 MB",
    modified: "Oct 26, 2026",
    status: "Processing",
  },
  {
    id: 4,
    name: "Semester Notes.pdf",
    type: "PDF document",
    size: "4.8 MB",
    modified: "Oct 24, 2026",
    status: "Processed",
  },
  {
    id: 5,
    name: "Requirements Draft.pdf",
    type: "PDF document",
    size: "620 KB",
    modified: "Oct 22, 2026",
    status: "Failed",
  },
];
