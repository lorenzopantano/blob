import Typography from "@/components/common/typography";
import Link from "next/link";

interface NavigationItemProps {
  children: React.ReactNode;
  route?: string;
  className?: string;
}

export default function NavigationItem({ children, route, className }: NavigationItemProps) {
  return (
    <Link href="#">
      <Typography variant="p" className="font-serif text-lg hover:underline hover:cursor-pointer">
        {children}
      </Typography>
    </Link>
  );
}
