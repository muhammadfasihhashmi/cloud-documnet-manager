import { CheckCircle2, Clock3, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { DocumentStatus } from "@/types/document";

const statusConfig = {
  Processed: {
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700 hover:bg-emerald-50",
  },
  Processing: {
    icon: Clock3,
    className: "bg-amber-50 text-amber-700 hover:bg-amber-50",
  },
  Failed: {
    icon: X,
    className: "bg-rose-50 text-rose-700 hover:bg-rose-50",
  },
};

export function DocumentStatusBadge({ status }: { status: DocumentStatus }) {
  const { icon: Icon, className } = statusConfig[status];

  return (
    <Badge className={`gap-1.5 rounded-full px-2.5 py-1 text-xs ${className}`}>
      <Icon size={13} />
      {status}
    </Badge>
  );
}
