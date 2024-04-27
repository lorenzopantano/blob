import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "xs" | "base" | "lg";
  className?: string;
}

export default function Typography({ variant, className, children }: TypographyProps) {
  switch (variant) {
    case "lg":
      return <h1 className={cn("text-7xl font-serif", className)}>{children}</h1>;
    case "h1":
      return <h1 className={cn("font-serif text-4xl", className)}>{children}</h1>;
    case "h2":
      return <h2 className={cn("font-serif text-3xl", className)}>{children}</h2>;
    case "h3":
      return <h3 className={cn("font-serif text-2xl", className)}>{children}</h3>;
    case "h4":
      return <h4 className={cn("font-serif text-xl", className)}>{children}</h4>;
    case "h5":
      return <h5 className={cn("text-xl font-semibold", className)}>{children}</h5>;
    case "h6":
      return <h6 className={cn("text-lg", className)}>{children}</h6>;
    case "base":
      return <p className={cn("text-base", className)}>{children}</p>;
    case "p":
      return <p className={cn("text-sm", className)}>{children}</p>;
    case "xs":
      return <p className={cn("text-xs", className)}>{children}</p>;
    default:
      break;
  }
}
