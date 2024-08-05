import cn from "@/lib/cn";
import { HtmlHTMLAttributes } from "react";

const PrimaryButton = ({
  className = '',
  ...props
}: HtmlHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      className={cn(
        "w-full py-1 px-3 rounded-md ezy-transition hover:bg-lime-300",
        className
      )}
    />
  );
};

export default PrimaryButton;
