"use client";

import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@assets/components/ui/tooltip";

interface GlossaryTermProps {
  term: string;
  definition: string;
  children?: React.ReactNode;
}

export default function GlossaryTerm({
  term,
  definition,
  children,
}: GlossaryTermProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="glossary-term">{children || term}</span>
        </TooltipTrigger>
        <TooltipContent>
          <div className="max-w-xs">
            <p className="font-semibold">{term}</p>
            <p className="text-sm">{definition}</p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}