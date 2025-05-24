import * as React from "react"

export default function ButtonComp({
  text,
  textColor = "text-white",
  bgColor = "bg-blue-600",
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center px-4 py-2 rounded shadow font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${bgColor} ${textColor} hover:brightness-90 hover:-translate-y-0.5 active:scale-95`}
      {...props}
    >
      {text}
    </button>
  )
}