import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent transition-all outline-none select-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[#0066cc] dark:bg-[#2997ff] text-white focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2",
        outline: "bg-transparent text-[#0066cc] dark:text-[#2997ff] border-[#0066cc] dark:border-[#2997ff] focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2",
        secondary: "bg-transparent text-[#0066cc] dark:text-[#2997ff] border-[#0066cc] dark:border-[#2997ff] focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2",
        ghost: "bg-transparent text-[#0066cc] dark:text-[#2997ff] hover:bg-[#f5f5f7] dark:hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2",
        destructive: "bg-[#ff3b30] dark:bg-red-600 text-white focus-visible:ring-2 focus-visible:ring-[#ff3b30] focus-visible:ring-offset-2",
        utility: "bg-[#1d1d1f] dark:bg-zinc-800 text-white focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2",
        pearl: "bg-[#fafafc] dark:bg-zinc-900 text-[#333333] dark:text-zinc-300 border-[3px] border-[#f0f0f0] dark:border-zinc-800 focus-visible:ring-2 focus-visible:ring-[#0071e3] focus-visible:ring-offset-2",
      },
      size: {
        default: "h-auto px-[22px] py-[11px] rounded-full text-[17px] font-normal",
        sm: "h-auto px-[15px] py-[8px] rounded-[8px] text-[14px] font-normal tracking-[-0.224px]",
        pearl: "h-auto px-[14px] py-[8px] rounded-[11px] text-[14px] font-normal",
        lg: "h-auto px-[28px] py-[14px] rounded-full text-[18px] font-light",
        icon: "size-[44px] rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
