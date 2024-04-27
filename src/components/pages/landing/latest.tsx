import Typography from "@/components/common/typography";
import Story from "@/components/features/stories/story";
import { dummyStories } from "@/lib/dummy";

export default function Latest() {
  return (
    <section className="flex flex-col h-full w-full">
      <Typography variant="lg">Latest</Typography>
      <div className="bg-card rounded-xxl p-12 flex flex-col h-full justify-between gap-4">
        {dummyStories.map((story, index) => {
          return <Story key={index} size="medium" story={story} />;
        })}
      </div>
    </section>
  );
}
