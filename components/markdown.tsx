import { FC, memo } from 'react'
import ReactMarkdown, { Options } from 'react-markdown'
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { docco,dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as React from "react";
import {CheckCircle, Copy} from "@phosphor-icons/react";
import {useCopyToClipboard} from "@/lib/hooks/use-copy-to-clipboard";
import {toast} from "@/components/ui/use-toast";
import rehypeRaw from 'rehype-raw'


const MemoizedReactMarkdown: FC<Options> = memo(
  ReactMarkdown,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
)


export function ShowMarkdown({ renderer }: { renderer: string})  {
  console.log('rendered: ShowMarkdown');

  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 })

  const onCopy = () => {
    if (isCopied) return
    try {
      copyToClipboard(renderer);
      toast({
        title: "Copied to clipboard!",
      });
    } catch {
      toast({
        title: "Permission to clipboard denied.",
      });
  }}

  return (
    <>
      <button
        onClick={onCopy}
        className="absolute top-4 right-4 rounded-md p-2 opacity-80 hover:opacity-95 bg-gray-100 transition-colors duration-200 ring-1 ring-gray-300"
      >
        {isCopied ? <CheckCircle size={32} /> : <Copy size={32}/>}
      </button>
      <MemoizedReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex,rehypeRaw]}
        components={{
          code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            return match ? (
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                showLineNumbers
                style={docco}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>

            ) : (
              <code {...rest} className={className || 'inlinecode'}>
                {children}
              </code>
            )
          }
        }}
      >
        {renderer}
      </MemoizedReactMarkdown>

    </>


  )
}