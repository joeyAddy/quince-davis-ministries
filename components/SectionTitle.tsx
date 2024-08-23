import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  subTitle,
  className,
  wrap = false,
  centered,
}: {
  title: string;
  subTitle: string;
  className?: string; // optional class name for custom styles
  wrap?: boolean; // optional flag to wrap text
  centered?: boolean; // optional flag to center text
}) => {
  return (
    <div
      className={cn(
        "w-full flex flex-col gap-y-2 items-center text-center section-title",
        className
      )}
    >
      <p className="uppercase text-green-500 font-semibold max-lg:text-sm">
        {title}
      </p>
      <h2
        className={cn(
          "text-2xl lg:text-4xl font-bold whitespace-nowrap",
          wrap && `!whitespace-normal ${centered ? "text-center" : "text-left"}`
        )}
      >
        {subTitle}
      </h2>
      <div className="h-1 bg-green-500 w-20 mt-3" />
    </div>
  );
};

export default SectionTitle;
