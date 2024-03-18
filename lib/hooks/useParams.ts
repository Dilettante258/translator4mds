'use client'

import { createContext, useContext, useReducer, type Dispatch } from "react";

interface State {
  title: string;
  content: string;
  displayContent: string;
  isPreviewMode: boolean;
  isSubmitting: boolean;
}

const defaultState: State = {
  title: "",
  content: "",
  displayContent: "",
  isPreviewMode: false,
  isSubmitting: false,
};

type Action =
  | { type: "title"; payload: string }
  | { type: "content"; payload: string }
  | { type: "displayContent"; payload: string }
  | { type: "isPreviewMode"; payload: boolean }
  | { type: "isSubmitting"; payload: boolean };

type Reducer = (state: State, action: Action) => State;

const reducer: Reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "title": {
      return { ...state, title: payload };
    }
    case "content": {
      return { ...state, content: payload };
    }
    case "displayContent": {
      return { ...state, displayContent: payload };
    }
    case "isPreviewMode": {
      return { ...state, isPreviewMode: payload };
    }
    case "isSubmitting": {
      return { ...state, isSubmitting: payload };
    }
    default: {
      throw new Error("Invalid action type: " + type);
    }
  }
};

interface Context extends State {
  dispatch: Dispatch<Action>;
}

const defaultContext: Context = {
  ...defaultState,
  dispatch: () => 0,
};

export const ParamsContext = createContext(defaultContext);

export const ParamsProvider = ParamsContext.Provider;

export const useParamsRoot = () => {
  const [{ title, content, displayContent,
    isPreviewMode, isSubmitting }, dispatch] =
    useReducer(reducer, defaultState);

  return {
    title,
    content,
    displayContent,
    isPreviewMode,
    isSubmitting,
    dispatch,
  } as Context;
};

export const useParams = () => useContext(ParamsContext);