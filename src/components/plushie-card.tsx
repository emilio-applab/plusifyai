"use client";

import Image from "next/image";
import { Download, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { GalleryItem } from "@/lib/mock-data";

interface PlushieCardProps {
  item: GalleryItem;
}

export function PlushieCard({ item }: PlushieCardProps) {
  const formattedDate = new Date(item.createdAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const handleDownload = () =>
    toast.info("Download coming soon — backend not connected yet.");

  const handleDelete = () =>
    toast.info("Delete coming soon — backend not connected yet.");

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={item.outputImageUrl}
            alt={`${item.style} plushie generated on ${formattedDate}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
        <div className="p-3 flex items-center justify-between">
          <Badge variant="secondary">{item.style}</Badge>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 gap-2">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={handleDownload}
        >
          <Download className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
          Download
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleDelete}
          aria-label="Delete plushie"
        >
          <Trash2 className="h-3.5 w-3.5 text-destructive" aria-hidden="true" />
        </Button>
      </CardFooter>
    </Card>
  );
}
