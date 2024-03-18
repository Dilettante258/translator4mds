'use client'

import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import azurePost from "@/lib/api/AzurePost";

import * as React from "react";

import type { ChangeEventHandler } from "react";


import lorem from "@/test/lorem";
import {useGlobalStore} from "@/components/GlobalStore";
import {ToastAction} from "@/components/ui/toast";
import {toast} from "@/components/ui/use-toast";
import { Translate, ArrowRight } from "@phosphor-icons/react";
import axios from "axios";
import {from} from "solid-js";
import * as async_hooks from "async_hooks";

type HandlerFactory = (
  type: "content"
) => ChangeEventHandler<HTMLTextAreaElement>;





const TextBox = () => {
  console.log('rendered: TextBox');
  const {
    AiConfigValues: { openaiApiKey, currentModel, temperature,prompt },
    CommonConfigValues: {TranslateModel,fromLang,toLang, groupParam },
    translator: {
      lastTranslateData,
      setLastTranslateData,
      docsText,
      setDocsText,
      translatedText,
      setTranslatedText,
    },
  } = useGlobalStore();



  const [content, setContent] = React.useState<string>("");

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setContent(e.target.value);
      console.log(content);
  };

  function splitMarkdown(md: string): string[] {
    let chunks = md.split(/(```[\s\S]*?```)/);

    for (let i = 0; i < chunks.length; i++) {
      let lines = chunks[i].split('\n');
      if (lines.length > 80 && !chunks[i].startsWith('```')) {
        let firstHalf = lines.slice(0, 80).join('\n');
        let secondHalf = lines.slice(80).join('\n');
        chunks.splice(i, 1, firstHalf, secondHalf);
        i++;
      }
    }
    return chunks;
  }




  async function handelClick (event:React.MouseEvent<HTMLButtonElement>) {

    event.preventDefault();
    if(content === "") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "翻译内容不能为空",
      });
      return;
    }
    let res: string;
    toast({
      title: "翻译开始了",
      description: "请求已发送，正在等待返回结果",
    });
    res = await translate(content).then();
    // setDocsText(res);
    console.log('docs:',docsText);
    return;
  }

  function replaceString(input: string): string {
    const regex1 = /\[([^\]]+)\]（([^）]+)）/g;
    const replacement1 = '[\$1](\$2)';
    const regex2 = /'''/g;
    const replacement2 = '```';

    let replacedString = input.replace(regex1, replacement1);
    replacedString = replacedString.replace(regex2, replacement2);

    return replacedString;
  }




  async function translate(str: string) {
    let chunks = splitMarkdown(str);
    let translatedChunks: string[] = [];
    const delay = 1001; // 设置延迟时间为1秒

    switch (TranslateModel) {

      case "gpt":
        const gptTranslate = async (docs:string) => {
          let res:string
          return await axios.post('./api/chat', {
            messages: [
              { role: 'system', content: prompt },
              { role: 'user', content: docs },
            ],
          });

        }

        const gptTranslateChunk = async (chunk:string) => {
          if (chunk.startsWith('```')) {
            return chunk;
          } else {
            return await gptTranslate(chunk);
          }
        };

        const translateWithDelay = async () => {
          for (let i = 0; i < chunks.length; i++) {
            console.log("i",chunks[i])
            const chunk = chunks[i];
            const response = await gptTranslateChunk(chunk);
            // @ts-ignore
            translatedChunks.push(response.data);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
          // 将所有的分块连接成一个字符串，并返回这个字符串
          let res5 = translatedChunks.join('');
          console.log('res5:',res5)
          return res5;
        };

        let res1 = await translateWithDelay();

        res1 = replaceString(res1)
        console.log('res:',res1);
        setDocsText(res1);
        break;
      case "azure":

        const translateChunk = async (chunk:string) => {
          if (chunk.startsWith('```')) {
            return chunk;
          } else {
            return await azurePost(chunk, fromLang, toLang);
          }
        };

        const translateWithDelay2 = async () => {
          for (let i = 0; i < chunks.length; i++) {
            const chunk = chunks[i];
            const response = await translateChunk(chunk);
            translatedChunks.push(response);
            await new Promise(resolve => setTimeout(resolve, delay));
          }
          // 将所有的分块连接成一个字符串，并返回这个字符串
          let res = translatedChunks.join('');
          return res;
        };

        let res2 = await translateWithDelay2();

        res2 = replaceString(res2)
        console.log('res:',res2);
        setDocsText(res2);
        break;
    }
  }


  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="content" className="text-lg flex place-content-center items-center select-none"><Translate size={24} />需要翻译的内容</Label>
      <Textarea
        value={content}
        onChange={handleContentChange}
        placeholder="paste your docs here."
        id="content"
      />
      <Button onClick={e =>  handelClick(e)}>启动翻译<ArrowRight size={24} /></Button>
    </div>
  )
};

export default TextBox;