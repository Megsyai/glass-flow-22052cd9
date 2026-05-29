import { cn } from "@/lib/utils"
import * as React from "react"

export interface TooltipProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Tooltip = ({ children, className, asChild }: TooltipProps) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp className={cn("relative", className)}>
      {children}
    </Comp>
  )
}