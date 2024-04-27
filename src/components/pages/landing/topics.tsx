import Topic from "@/components/common/topic";
import Typography from "@/components/common/typography";
import { Button } from "@/components/ui/button";

const topics = ["Gardening", "Makeover", "Paper", "Furniture", "Tech", "Camper", "Van", "Craft", "Wood"];

export default function Topics() {
  return (
    <section className="flex flex-col gap-8 w-1/3 flex-grow h-full">
      <Typography variant="h1" className="mt-6">
        Topics
      </Typography>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          {topics.slice(0, 4).map((topic, index) => {
            return <Topic key={index} title={topic} />;
          })}
        </div>
        <div className="flex flex-row gap-2">
          {topics.slice(4).map((topic, index) => {
            return <Topic key={index} title={topic} />;
          })}
        </div>
      </div>
      <Button variant="outline" size="sm" className="w-fit">
        See all topics
      </Button>
    </section>
  );
}
