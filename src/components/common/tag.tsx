import { Badge } from "@/components/ui/badge";

interface TagProps {
  tag: string;
  size: "small" | "medium" | "large";
}

export default function Tag({ tag, size }: TagProps) {
  return (
    <div className="font-serif px-2 py-1 bg-success rounded-full">
      <p className="text-xs">{tag}</p>
    </div>
  );
}
