import type { Section } from "../../../src";
import { scenes as sec41Scenes } from "./sec-4-1/scenes";
import { scenes as sec42Scenes } from "./sec-4-2/scenes";
import { scenes as sec43Scenes } from "./sec-4-3/scenes";
import { scenes as sec44Scenes } from "./sec-4-4/scenes";
import { scenes as sec45Scenes } from "./sec-4-5/scenes";
import { scenes as sec46Scenes } from "./sec-4-6/scenes";

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
      "東山の恋人の霊を探すため海辺の町に向かい、ユーコと南川が意気投合する。事故現場でエネルギー値の高さを確認し、霊を呼び戻せる可能性を見出す。",
    scenes: sec43Scenes,
  },
  {
    id: "sec-4-4",
    title: "停戦の罠",
    summary:
      "東山との停戦が成立するが、裏で天馬に他の女子を近づける工作が行われ、ユーコとの関係が悪化する。",
    scenes: sec44Scenes,
  },
  {
    id: "sec-4-5",
    title: "ユーコの危機",
    summary:
      "ユーコが教室に来なくなり、旧校舎への鍵も没収される。霊界に引き戻される危険を知った天馬は東山に協力を求める。",
    scenes: sec45Scenes,
  },
  {
    id: "sec-4-6",
    title: "恋人の霊と救出",
    summary:
      "事故現場で東山の恋人の霊を呼び出し、東山と心を通わせる。東山の協力で旧校舎に入り、ユーコを救出する。",
    scenes: sec46Scenes,
  },
];
