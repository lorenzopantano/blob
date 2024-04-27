import Tag from "@/components/common/tag";
import Typography from "@/components/common/typography";
import StoryAuthor from "@/components/features/stories/story-author";
import Icon from "@/styles/icons";
import Image from "next/image";

interface StoryProps {
  story: StoryComponentProps;
  image?: string;
  membersOnly?: boolean;
  size: "small" | "medium" | "large";
}

export default function Story(props: StoryProps) {
  const { size } = props;

  switch (size) {
    case "small":
      return <StorySmall {...props} />;
    case "medium":
      return <StoryMedium {...props} />;
    case "large":
      return <StoryLarge {...props} />;
    default:
      return null;
  }
}

export function StorySmall(props: StoryProps) {
  return <div>To be implemented</div>;
}

export function StoryMedium(props: StoryProps) {
  return (
    <div className="w-full h-full flex flex-row gap-4 items-start">
      <div className="flex flex-col gap-2 w-full h-full justify-start">
        <StoryAuthor author={props.story.author} />
        <Typography variant="h5" className="line-clamp-2">
          {props.story.title}
        </Typography>
        <Typography variant="p" className="text-muted">
          {props.story.description}
        </Typography>
        <div className="flex flex-row gap-2 items-center">
          <Typography variant="xs" className="text-muted">
            {props.story.date}
          </Typography>
          <Icon name="Dot" className="w-3 h-3 text-muted" />
          <Typography variant="xs" className="text-muted">
            {props.story.readMinutes} min read
          </Typography>
          <Icon name="Dot" className="w-3 h-3 text-muted" />
          <Tag tag={props.story.tags[0]} size="small" />
          <Tag tag={props.story.tags[1]} size="small" />
        </div>
      </div>
      <div className="relative w-[200px] h-[150px]">
        <Image src={props.image || "/assets/footer-image.jpg"} alt="Story Image" className="rounded-xl" fill />
      </div>
    </div>
  );
}

export function StoryLarge(props: StoryProps) {
  return <div>To be implemented</div>;
}
