"use client";

import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toMonospace } from "@/lib/to-monospace";

export function TypewriterConverter() {
  const [input, setInput] = useState("");
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLTextAreaElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const converted = toMonospace(input);

  async function handleCopy() {
    if (!converted) return;
    await navigator.clipboard.writeText(converted);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="input"
          className="text-sm font-medium text-foreground/70"
        >
          Your text
        </label>
        <Textarea
          id="input"
          placeholder="Type or paste your text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="min-h-28 resize-y text-base"
          autoFocus
        />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label
            htmlFor="output"
            className="text-sm font-medium text-foreground/70"
          >
            Monospace
          </label>
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            disabled={!converted}
          >
            {copied ? (
              <>
                <Check data-icon="inline-start" />
                Copied
              </>
            ) : (
              <>
                <Copy data-icon="inline-start" />
                Copy
              </>
            )}
          </Button>
        </div>
        <Textarea
          ref={outputRef}
          id="output"
          readOnly
          value={converted}
          placeholder="𝚈𝚘𝚞𝚛 𝚖𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚝𝚎𝚡𝚝 𝚠𝚒𝚕𝚕 𝚊𝚙𝚙𝚎𝚊𝚛 𝚑𝚎𝚛𝚎..."
          className="min-h-28 resize-y font-mono text-base"
          onFocus={(e) => e.target.select()}
        />
      </div>
    </div>
  );
}
