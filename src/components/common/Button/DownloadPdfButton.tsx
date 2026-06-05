"use client";

import { useState } from "react";

type Props = {
  role: string;
  mode: string;
  phase: string;
};

export default function DownloadPdfButton({
  role,
  mode,
  phase,
}: Props) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    try {
      setLoading(true);

      const url =
        `/api/export-pdf?role=${role}` +
        `&mode=${mode}` +
        `&phase=${phase}`;

      const response = await fetch(url, {
        method: "GET",
        credentials: "include",
        cache: "no-store",
      });

      if (!response.ok) {
        const err = await response.text();
        console.error("PDF API ERROR:", err);
        throw new Error("Failed to generate PDF");
      }

      const blob = await response.blob();

      const blobUrl = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${role}-${mode === "single" ? phase : mode}-report.pdf`;
      link.target = "_blank";
      link.rel = "noopener";

      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("DOWNLOAD ERROR:", error);
      alert("PDF download failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex h-[54px] cursor-pointer items-center gap-sm rounded-sm bg-[#0668E1] px-8 text-xl font-medium text-white disabled:opacity-50"
    >
      {loading ? "Generating PDF..." : "Download PDF"}
    </button>
  );
}