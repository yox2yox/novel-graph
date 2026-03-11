import type { Chapter } from "../../../src";
import { sections as ch1Sections } from "./ch-1/sections";
import { sections as ch2Sections } from "./ch-2/sections";
import { sections as ch3Sections } from "./ch-3/sections";
import { sections as ch4Sections } from "./ch-4/sections";
import { sections as ch5Sections } from "./ch-5/sections";
import { sections as ch6Sections } from "./ch-6/sections";
import { sections as ch7Sections } from "./ch-7/sections";

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
  {
    id: "ch-5",
    title: "文化祭",
    summary:
      "お化け屋敷でエネルギーを集める計画を立て、天馬とユーコの距離が急接近する。文化祭当日、幼馴染ミコとの再会で天馬の過去のトラウマが再燃するが、ユーコに励まされ和解。しかし機械の暴走でユーコが霊界に連れ去られ、天馬たちは霊界に飛び込んでユーコを救出する。",
    phase: "development",
    direction: "advance",
    sections: ch5Sections,
  },
  {
    id: "ch-6",
    title: "ユーコの未練",
    summary:
      "ユーコの書類不正が発覚し危機に陥るが東山の助けで回避。ユーコの死の真相——母親の教育圧力と自殺——が明かされ、ユーコは母親のもとを訪れて16年越しの和解を果たす。",
    phase: "twist",
    direction: "advance",
    sections: ch6Sections,
  },
  {
    id: "ch-7",
    title: "最後の夏",
    summary:
      "ユーコが天馬に告白するが天馬は返事を避け続ける。告白に答えればユーコが成仏してしまうことを恐れていたからだった。エネルギーの集めすぎで悪霊が襲来し、天馬は泣きながらユーコに告白。悪霊は退けたがユーコは消えてしまう。半年後、ユーコと瓜二つの少女・大場ユウミが現れ、物語は幕を閉じる。",
    phase: "conclusion",
    direction: "advance",
    sections: ch7Sections,
  },
];
