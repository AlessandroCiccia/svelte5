import { type VariantProps, tv } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import Root from "./button.svelte";

const buttonVariants = tv({
  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-button text-foreground hover:bg-button-hover",
      defaultDisabled: "bg-button-primary-disabled/50 text-foreground",
      defaultmdsmDisabled: "bg-button-md-sm-disabled/50 text-foreground",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      warning: "bg-warning text-warning-foreground hover:bg-warning/90",
      secondary:
        "border-secondary text-secondary border hover:bg-button-hover hover:text-foreground",
      secondaryDisabled:
        "border-button-secondary-disabled/50 text-button-secondary-disabled/50 border",
      mdSecondaryDisabled:
        "border-button-md-secondary-disabled/50 text-button-secondary-disabled/50 border",
      link: "text-button underline-offset-4 hover:underline",
    },
    size: {
      default: "h-[48px] w-[163px] rounded-[42px] px-[32px] py-[12px]",
      md: "h-[44px] w-[142.5px] rounded-[34px] px-[24px] py-[12px]",
      sm: "h-[40px] w-[131px] rounded-[48px] px-[20px] py-[10px]",
      link: "h-[24px] w-[91px] text-md",
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
