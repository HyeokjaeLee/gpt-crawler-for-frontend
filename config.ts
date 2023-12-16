/** @format */

import {Config} from "./src/config";

interface CustomConfig extends Pick<Config, "url" | "match"> {
  title: string;
}

export const configList: CustomConfig[] = [
  {
    title: "Next",
    url: "https://nextjs.org/docs",
    match: "https://nextjs.org/docs/**",
  },
  {
    title: "React",
    url: "https://react.dev/reference",
    match: "https://react.dev/reference/**",
  },
  {
    title: "ChakraUI",
    url: "https://chakra-ui.com/docs",
    match: "https://chakra-ui.com/docs/**",
  },
  {
    title: "ReactQuery",
    url: "https://tanstack.com/query/latest/docs/react",
    match: "https://tanstack.com/query/latest/docs/react/**",
  },
  {
    title: "Typescript",
    url: "https://www.typescriptlang.org/docs",
    match: "https://www.typescriptlang.org/docs/**",
  },
];
