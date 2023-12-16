/** @format */

import {configList} from "../config.js";
import type {Config} from "./config.js";
import {crawl, write} from "./core.js";

for (const config of configList) {
  const {title, ...restConfig} = config;
  const dateText = new Date().toISOString().split("T")[0];
  const fullConfig: Config = {
    ...restConfig,
    maxPagesToCrawl: 99999,
    outputFileName: `${title}-${dateText}.json`,
  };

  await crawl(fullConfig);
  await write(fullConfig);
}
