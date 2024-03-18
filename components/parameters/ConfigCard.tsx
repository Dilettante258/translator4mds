"use client"

import * as React from "react"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { Slider } from "@/components/ui/slider"

import { LanguagesCombobox, SelectEngine} from "@/components/parameters/selectEngine";
import {Textarea} from "@/components/ui/textarea";
import { ArrowsLeftRight } from "@phosphor-icons/react";
import {useGlobalStore} from "@/components/GlobalStore";
import {createRef, useRef} from "react";
import {ref} from "@vue/reactivity";
import { Models} from "@/lib/gptModel"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

export function ConfigCard() {
  console.log('rendered: ConfigCard');

  const {
    CommonConfigValues: { retainAnnotationsEnabled, fromLang,toLang, TranslateModel, groupParam },
    setCommonConfigValues,
  } = useGlobalStore();

  console.log(retainAnnotationsEnabled, fromLang,toLang, TranslateModel, groupParam)

  const [from, setFrom] = React.useState(fromLang);
  const [to, setTo] = React.useState(toLang);
  const [retainAnnotationsEnabled_, setRetainAnnotationsEnabled] = React.useState(retainAnnotationsEnabled);
  const [groupParam_, setGroupParam] = React.useState(groupParam);
  const [model, setModel] = React.useState(TranslateModel);

  function exchangeLang() {
    let temp = from;
    setFrom(to);
    setTo(temp);
    console.log('from:', from, 'to:', to);
  }


  function updateCommonConfig() {
    setCommonConfigValues((prev) => {
      return {
        ...prev,
        fromLang: from,
        toLang: to,
        retainAnnotationsEnabled: retainAnnotationsEnabled_,
        TranslateModel: model,
      }
    });

  }


  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>行为</CardTitle>
        <CardDescription>
          控制翻译时的一些行为。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">


        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex items-center space-x-2 md:basis-1/2">
            <Switch id="retain-annotations"
                    defaultChecked={retainAnnotationsEnabled}
                    onCheckedChange={(v) => {
                      setRetainAnnotationsEnabled(v);
                    }}
                    disabled
            />
            <Label htmlFor="retain-annotations">
              以注释方式保留原文
              <p className="text-sm text-muted-foreground">&lt;-- original text --&gt;</p>
            </Label>
          </div>
          <div className="grid items-center gap-1.5">
            <Input id="file" type="file" className="md:max-w-48" disabled/>
          </div>
        </div>

        <h4>语言</h4>
        <div className="flex place-content-center place-self-center gap-x-2">
          <LanguagesCombobox rubric="源语言" value={from} setValue={setFrom}/>
          <button onClick={exchangeLang}><ArrowsLeftRight size={26}/></button>
          <LanguagesCombobox rubric="目标语言" value={to} setValue={setTo}/>
        </div>

        <h4>翻译引擎设定</h4>
        <div className="space-y-1">
          <Label htmlFor="translation-engine">翻译服务提供商</Label>
          <div id="translation-engine" className="max-w-full md:w-[280px]">
            <Select
              defaultValue={model}
              onValueChange={(v:Models)=>setModel(v)}
            >
              <SelectTrigger>
                <SelectValue placeholder="选择一个引擎" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>人工智能</SelectLabel>
                  <SelectItem value="gpt">ChatGPT</SelectItem>
                  <SelectItem value="gemini" disabled>Gemini-Pro</SelectItem>
                  <SelectItem value="kimi" disabled>KimiChat</SelectItem>
                  {/*<SelectItem value="yiyan" disabled>文言一心</SelectItem>*/}
                  {/*<SelectItem value="local" disabled>本地大语言模型</SelectItem>*/}
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>传统翻译模型</SelectLabel>
                  <SelectItem value="azure">微软Azure翻译</SelectItem>
                  <SelectItem value="deepl" disabled>DeepL</SelectItem>
                  <SelectItem value="baidu" disabled>百度翻译</SelectItem>
                  {/*<SelectItem value="youdao" disabled>有道翻译</SelectItem>*/}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

      </CardContent>
      <CardFooter>
        <Button
          onClick={updateCommonConfig}
        >
          Save changes
        </Button>
      </CardFooter>
    </Card>
  )
}

export function AiConfigCard() {
  console.log('rendered: AiConfigCard');
  const {
    AiConfigValues: {openaiApiKey, openaiApiUrl, prompt, thirdPartyApiEnabled, temperature},
    setAiConfigValues
  } = useGlobalStore();

  const [thirdPartyApiEnabled_, setThirdPartyApiEnabled] = React.useState(thirdPartyApiEnabled);
  const [SliderValue, setSliderValue] = React.useState(temperature);

  const textareaRef = React.createRef<HTMLTextAreaElement>();
  const endpointRef = React.createRef<HTMLInputElement>();
  const keyRef = React.createRef<HTMLInputElement>();

  const handelThirdPartyApiEnabled = (checked:boolean) => {
    setThirdPartyApiEnabled(checked);
  }

  const updateAiConfig = () => {
    setAiConfigValues((prev) => {
      return {
        ...prev,
        openaiApiUrl: endpointRef.current?.value as string,
        openaiApiKey: keyRef.current?.value as string,
        prompt: textareaRef.current?.value as string,
        thirdPartyApiEnabled: thirdPartyApiEnabled_,
        temperatureParam: SliderValue,
      }
    });
  }
  console.log(openaiApiKey, openaiApiUrl, prompt, thirdPartyApiEnabled, temperature)





  // @ts-ignore
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>参数</CardTitle>
        <CardDescription>
          AI参数设定。
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="grid w-full gap-1.5">
          <Label htmlFor="prompt">Prompt</Label>
          <Textarea
            placeholder="Type your prompt here."
            id="prompt"
            className="h-24"
            defaultValue={prompt}
            ref={textareaRef}
            onChange={()=>console.log(textareaRef.current?.value)}
          />
        </div>
        <div className="space-y-1 flex flex-col">
          <Label htmlFor="Temperature">Temperature</Label>
          <div id="Temperature">
            <Slider
              defaultValue={[SliderValue]}
              value={[SliderValue]}
              min={0}
              max={1}
              step={0.01}
              className="w-[60%]"
              onValueChange={([v])=>{setSliderValue(v)}}
            />
          </div>
        </div>
        <div className="space-y-1">
          <Label htmlFor="api-endpoint">API Endpoint（第三方）</Label>
          <div id="api-endpoint" className="max-w-full flex flex-row items-center space-x-2">
            <div className="basis-auto flex items-center space-x-2">
              <Switch
                id="thirdPartyApi"
                checked={thirdPartyApiEnabled_}
                onCheckedChange={handelThirdPartyApiEnabled}
              />
              <Label htmlFor="thirdPartyApi" className="text-nowrap max-md:hidden">
                启用API
              </Label>
            </div>
            <Input
              id="api-endpoint"
              placeholder="https://api.openai.com"
              className="md:max-w-md"
              disabled={!thirdPartyApiEnabled_}
              // defaultValue={openaiApiUrl}
              ref={endpointRef}
              onChange={() => console.log(endpointRef.current?.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="api-key">API-key</Label>
            <Input
              id="api-key"
              ref={keyRef}
              // defaultValue={openaiApiKey}
              placeholder="api-key"/>
          </div>

        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={updateAiConfig}
        >
          Save changes
        </Button>
      </CardFooter>
    </Card>
  )
}

