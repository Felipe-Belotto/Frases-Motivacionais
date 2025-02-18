import { ComponentPropsWithRef, forwardRef } from "react";
import { cn } from "../lib/util";

type ButtonProps = ComponentPropsWithRef<"button">

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button ({children,className, ...props}: ButtonProps, ref) {

  return (
    <button
    {...props}
    ref={ref}
    className={cn("w-full px-4 py-2 font-bold text-white bg-gray-800 border-2 border-white rounded bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50", className)}
  >
    {children}
  </button>
  )
 
}
)

export default Button

