import { cn } from "@/lib/utils"
import * as React from "react"

export interface DialogProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Dialog = ({ children, className, asChild }: DialogProps) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp className={cn("relative", className)}>
      {children}
    </Comp>
  )
}