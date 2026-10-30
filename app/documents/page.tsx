import { DocumentsTable } from "@/components/documents/documents-table";
import { initialDocuments } from "@/lib/mock-documents";

export default function DocumentsPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-950">
          My documents
        </h1>
        <p className="mt-1.5 text-sm text-slate-500">
          Browse and manage the documents in your workspace.
        </p>
      </div>
      <DocumentsTable
        title="All documents"
        description="Search and review your stored documents"
        documents={initialDocuments}
      />
    </>
  );
}
