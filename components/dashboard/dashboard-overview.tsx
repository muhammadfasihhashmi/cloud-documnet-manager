import { DocumentsTable } from "@/components/documents/documents-table";
import type { DocumentItem } from "@/types/document";
import { SummaryCards } from "./summary-cards";
import { UploadDropzone } from "./upload-dropzone";

type DashboardOverviewProps = {
  documents: DocumentItem[];
};

export function DashboardOverview({ documents }: DashboardOverviewProps) {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
          Your documents
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Manage files and keep track of their processing status.
        </p>
      </div>
      <SummaryCards documents={documents} />
      <UploadDropzone />
      <DocumentsTable
        title="Recent documents"
        description="Search and review your stored documents"
        documents={documents}
      />
    </>
  );
}
