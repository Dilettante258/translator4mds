"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {languages, Models} from "@/lib/gptModel"
import {FunctionComponent} from "react";
import {InputProps} from "@/components/ui/input";

export const LanguagesCombobox =  ({ rubric, value, setValue }: { rubric:string, value:string, setValue:React.Dispatch<React.SetStateAction<string>> }) => {
  const [open, setOpen] = React.useState(false)
  // const [value, setValue] = React.useState("")

  // function setValue(newValue: string) {
  //   value = newValue;
  // }

  function handelSelect(currentValue: string) {
    setValue(currentValue === value ? "" : currentValue)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? languages.find((language) => language.value === value)?.label
            : rubric }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 h-[400px]">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup className="overflow-auto">
            {languages.map((language) => (
              <CommandItem
                key={language.value}
                value={language.value}
                onSelect={handelSelect}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === language.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {language.label}<code className='inlinecode text-xs'>{language.value}</code>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}






export function SelectEngine({chosen, onChange}: {chosen:Models, onChange:(v:Models)=>void}){
  // @ts-ignore
  return (
    <Select onValueChange={onChange}  defaultValue={chosen}>
      <SelectTrigger>
        <SelectValue placeholder="选择一个引擎" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>人工智能</SelectLabel>
          <SelectItem value="gpt">ChatGPT-3.5</SelectItem>
          <SelectItem value="gemini">Gemini-Pro</SelectItem>
          <SelectItem value="kimi">KimiChat</SelectItem>
          <SelectItem value="yiyan">文言一心</SelectItem>
          <SelectItem value="local">本地大语言模型</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>传统翻译模型</SelectLabel>
          <SelectItem value="deepl">DeepL</SelectItem>
          <SelectItem value="baidu">百度翻译</SelectItem>
          <SelectItem value="azure">微软Azure翻译</SelectItem>
          <SelectItem value="youdao">有道翻译</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
