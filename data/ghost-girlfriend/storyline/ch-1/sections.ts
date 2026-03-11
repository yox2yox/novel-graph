import type { Section } from "../../../src";
import { scenes as sec11Scenes } from "./sec-1-1/scenes";
import { scenes as sec12Scenes } from "./sec-1-2/scenes";
import { scenes as sec13Scenes } from "./sec-1-3/scenes";

export const sections: Section[] = [
  {
    id: "sec-1-1",
    title: "音楽室の幽霊（プロローグ）",
    summary:
      "天馬とリュウが夜の旧校舎音楽室でユーコを発見し、天馬が彼女になる契約を持ちかける。",
    scenes: sec11Scenes,
  },
  {
    id: "sec-1-2",
    title: "高校デビュー計画",
    summary:
      "数時間前に遡り、天馬がリュウに高校デビューの協力を頼み、幽霊彼女計画を明かす。",
    scenes: sec12Scenes,
  },
  {
    id: "sec-1-3",
    title: "契約成立",
    summary:
      "ユーコが追いかけてきて正式に契約が成立。天馬は機械を使ってユーコをこの世に引き戻す。",
    scenes: sec13Scenes,
  },
];
