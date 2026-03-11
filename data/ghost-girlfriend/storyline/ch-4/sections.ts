import type { Section } from "../../../src";
import { scenes as sec41Scenes } from "./sec-4-1/scenes";
import { scenes as sec42Scenes } from "./sec-4-2/scenes";
import { scenes as sec43Scenes } from "./sec-4-3/scenes";

export const sections: Section[] = [
  {
    id: "sec-4-1",
    title: "宣戦布告と消耗戦",
    summary:
      "天馬が東山に宣戦布告。互いに攻撃し合い、両者とも疲弊する。",
    scenes: sec41Scenes,
  },
  {
    id: "sec-4-2",
    title: "東山の弱点",
    summary:
      "天馬が東山の過去を知り、恋人の霊を利用する作戦を思いつく。",
    scenes: sec42Scenes,
  },
  {
    id: "sec-4-3",
    title: "海辺の町",
    summary:
      "東山の恋人の霊を探すため海辺の町に向かうが、天馬はユーコとの更衣室でのハプニングに見舞われる。",
    scenes: sec43Scenes,
  },
];
