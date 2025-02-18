import { PropsWithChildren } from "react"

export const Card = ({children}: PropsWithChildren) => {
  return (
  <article className="max-w-4xl p-4 mx-auto mt-10 bg-white border-2 border-gray-200 shadow-2xl rounded-2xl bg-opacity-90">
    {children}
  </article>
  )
}
 