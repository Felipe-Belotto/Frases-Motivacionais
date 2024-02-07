import { ComponentPropsWithRef, forwardRef } from "react";

type ButtonProps = ComponentPropsWithRef<"button">

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button ({children, ...props}: ButtonProps, ref) {

  return (
    <button
    {...props}
    ref={ref}
    className=" px-4 py-2 font-bold text-white bg-transparent bg-gray-800 border-2 border-white rounded bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
  >
    {children}
  </button>
  )
 
}
)

export default Button

