import Typography from "@/components/common/typography";
import Story from "@/components/features/stories/story";
import Icon from "@/styles/icons";

import { dummyStories } from "@/lib/dummy";

export default function TrendingStories() {
  return (
    <section className="relative rounded-xxl bg-card">
      <Icon name="Sprout" className="absolute top-0 right-0 float-right w-80 h-80 stroke-[0.75px] text-background" />
      <div className="p-12 bg-transparent rounded-xxl relative">
        <Typography variant="h1" className="font-normal mb-8">
          Trending Stories
        </Typography>
        <div className="w-full grid grid-cols-2 gap-10 ">
          <Story size="medium" story={dummyStories[0]} />
          <Story size="medium" story={dummyStories[1]} />
          <Story size="medium" story={dummyStories[2]} />
          <Story size="medium" story={dummyStories[3]} />
        </div>
      </div>
    </section>
  );
}
