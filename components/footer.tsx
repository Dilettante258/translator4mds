import React from 'react'

export function Footer({ className, ...props }: React.ComponentProps<'footer'>) {
  return (
    <footer className="text-center text-gray-500 text-sm mt-8" {...props}>
      © 2024 {" "}
      <a href="https://github.com/Dilettante258/Translator4mds" className="hover:underline">Translator4mds</a>
      {" "}
      made by
      {" "}
      <a href="https://github.com/Dilettante258" className="hover:underline">Dilettante258</a>
    </footer>
  )
}
