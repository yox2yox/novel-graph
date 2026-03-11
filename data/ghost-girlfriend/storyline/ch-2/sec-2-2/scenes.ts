import type { Scene } from "../../../../src";
import { body as scene221Body } from "./scene-2-2-1/body";
import { body as scene222Body } from "./scene-2-2-2/body";

export const scenes: Scene[] = [
  {
    id: "scene-2-2-1",
    title: "一人ぼっちの天馬",
    placeId: "place-hallway",
    characterIds: ["char-tenma", "char-ryuu", "char-yuuko"],
    events: [
      "質問攻めから一転、すぐに飽きられた天馬が廊下から教室を眺める",
      "クラスの皆に囲まれるユーコを見ながらリュウに文句を言う",
      "天馬がリュウを昼食に誘うが断られる",
      "とぼとぼと食堂に向かう天馬をユーコが呼び止める",
      "ユーコが一緒にご飯を食べようと誘ってくれる",
    ],
    changes: [
      {
        target: "天馬の感情",
        before: "注目されていると思い込んでいた",
        after: "すぐに飽きられて疎外感を感じる",
      },
    ],
    body: scene221Body,
  },
  {
    id: "scene-2-2-2",
    title: "間接キスと未練",
    placeId: "place-courtyard",
    characterIds: ["char-tenma", "char-yuuko"],
    events: [
      "天馬とユーコが食堂のパンを食べる",
      "ユーコがすぐに食べ終わり天馬のパンを一口ねだる",
      "何年も食べてなかったと言いながら天馬のパンにかみつく",
      "天馬がためらっていると間接キスを気にしてるのかとからかわれる",
      "天馬は意地を張って思い切りパンを頬張る",
      "「キスしちゃったね」とユーコ、「かんせつな！！」と天馬",
      "天馬がユーコにこの世の未練を聞く",
      "ユーコは楽しい学生生活を送ることと、会いたい人がいると答える",
      "会いたい人についてはまだ教えないという",
      "天馬は恋人計画を進め、下校を一緒にすることを提案",
    ],
    changes: [
      {
        target: "天馬とユーコの関係",
        before: "ビジネスライクな偽恋人関係",
        after: "少しずつ距離が縮まっている",
      },
      {
        target: "ユーコの未練（情報）",
        before: "不明",
        after: "楽しい学生生活を送ること＋会いたい人がいること（詳細は不明）",
      },
    ],
    body: scene222Body,
  },
];
