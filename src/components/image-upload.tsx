"use client";

import { useState, useRef, useCallback } from "react";
import { Upload } from "lucide-react";
import { cn } from "@/lib/utils";

export function ImageUpload() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = useCallback((file: File | undefined) => {
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file.name);
    }
  }, []);

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const onDragLeave = () => setIsDragOver(false);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0]);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Upload image — drag and drop or click to select"
      className={cn(
        "border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition-colors",
        isDragOver
          ? "border-primary bg-primary/10"
          : "border-border hover:border-primary/60 hover:bg-muted/50"
      )}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      onClick={() => inputRef.current?.click()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={onChange}
        aria-hidden="true"
        tabIndex={-1}
      />
      <Upload
        className="h-10 w-10 mx-auto mb-3 text-muted-foreground"
        aria-hidden="true"
      />
      {selectedFile ? (
        <p className="text-sm font-medium text-foreground">{selectedFile}</p>
      ) : (
        <>
          <p className="text-sm font-semibold text-foreground mb-1">
            Drag & drop your photo here
          </p>
          <p className="text-xs text-muted-foreground">
            or click to browse — JPG, PNG, WEBP up to 10 MB
          </p>
        </>
      )}
    </div>
  );
}
