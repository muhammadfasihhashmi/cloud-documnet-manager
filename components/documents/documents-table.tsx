import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DocumentItem } from "@/types/document";
import { DocumentRow } from "./document-row";
import { DocumentSearch } from "./document-search";

type DocumentsTableProps = {
  documents: DocumentItem[];
  title: string;
  description: string;
};

export function DocumentsTable({
  documents,
  title,
  description,
}: DocumentsTableProps) {
  return (
    <section className="overflow-hidden rounded-lg border border-slate-200/80 bg-white shadow-sm shadow-slate-950/[0.02]">
      <div className="flex flex-col justify-between gap-4 border-b border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:px-5">
        <div>
          <h2 className="text-sm font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        </div>
        <DocumentSearch />
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-[680px] text-sm">
          <TableHeader className="bg-slate-50/70">
            <TableRow className="hover:bg-transparent">
              <TableHead className="px-4 py-3 text-xs font-medium sm:px-5">
                Name
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium sm:px-5">
                File size
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium sm:px-5">
                Last modified
              </TableHead>
              <TableHead className="px-4 py-3 text-xs font-medium sm:px-5">
                Status
              </TableHead>
              <TableHead className="px-4 py-3 text-right text-xs font-medium sm:px-5">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((document) => (
              <DocumentRow
                key={document.id}
                document={document}
              />
            ))}
            {documents.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="px-5 py-12 text-center text-slate-500"
                >
                  No documents match your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="border-t border-slate-100 px-4 py-3 text-xs text-slate-500 sm:px-5">
        Showing {documents.length} demo documents
      </div>
    </section>
  );
}
