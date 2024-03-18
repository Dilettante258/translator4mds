"use client";

import {createContext, Dispatch, SetStateAction, useContext, useMemo, useState} from 'react';
import {useLocalStorage} from 'usehooks-ts';

import {AiConfigValues, CommonConfigValues, HistoryRecord, LastTranslateData, RenderConfigValues} from '@/lib/types';

type GlobalContextValue = {
  CommonConfigValues: CommonConfigValues;
  setCommonConfigValues: Dispatch<SetStateAction<CommonConfigValues>>;
  AiConfigValues: AiConfigValues;
  setAiConfigValues: Dispatch<SetStateAction<AiConfigValues>>;
  RenderConfigValues: RenderConfigValues;
  setRenderConfigValues: Dispatch<SetStateAction<RenderConfigValues>>;
  translator: {
    lastTranslateData: LastTranslateData;
    setLastTranslateData: Dispatch<SetStateAction<LastTranslateData>>;
    docsText: string;
    setDocsText: Dispatch<SetStateAction<string>>;
    translatedText: string | undefined;
    setTranslatedText: Dispatch<SetStateAction<string>>;
    // isTranslating: boolean;
    // isTranslateError: boolean;
  };
  history: {
    historyRecords: HistoryRecord[];
    setHistoryRecords: Dispatch<SetStateAction<HistoryRecord[]>>;
  };
};

const GlobalContext = createContext<GlobalContextValue>({
  AiConfigValues: {
    openaiApiUrl: '',
    openaiApiKey: '',
    streamEnabled: true,
    prompt: '请你保留格式翻译以下内容：',
    currentModel: 'gpt-3.5-turbo',
    temperature: 0.5,
    thirdPartyApiEnabled: false,
  },
  setAiConfigValues: () => undefined,
  CommonConfigValues: {
    fromLang: 'auto',
    toLang: 'auto',
    retainAnnotationsEnabled: false,
    TranslateModel: 'gpt',
    groupParam: 0,
  },
  setCommonConfigValues: () => undefined,
  RenderConfigValues: {
    darkMode: false,
    mathEnabled: true,
  },
  setRenderConfigValues: () => undefined,
  translator: {
    lastTranslateData: {
      fromLang: 'auto',
      toLang: 'auto',
    },
    setLastTranslateData: () => undefined,
    docsText: '',
    setDocsText: () => undefined,
    translatedText: '',
    setTranslatedText: () => undefined,
    // isTranslating: false,
    // isTranslateError: false,
  },
  history: {
    historyRecords: [],
    setHistoryRecords: () => undefined,
  },
});

type Props = {
  children: React.ReactNode;
};

export function GlobalProvider(props: Props) {
  const { children } = props;
  const [docsText, setDocsText] = useState('');
  const [translatedText, setTranslatedText] = useState("");
  const [historyRecords, setHistoryRecords] = useLocalStorage<HistoryRecord[]>('history-record', []);
  const [lastTranslateData, setLastTranslateData] = useLocalStorage<LastTranslateData>('last-translate-data', {
    fromLang: 'auto',
    toLang: 'auto',
  });


  const [CommonConfigValues, setCommonConfigValues] = useLocalStorage<CommonConfigValues>('common-config', {
    fromLang: '',
    toLang: '',
    retainAnnotationsEnabled: false,
    TranslateModel: '',
    groupParam: 3,
  });

  const {
    fromLang = '',
    toLang = '',
    retainAnnotationsEnabled = false,
    TranslateModel = '',
    groupParam = 3,
  } = CommonConfigValues;


  const [AiConfigValues, setAiConfigValues] = useLocalStorage<AiConfigValues>('extra-config', {
    openaiApiUrl: '',
    openaiApiKey: '',
    prompt: `请你保留格式翻译以下内容到${toLang}：`,
    streamEnabled: true,
    currentModel: 'gpt-3.5-turbo',
    temperature: 0.5,
    thirdPartyApiEnabled: false,
  });

  const {
    openaiApiUrl = '',
    openaiApiKey = '',
    prompt = `请你保留格式翻译以下内容到中文：`,
    streamEnabled = true,
    currentModel = 'gpt-3.5-turbo',
    temperature = 0.5,
    thirdPartyApiEnabled = false,
  } = AiConfigValues;

  const [RenderConfigValues, setRenderConfigValues] = useLocalStorage<RenderConfigValues>('render-config', {
    darkMode: false,
    mathEnabled: true,
  });

  const {
    darkMode = false,
    mathEnabled = true,
  } = RenderConfigValues;



  // const {
  //   data: translatedText,
  //   mutate: mutateTranslatedText,
  //   isLoading: isTranslating,
  //   isError: isTranslateError,
  // } = useQueryApi(streamEnabled);



  const contextValue = useMemo(
    () => ({
      AiConfigValues: { openaiApiUrl, openaiApiKey, prompt, streamEnabled, currentModel, temperature, thirdPartyApiEnabled },
      setAiConfigValues,
      CommonConfigValues: { fromLang, toLang, retainAnnotationsEnabled, TranslateModel, groupParam },
      setCommonConfigValues,
      RenderConfigValues: { darkMode, mathEnabled },
      setRenderConfigValues,
      translator: {
        lastTranslateData,
        setLastTranslateData,
        docsText,
        setDocsText,
        translatedText,
        setTranslatedText,
        // isTranslating,
        // isTranslateError,
      },
      history: {
        historyRecords,
        setHistoryRecords,
      },
    }),
    [
      openaiApiUrl,
      openaiApiKey,
      streamEnabled,
      currentModel,
      temperature,
      thirdPartyApiEnabled,
      setAiConfigValues,
      CommonConfigValues,
      setCommonConfigValues,
      lastTranslateData,
      setLastTranslateData,
      docsText,
      // translatedText,
      // isTranslating,
      // isTranslateError,
      historyRecords,
      setHistoryRecords,
    ],
  );

  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}



export function useGlobalStore() {
  return useContext(GlobalContext);
}