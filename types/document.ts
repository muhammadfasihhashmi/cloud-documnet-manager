export type DocumentStatus = "Processed" | "Processing" | "Failed";

export type DocumentItem = {
  id: number;
  name: string;
  type: string;
  size: string;
  modified: string;
  status: DocumentStatus;
};
