"use client";

import React, { useState, useRef } from "react";
import { UploadCloud, Image as ImageIcon, FileCheck, X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  label: string;
  sublabel?: string;
  accept?: string;
  optional?: boolean;
  onFileSelect: (file: File | null) => void;
  className?: string;
}

export default function FileUpload({
  label,
  sublabel = "PNG, JPG, WEBP up to 5MB",
  accept = "image/*",
  optional = false,
  onFileSelect,
  className = "",
}: FileUploadProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File | null) => {
    if (!file) {
      setSelectedFile(null);
      setPreviewUrl(null);
      onFileSelect(null);
      return;
    }

    setSelectedFile(file);
    onFileSelect(file);

    if (file.type.startsWith("image/")) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className={`w-full mb-6 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <label className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
          <span>{label}</span>
          {optional && (
            <span className="text-[10px] text-[#A0A0A0] font-normal normal-case">
              (Optional)
            </span>
          )}
        </label>
      </div>

      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed transition-all cursor-pointer overflow-hidden ${
          isDragging
            ? "border-[#C6FF00] bg-[#C6FF00]/10 scale-[1.01]"
            : selectedFile
            ? "border-[#C6FF00]/60 bg-[#101010]"
            : "border-white/15 bg-[#080808]/80 hover:border-white/30 hover:bg-white/5"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] || null)}
        />

        {selectedFile ? (
          <div className="relative flex items-center gap-4 w-full">
            {previewUrl ? (
              <div className="relative h-16 w-16 rounded-xl overflow-hidden border border-[#C6FF00]/40 shrink-0">
                <Image
                  src={previewUrl}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="h-16 w-16 rounded-xl bg-[#C6FF00]/10 border border-[#C6FF00]/40 flex items-center justify-center shrink-0 text-[#C6FF00]">
                <FileCheck className="h-8 w-8" />
              </div>
            )}

            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">
                {selectedFile.name}
              </p>
              <p className="text-xs text-[#A0A0A0]">
                {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <p className="text-[11px] text-[#C6FF00] font-semibold mt-0.5 flex items-center gap-1">
                <FileCheck className="h-3 w-3" /> File ready for submission
              </p>
            </div>

            <button
              type="button"
              onClick={handleRemove}
              className="p-2 rounded-full bg-white/10 hover:bg-red-500/20 text-[#A0A0A0] hover:text-red-400 transition-colors"
              title="Remove File"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-full bg-[#C6FF00]/10 border border-[#C6FF00]/30 flex items-center justify-center text-[#C6FF00] group-hover:scale-110 transition-transform">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">
                Drag & drop file here or{" "}
                <span className="text-[#C6FF00] underline">browse</span>
              </p>
              <p className="text-[11px] text-[#A0A0A0] mt-1">{sublabel}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
