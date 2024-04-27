import Typography from "@/components/common/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface StoryAuthorProps {
  author: string;
}

export default function StoryAuthor({ author }: StoryAuthorProps) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar className="w-8 h-8">
        <AvatarImage src="/assets/hero-image.jpg" />
        <AvatarFallback>{author[0]}</AvatarFallback>
      </Avatar>
      <Typography variant="p">{author}</Typography>
    </div>
  );
}
