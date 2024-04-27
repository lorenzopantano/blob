import Typography from "@/components/common/typography";
import Icon from "@/styles/icons";
import { icons } from "lucide-react";

const featuresList: FeatureListItemProps[] = [
  {
    title: "Inspiring Projects",
    description:
      "Explore a diverse range of craft projects to suit every skill level and interest. From knitting and crocheting to sewing and painting, we've got something for everyone.",
    icon: "Sprout",
  },
  {
    title: "Step-by-Step Tutorials",
    description:
      "Our easy-to-follow tutorials guide you through each project with clear instructions and detailed photos. No matter your experience level.",
    icon: "Route",
  },
  {
    title: "Creative Community",
    description:
      "Join our vibrant community of craft enthusiasts from around the world. Share your own projects, connect with fellow makers, and find endless inspiration in our supportive and welcoming community.",
    icon: "Sparkles",
  },
  {
    title: "Seasonal Ideas",
    description:
      "Discover fun and festive craft ideas for every season and holiday. Whether you're crafting handmade gifts for loved ones or decorating your home for the holidays, we've got you covered with creative inspiration all year round.",
    icon: "Trees",
  },
];

interface FeatureListItemProps {
  title: string;
  description: string;
  icon: keyof typeof icons;
}

export default function FeatureList() {
  return (
    <section className="grid grid-cols-2 gap-x-10 gap-y-10">
      {featuresList.map((feature, index) => (
        <FeatureListItem key={index} {...feature} />
      ))}
    </section>
  );
}

export function FeatureListItem({ title, description, icon }: FeatureListItemProps) {
  return (
    <div className="flex flex-row gap-6 items-center">
      <div>
        <Icon name={icon} className="w-10 h-10 text-primary" />
      </div>
      <div className="flex flex-col gap-2">
        <Typography variant="h5">{title}</Typography>
        <Typography variant="base" className="font-serif">
          {description}
        </Typography>
      </div>
    </div>
  );
}
