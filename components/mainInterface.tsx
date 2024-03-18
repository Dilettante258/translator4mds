"use client"

import TextBox from "@/components/textBox";
import {Panel} from "@/components/panel";
import {ShowMarkdown} from "@/components/markdown";
import text from "@/test/lorem";
import * as React from "react";
import {useGlobalStore} from "@/components/GlobalStore";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import {CodeBlock} from "@/components/ui/codeblock";


const MainInterface = () => {
  const { translator: { docsText} } = useGlobalStore();

  return (
    <>
      <div>
        <div className="grid w-full gap-1.5">
          <TextBox/>
          <Panel />
        </div>
      </div>
      <div className='border-2 rounded-md border-slate-200 box-content p-4 break-words relative'>
        <ShowMarkdown renderer={docsText||text} />
      </div>
    </>
  )
}

export default MainInterface;