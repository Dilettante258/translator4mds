/* eslint-disable camelcase */

export const GPT_MODELS = [
  'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo-0301',
  'gpt-3.5-turbo',
  'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-16k-0613',
  'gpt-4',
  'gpt-4-0314',
  'gpt-4-0614',
  'gpt-4-1106-preview',
  'gpt-4-32k',
  'gpt-4-32k-0314',
  'gpt-4-32k-0614',
] as const;

export const OPENAI_MODELS = [...GPT_MODELS, 'text-davinci-003', 'text-davinci-002'] as const;

export type GPTModel = (typeof GPT_MODELS)[number];
export type OpenAIModel = (typeof OPENAI_MODELS)[number];

export const OPENAI_MODELS_TITLES: Record<OpenAIModel, string> = {
  'text-davinci-003': 'text-davinci-003',
  'text-davinci-002': 'text-davinci-002',
  'gpt-3.5-turbo-0613': 'gpt-3.5-turbo-0613',
  'gpt-3.5-turbo-0301': 'gpt-3.5-turbo-0301',
  'gpt-3.5-turbo': 'gpt-3.5-turbo (recommended)',
  'gpt-3.5-turbo-16k': 'gpt-3.5-turbo-16k',
  'gpt-3.5-turbo-16k-0613': 'gpt-3.5-turbo-16k-0613',
  'gpt-4': 'gpt-4',
  'gpt-4-0314': 'gpt-4-0314',
  'gpt-4-0614': 'gpt-4-0614',
  'gpt-4-1106-preview': 'gpt-4-1106-preview',
  'gpt-4-32k': 'gpt-4-32k (testing)',
  'gpt-4-32k-0314': 'gpt-4-32k-0314 (testing)',
  'gpt-4-32k-0614': 'gpt-4-32k-0614 (testing)',
} as const;

export const OPENAI_MODELS_DESCRIPTION: Record<OpenAIModel, string> = {
  'text-davinci-003': 'Text Davinci 003',
  'text-davinci-002': 'Text Davinci 002',
  'gpt-3.5-turbo-0613': 'GPT-3.5 Turbo 0613',
  'gpt-3.5-turbo-0301': 'GPT-3.5 Turbo 0301',
  'gpt-3.5-turbo': 'GPT-3.5 Turbo',
  'gpt-3.5-turbo-16k': 'GPT-3.5 Turbo 16K',
  'gpt-3.5-turbo-16k-0613': 'GPT-3.5 Turbo 16K 0613',
  'gpt-4': 'GPT-4',
  'gpt-4-0314': 'GPT-4 0314',
  'gpt-4-0614': 'GPT-4 0614',
  'gpt-4-1106-preview': 'GPT-4 1106 preview',
  'gpt-4-32k': 'GPT-4 32K',
  'gpt-4-32k-0314': 'GPT-4 32K 0314',
  'gpt-4-32k-0614': 'GPT-4 32K 0614',
} as const;

export const MODELS = [
  'gpt',
  'gemini',
  'kimi',
  'yiyan',
  'local',
  'deepl',
  'baidu',
  'azure',
  'youdao',
  '',
] as const;

export type Models = (typeof MODELS)[number];





export const LANGUAGES = {
  auto: 'Auto',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  en: 'English',
  yue: '粵語',
  wyw: '漢文',
  ja: '日本語',
  ko: '한국어',
  fr: 'Français',
  de: 'Deutsch',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  ar: 'العربية',
  af: 'Afrikaans',
  am: 'Amharic',
  az: 'Azerbaijani',
  be: 'Belarusian',
  bg: 'Bulgarian',
  bn: 'Bengali',
  bs: 'Bosnian',
  ca: 'Catalan',
  ceb: 'Cebuano',
  co: 'Corsican',
  cs: 'Czech',
  cy: 'Welsh',
  da: 'Danish',
  el: 'Greek',
  eo: 'Esperanto',
  et: 'Estonian',
  eu: 'Basque',
  fa: 'Persian',
  fi: 'Finnish',
  fj: 'Fijian',
  fy: 'Frisian',
  ga: 'Irish',
  gd: 'Scots Gaelic',
  gl: 'Galician',
  gu: 'Gujarati',
  ha: 'Hausa',
  haw: 'Hawaiian',
  he: 'Hebrew',
  hi: 'Hindi',
  hmn: 'Hmong',
  hr: 'Croatian',
  ht: 'Haitian Creole',
  hu: 'Hungarian',
  hy: 'Armenian',
  id: 'Indonesian',
  ig: 'Igbo',
  is: 'Icelandic',
  jw: 'Javanese',
  ka: 'Georgian',
  kk: 'Kazakh',
  km: 'Khmer',
  kn: 'Kannada',
  ku: 'Kurdish',
  ky: 'Kyrgyz',
  la: 'Latin',
  lb: 'Luxembourgish',
  lo: 'Lao',
  lt: 'Lithuanian',
  lv: 'Latvian',
  mg: 'Malagasy',
  mi: 'Maori',
  mk: 'Macedonian',
  ml: 'Malayalam',
  mn: 'Mongolian',
  mr: 'Marathi',
  ms: 'Malay',
  mt: 'Maltese',
  my: 'Burmese',
  ne: 'Nepali',
  no: 'Norwegian',
  ny: 'Chichewa',
  or: 'Odia',
  pa: 'Punjabi',
  ps: 'Pashto',
  ro: 'Romanian',
  rw: 'Kinyarwanda',
  si: 'Sinhala',
  sk: 'Slovak',
  sl: 'Slovenian',
  sm: 'Samoan',
  sn: 'Shona',
  so: 'Somali',
  sq: 'Albanian',
  sr: 'Serbian',
  'sr-Cyrl': 'Serbian Cyrillic',
  'sr-Latn': 'Serbian Latin',
  st: 'Sesotho',
  su: 'Sundanese',
  sv: 'Swedish',
  sw: 'Swahili',
  ta: 'Tamil',
  te: 'Telugu',
  tg: 'Tajik',
  th: 'Thai',
  tk: 'Turkmen',
  tl: 'Tagalog',
  tr: 'Turkish',
  tt: 'Tatar',
  ug: 'Uyghur',
  uk: 'Ukrainian',
  ur: 'Urdu',
  uz: 'Uzbek',
  vi: 'Vietnamese',
  xh: 'Xhosa',
  yi: 'Yiddish',
  yo: 'Yoruba',
  zu: 'Zulu',
} as const;

export const languages =
  [{
    value: "auto",
    label: "Auto",
  },  {
    value: "en",
    label: "English",
  },  {
    value: "zh-hans",
    label: "简体中文",
  },  {
    value: "zh-hant",
    label: "繁體中文",
  },  {
    value: "yue",
    label: "粵語",
  },  {
    value: "wyw",
    label: "漢文",
  },  {
    value: "ja",
    label: "日本語",
  },  {
    value: "ko",
    label: "한국어",
  },  {
    value: "fr",
    label: "Français",
  },  {
    value: "de",
    label: "Deutsch",
  },  {
    value: "es",
    label: "Español",
  },  {
    value: "it",
    label: "Italiano",
  },  {
    value: "ru",
    label: "Русский",
  },  {
    value: "pt",
    label: "Português",
  },  {
    value: "nl",
    label: "Nederlands",
  },  {
    value: "pl",
    label: "Polski",
  },  {
    value: "ar",
    label: "العربية",
  },  {
    value: "af",
    label: "Afrikaans",
  },  {
    value: "am",
    label: "Amharic",
  },  {
    value: "az",
    label: "Azerbaijani",
  },  {
    value: "be",
    label: "Belarusian",
  },  {
    value: "bg",
    label: "Bulgarian",
  },  {
    value: "bn",
    label: "Bengali",
  },  {
    value: "bs",
    label: "Bosnian",
  },  {
    value: "ca",
    label: "Catalan",
  },  {
    value: "ceb",
    label: "Cebuano",
  },  {
    value: "co",
    label: "Corsican",
  },  {
    value: "cs",
    label: "Czech",
  },  {
    value: "cy",
    label: "Welsh",
  },  {
    value: "da",
    label: "Danish",
  },  {
    value: "el",
    label: "Greek",
  },  {
    value: "eo",
    label: "Esperanto",
  },  {
    value: "et",
    label: "Estonian",
  },  {
    value: "eu",
    label: "Basque",
  },  {
    value: "fa",
    label: "Persian",
  },  {
    value: "fi",
    label: "Finnish",
  },  {
    value: "fj",
    label: "Fijian",
  },  {
    value: "fy",
    label: "Frisian",
  },  {
    value: "ga",
    label: "Irish",
  },  {
    value: "gd",
    label: "Scots Gaelic",
  },  {
    value: "gl",
    label: "Galician",
  },  {
    value: "gu",
    label: "Gujarati",
  },  {
    value: "ha",
    label: "Hausa",
  },  {
    value: "haw",
    label: "Hawaiian",
  },  {
    value: "he",
    label: "Hebrew",
  },  {
    value: "hi",
    label: "Hindi",
  },  {
    value: "hmn",
    label: "Hmong",
  },  {
    value: "hr",
    label: "Croatian",
  },  {
    value: "ht",
    label: 'Haitian Creole'
  },  {
    value: "hu",
    label: "Hungarian",
  },  {
    value: "hy",
    label: "Armenian",
  },  {
    value: "id",
    label: "Indonesian",
  },  {
    value: "ig",
    label: "Igbo",
  },  {
    value: "is",
    label: "Icelandic",
  },  {
    value: "jw",
    label: "Javanese",
  },  {
    value: "ka",
    label: "Georgian",
  },  {
    value: "kk",
    label: "Kazakh",
  },  {
    value: "km",
    label: "Khmer",
  },  {
    value: "kn",
    label: "Kannada",
  },  {
    value: "ku",
    label: "Kurdish",
  },  {
    value: "ky",
    label: "Kyrgyz",
  },  {
    value: "la",
    label: "Latin",
  },  {
    value: "lb",
    label: "Luxembourgish",
  },  {
    value: "lo",
    label: "Lao",
  },  {
    value: "lt",
    label: "Lithuanian",
  },  {
    value: "lv",
    label: "Latvian",
  },  {
    value: "mg",
    label: "Malagasy",
  },  {
    value: "mi",
    label: "Maori",
  },  {
    value: "mk",
    label: "Macedonian",
  },  {
    value: "ml",
    label: "Malayalam",
  },  {
    value: "mn",
    label: "Mongolian",
  },  {
    value: "mr",
    label: "Marathi",
  },  {
    value: "ms",
    label: "Malay",
  },  {
    value: "mt",
    label: "Maltese",
  },  {
    value: "my",
    label: "Burmese",
  },  {
    value: "ne",
    label: "Nepali",
  },  {
    value: "no",
    label: "Norwegian",
  },  {
    value: "ny",
    label: "Chichewa",
  },  {
    value: "or",
    label: "Odia",
  },  {
    value: "pa",
    label: "Punjabi",
  },  {
    value: "ps",
    label: "Pashto",
  },  {
    value: "ro",
    label: "Romanian",
  },  {
    value: "rw",
    label: "Kinyarwanda",
  },  {
    value: "si",
    label: "Sinhala",
  },  {
    value: "sk",
    label: "Slovak",
  },  {
    value: "sl",
    label: "Slovenian",
  },  {
    value: "sm",
    label: "Samoan",
  },  {
    value: "sn",
    label: "Shona",
  },  {
    value: "so",
    label: "Somali",
  },  {
    value: "sq",
    label: "Albanian",
  },  {
    value: "sr",
    label: "Serbian",
  },  {
    value: 'sr-cyrl',
    label: 'Serbian Cyrillic',
  },  {
    value: 'sr-latn',
    label: 'Serbian Latin',
  },  {
    value: "st",
    label: "Sesotho",
  },  {
    value: "su",
    label: "Sundanese",
  },  {
    value: "sv",
    label: "Swedish",
  },  {
    value: "sw",
    label: "Swahili",
  },  {
    value: "ta",
    label: "Tamil",
  },  {
    value: "te",
    label: "Telugu",
  },  {
    value: "tg",
    label: "Tajik",
  },  {
    value: "th",
    label: "Thai",
  },  {
    value: "tk",
    label: "Turkmen",
  },  {
    value: "tl",
    label: "Tagalog",
  },  {
    value: "tr",
    label: "Turkish",
  },  {
    value: "tt",
    label: "Tatar",
  },  {
    value: "ug",
    label: "Uyghur",
  },  {
    value: "uk",
    label: "Ukrainian",
  },  {
    value: "ur",
    label: "Urdu",
  },  {
    value: "uz",
    label: "Uzbek",
  },  {
    value: "vi",
    label: "Vietnamese",
  },  {
    value: "xh",
    label: "Xhosa",
  },  {
    value: "yi",
    label: "Yiddish",
  },  {
    value: "yo",
    label: "Yoruba",
  },  {
    value: "zu",
    label: "Zulu",
  }] as const;



export type Language = keyof typeof LANGUAGES;