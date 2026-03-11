import type { Section } from "../../../src";
import { scenes as sec61Scenes } from "./sec-6-1/scenes";
import { scenes as sec62Scenes } from "./sec-6-2/scenes";
import { scenes as sec63Scenes } from "./sec-6-3/scenes";

export const sections: Section[] = [
  {
    id: "sec-6-1",
    title: "波乱",
    summary:
      "ユーコのエネルギー値が上昇し遠出が可能になるが、担任に書類の不正が発覚。天馬がクラスに真実を打ち明けるも、東山が理事長に話を通して退学を阻止する。",
    scenes: sec61Scenes,
  },
  {
    id: "sec-6-2",
    title: "ユーコの過去",
    summary:
      "ユーコが置き手紙を残して姿を消す。天馬はユーコの死の真相——母親の教育圧力と自殺——を仲間に明かし、ユーコを止めに向かう。",
    scenes: sec62Scenes,
  },
  {
    id: "sec-6-3",
    title: "母親との再会",
    summary:
      "ユーコは復讐ではなく許しのために母親のもとを訪れ、16年越しの和解を果たす。ユーコは母親の家に住むことになり、天馬の頬にキスをして感謝を伝える。",
    scenes: sec63Scenes,
  },
];
