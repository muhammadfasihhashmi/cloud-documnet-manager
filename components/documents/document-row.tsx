import { ArrowDownToLine, MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import type { DocumentItem } from "@/types/document";
import { DocumentFileIcon } from "./document-file-icon";
import { DocumentStatusBadge } from "./document-status-badge";

export function DocumentRow({ document }: { document: DocumentItem }) {
  return (
    <TableRow className="hover:bg-slate-50/80">
      <TableCell className="px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-blue-600">
            <DocumentFileIcon name={document.name} />
          </div>
          <div className="min-w-0">
            <p className="max-w-[260px] truncate text-sm font-medium text-slate-900 sm:max-w-[320px]">
              {document.name}
            </p>
            <p className="mt-0.5 text-xs text-slate-500">{document.type}</p>
          </div>
        </div>
      </TableCell>
      <TableCell className="whitespace-nowrap px-4 py-3.5 text-slate-600 sm:px-5">
        {document.size}
      </TableCell>
      <TableCell className="whitespace-nowrap px-4 py-3.5 text-slate-600 sm:px-5">
        {document.modified}
      </TableCell>
      <TableCell className="px-4 py-3.5 sm:px-5">
        <DocumentStatusBadge status={document.status} />
      </TableCell>
      <TableCell className="px-4 py-3.5 text-right sm:px-5">
        <Button
          variant="ghost"
          size="icon-sm"
          disabled
          title="Download functionality will be added later"
          aria-label={`Download ${document.name}`}
          className="text-slate-400"
        >
          <ArrowDownToLine size={17} />
        </Button>
        <Button
          variant="ghost"
          size="icon-sm"
          disabled
          title="Document actions will be added later"
          aria-label={`More actions for ${document.name}`}
          className="text-slate-400"
        >
          <MoreHorizontal size={17} />
        </Button>
      </TableCell>
    </TableRow>
  );
}
