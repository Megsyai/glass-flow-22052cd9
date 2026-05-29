import { cn } from "@/lib/utils"
import * as React from "react"

export interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardHeader = ({ className, children }: CardProps) => {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)}>
      {children}
    </div>
  )
}

export const CardTitle = ({ className, children }: CardProps) => {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold leading-none tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  )
}

export const CardDescription = ({ className, children }: CardProps) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      {children}
    </p>
  )
}

export const CardContent = ({ className, children }: CardProps) => {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>
}

export const CardFooter = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn("flex items-center p-6 pt-0", className)}
    >
      {children}
    </div>
  )
}