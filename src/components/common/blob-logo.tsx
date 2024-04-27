import { cn } from "@/lib/utils";
import Icon from "@/styles/icons";

interface BlobLogoProps {
  icon?: boolean;
  classNameContainer?: string;
  classNameText?: string;
  classNameIcon?: string;
}

export default function BlobLogo({ icon, classNameContainer, classNameText, classNameIcon }: BlobLogoProps) {
  return (
    <div className={cn("flex flex-row gap-2 items-center", classNameContainer)}>
      <p className={cn("text-3xl font-semibold", classNameText)}>Blob.</p>
      {icon && <Icon name="TentTree" size={32} className={classNameIcon} />}
    </div>
  );
}
