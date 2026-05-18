import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-[44px] w-full min-w-0 rounded-full border border-input dark:border-zinc-700 bg-white dark:bg-zinc-900 px-[20px] py-[12px] text-[17px] text-foreground dark:text-zinc-50 transition-colors outline-none placeholder:text-muted-foreground dark:placeholder:text-zinc-500 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
