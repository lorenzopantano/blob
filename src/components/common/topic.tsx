import { Badge } from "@/components/ui/badge";

interface TopicProps {
  title: string;
}

export default function Topic({ title }: TopicProps) {
  return (
    <Badge className="w-fit hover:bg-primary hover:text-primary-foreground hover:cursor-pointer px-5 py-3 bg-gray-200 text-muted-foreground">
      {title}
    </Badge>
  );
}
