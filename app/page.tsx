import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { initialDocuments } from "@/lib/mock-documents";

export default function OverviewPage() {
  return <DashboardOverview documents={initialDocuments} />;
}
