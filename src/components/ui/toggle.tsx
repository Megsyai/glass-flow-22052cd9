import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import * as React from "react"

export interface ToggleProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Toggle = ({ children, className, asChild }: ToggleProps) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp className={clsx(className)}>
      {children}
    </Comp>
  )
}