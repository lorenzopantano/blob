import Typography from "@/components/common/typography";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JoinNow() {
  return (
    <div className="aspect-square rounded-xxl relative">
      <div className="absolute z-10 inset-0 bg-primary dark:bg-background opacity-30 rounded-xxl h-full" />
      <Image src="/assets/footer-image.jpg" layout="fill" objectFit="cover" alt="Join Now" className="rounded-xxl" />
      <div className="absolute inset-0 w-full h-full z-20 flex flex-col justify-center items-center">
        <Typography variant="lg" className="text-accent dark:text-primary">
          Blob.
        </Typography>
        <Typography variant="h3" className="text-accent dark:text-primary -mt-4 mb-4">
          diy
        </Typography>
        <Button variant="default" size="extra">
          Join Now
        </Button>
      </div>
    </div>
  );
}
