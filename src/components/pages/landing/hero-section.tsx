import Typography from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[500px] rounded-full">
      <div className="absolute inset-0 w-full h-full rounded-xxl flex flex-col items-start justify-center px-16 gap-8 z-20">
        <Typography variant="h1" className="text-7xl text-accent dark:text-primary">
          Stay Curious.
        </Typography>
        <Typography variant="h3" className="-mt-9 text-accent dark:text-primary">
          Discover stories, thinking and expertise from DIY masters.
        </Typography>
        <Button variant="default" size="extra">
          Start Reading
        </Button>
      </div>
      <div className="absolute inset-0 bg-primary dark:bg-background rounded-xxl opacity-30 dark:opacity-60 z-10" />
      <Image
        src="/assets/hero-image.jpg"
        layout="fill"
        objectFit="cover"
        alt="Hero Image"
        className="-scale-x-100 rounded-xxl top-0 left-0"
      />
    </section>
  );
}
