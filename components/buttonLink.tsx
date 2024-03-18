"use client";

import type { MouseEventHandler } from "react";

import { toast } from "./ui/use-toast";
import { Button } from "./ui/button";
import {ArrowLineUp, Code, Copy, GithubLogo, Link} from "@phosphor-icons/react";

const handleClick: MouseEventHandler<HTMLButtonElement> = async (toClip) => {
  const url = window.location.href;

  try {
    await navigator.clipboard.writeText(url);
    toast({
      title: "Copied to clipboard!",
    });
  } catch {
    toast({
      title: "Permission to clipboard denied.",
    });
  }
};

export const CopyUrl = () => {
  return (
    <button
      onClick={handleClick}
      className="hoverButton"
    >
      <Link size={24} />
    </button>
  );
};

export const GitHubLink = () => {
  return (
    <a href="https://github.com/Dilettante258">
      <GithubLogo size={24}/>
    </a>
  )
}

export const BackToTop = () => (
  <button
    type="button"
    className="hoverButton"
    onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
    aria-label="Back to top"
    name="Back to top"
  >
    <ArrowLineUp size={24} />
  </button>
);

export const ViewCode = () => (
  <button
    type="button"
    className="hoverButton"
    onClick={() => {
      window.open(
        "https://github.com/Dilettante258/translator4mds",
        "_blank"
      );
    }
    }
  >
    <Code size={24} />
  </button>
)

export const ButtonRow = () => (
  <div className="fixed bottom-4 right-4 md:right-8 flex flex-col">
    <CopyUrl />
    <ViewCode />
    <BackToTop />
  </div>
);
