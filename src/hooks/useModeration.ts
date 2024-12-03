import { useState } from "react";

interface ModerationResult {
  issues: string[];
  summary: string;
  severity: "low" | "medium" | "high";
}

export function useModeration() {
  const [moderationResult, setModerationResult] =
    useState<ModerationResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyze = async (imageData: string) => {
    try {
      setIsAnalyzing(true);
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageData }),
      });

      if (!response.ok) {
        throw new Error("Analysis request failed");
      }

      const { result } = await response.json();
      const parsedResult = JSON.parse(result); // Safely parse the JSON
      setModerationResult(parsedResult);
    } catch (error) {
      console.error("Moderation analysis error:", error);
      setModerationResult({
        issues: ["Analysis error"],
        summary: "Could not complete frame analysis",
        severity: "high",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return { moderationResult, isAnalyzing, analyze };
}
