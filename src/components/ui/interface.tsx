import { Slot } from "@radix-ui/react-slot"
import { clsx } from "clsx"
import * as React from "react"

export interface InterfaceProps {
  children: React.ReactNode
  className?: string
  asChild?: boolean
}

export const Interface = ({ children, asChild, className }: InterfaceProps) => {
  const Comp = asChild ? Slot : "div"
  return <Comp className={clsx(className)}>{children}</Comp>
}