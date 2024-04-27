"use client";

import BlobLogo from "@/components/common/blob-logo";
import Typography from "@/components/common/typography";
import NavigationItem from "@/components/features/navigation/navigation-item";
import { Button } from "@/components/ui/button";

export default function NavigationBar() {
  return (
    <nav className="flex flex-row justify-between items-center">
      <BlobLogo icon />
      <div className="flex flex-row gap-16">
        <NavigationItem>Our Story</NavigationItem>
        <NavigationItem>Membership</NavigationItem>
        <NavigationItem>Write</NavigationItem>
      </div>
      <Button variant="default" size="extra">
        Get Started
      </Button>
    </nav>
  );
}
