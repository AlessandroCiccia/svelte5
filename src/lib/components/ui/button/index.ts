import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
  base: "ring-offset-background font-medium focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary-accent text-foreground hover:bg-[#2755FC]",
      secondary:
        "border-primary-accent text-primary-accent border hover:bg-[#2755FC] hover:text-foreground disabled:text-neutral-800 disabled:border-neutral-800",
      link: "text-primary-accent underline-offset-4 hover:underline",
    },
    size: {
      default: "h-[48px] text-lg w-[163px] rounded-[42px] px-[32px] py-[12px]",
      md: "h-[44px] text-md md:text-desktop-md xl:text-desktop-xl w-[142.5px] rounded-[34px] px-[24px] py-[12px]",
      sm: "h-[40px] text-sm w-[131px] rounded-[48px] px-[20px] py-[10px]",
      link: "h-[24px] text-lg w-[91px] text-lg",
      linksm: "h-[24px] w-[86.5px] text-sm",
      linkxs: "h-[24px] w-[67px] text-xs",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
  variant?: Variant;
  size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
  Root,
  type Props,
  type Events,
  //
  Root as Button,
  type Props as ButtonProps,
  type Events as ButtonEvents,
  buttonVariants,
};
