import {GPTModel, Models, OpenAIModel} from '@/lib/gptModel';

export type { GPTModel, OpenAIModel };

export type CompletionsResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    text: string;
    index: number;
    logprobs: number | null;
    finish_reason: string;
  }[];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
};

export type ChatCompletionsResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  choices: {
    delta?: {
      content: string;
    };
    message?: {
      role: string;
      content: string;
    };
    finish_reason: string;
    index: number;
  }[];
};

export type HistoryRecord = {
  id: string;
  text: string;
  translation: string;
  createdAt: number;
  fromLanguage: string;
  toLanguage: string;
};

export type LastTranslateData = {
  fromLang: string;
  toLang: string;
};

export type AiConfigValues = {
  openaiApiUrl: string;
  openaiApiKey: string;
  prompt: string;
  streamEnabled: boolean;
  currentModel: OpenAIModel;
  temperature: number;
  thirdPartyApiEnabled: boolean;
};

export type CommonConfigValues = {
  fromLang: string;
  toLang: string;
  retainAnnotationsEnabled: boolean;
  TranslateModel: Models;
  groupParam: number;
};

export type RenderConfigValues = {
  darkMode: boolean;
  mathEnabled: boolean;
};