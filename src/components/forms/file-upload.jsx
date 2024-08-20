"use client";

import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

export const FileUpload = ({ onRemove, value, onChange }) => {
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length) {
      const fileArray = Array.from(files).map((file) => ({
        url: URL.createObjectURL(file),
        name: file.name,
        file: file
      }));
      onChange(fileArray);
    }
  };

  return (
    <>
      {value ? (
        <div className="pb-5 flex flex-wrap gap-4">
          {value?.map((item, index) => (
            <div key={index} className="relative w-[200px] h-[200px]">
              <Button
                type="button"
                className="z-10 absolute -top-3 -right-3 hover:bg-destructive"
                onClick={async () => {
                  onRemove(item.url);
                }}
                variant="destructive"
                size="icon"
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                className="rounded-md object-cover"
                alt={item.name ?? "Image"}
                src={item.url}
              />
            </div>
          ))}
        </div>
      ) : null}
      <Input type="file" multiple onChange={handleFileChange} />
    </>
  );
};
