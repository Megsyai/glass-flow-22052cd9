import { cn } from "@/lib/utils"
import * as React from "react"

export interface SheetProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Sheet = ({ children, className, asChild }: SheetProps) => {
  const Comp = asChild ? Slot : "div"
  return (
    <Comp className={cn("relative h-full w-full", className)}>
      {children}
    </Comp>
  )
}