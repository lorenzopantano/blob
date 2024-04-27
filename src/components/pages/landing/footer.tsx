import Typography from "@/components/common/typography";

const footer = ["Help", "Status", "About", "Careers", "Privacy", "Terms", "Contact", "Blog", "Security"];

export default function Footer() {
  return (
    <div className="p-12 -mb-9 text-center flex flex-row justify-evenly w-screen items-center bg-primary">
      {footer.map((item, index) => {
        return (
          <Typography key={index} variant="p" className="text-background hover:cursor-pointer hover:text-accent">
            {item}
          </Typography>
        );
      })}
    </div>
  );
}
