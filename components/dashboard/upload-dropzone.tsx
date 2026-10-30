import { ArrowUpFromLine, FileUp } from "lucide-react";

import { Button } from "@/components/ui/button";

export function UploadDropzone() {
  return (
    <section className="flex flex-col gap-4 rounded-lg border border-dashed border-slate-300 bg-slate-50/60 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-start gap-3">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FileUp className="size-5" />
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-900">
            Upload documents
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Select files to add them to this local demo workspace.
          </p>
          <p className="mt-1.5 text-xs text-slate-400">
            PDF, Word, images, and archives supported · Not uploaded to Azure
          </p>
        </div>
      </div>
      <Button
        disabled
        title="Upload functionality will be added later"
        className="h-9 shrink-0 gap-2 bg-blue-600 text-white hover:bg-blue-700"
      >
        <ArrowUpFromLine className="size-4" />
        Select files
      </Button>
    </section>
  );
}
