import type { Chapter } from "../../../src";
import { sections as ch1Sections } from "./ch-1/sections";
import { sections as ch2Sections } from "./ch-2/sections";
import { sections as ch3Sections } from "./ch-3/sections";
import { sections as ch4Sections } from "./ch-4/sections";

export const chapters: Chapter[] = [
  {
    id: "ch-1",
    title: "幽霊との出会い",
    summary:
      "天馬が高校デビューのために幽霊を彼女にするという突飛な計画を立て、旧校舎音楽室でユーコと出会い契約を結ぶ。",
    phase: "introduction",
    direction: "advance",
    sections: ch1Sections,
  },
  {
    id: "ch-2",
    title: "偽りの恋人生活",
    summary:
      "ユーコが転校生として学校に現れ、天馬との偽りの恋人生活が始まる。二人の距離は少しずつ縮まるが、ユーコには学校から離れられない制約があることが判明する。",
    phase: "development",
    direction: "advance",
    sections: ch2Sections,
  },
  {
    id: "ch-3",
    title: "妨害と対抗",
    summary:
      "東山を中心としたクラスメイトからの妨害が始まり、天馬は嫌がらせを受ける。天馬はユーコと協力して対抗策を講じていく。",
    phase: "development",
    direction: "setback",
    sections: ch3Sections,
  },
  {
    id: "ch-4",
    title: "東山との対決",
    summary:
      "天馬が東山に宣戦布告し、消耗戦の末に東山の弱点を探り当てる。東山の過去に関わる恋人の霊を探すため、海辺の町へ向かう。",
    phase: "twist",
    direction: "advance",
    sections: ch4Sections,
  },
];
