import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-3-2-1",
    title: "噂と嫌がらせ",
    placeId: "place-classroom",
    characterIds: ["char-tenma", "char-ryuu", "char-higashiyama"],
    events: [
      "天馬がいろいろな嫌がらせを受ける",
      "天馬に関する様々な噂が流れている",
      "リュウに噂について聞かれる",
      "東山が天馬とユーコの関係に疑いを持つ",
    ],
    changes: [
      {
        target: "天馬のクラス内の立場",
        before: "彼女持ちとして一時的に注目された",
        after: "嫌がらせと噂の標的になる",
      },
    ],
  },
  {
    id: "scene-3-2-2",
    title: "監視と対策",
    placeId: "place-courtyard",
    characterIds: ["char-tenma", "char-yuuko"],
    events: [
      "天馬たちが話していると監視されていることに気づく",
      "天馬がどうすればいいか悩む",
      "ユーコが顔を近づけて恋人であることを見せつければいいと提案",
      "放課後に駅前カフェに行くことが決まる",
    ],
    changes: [
      {
        target: "天馬の戦略",
        before: "嫌がらせに対して受け身",
        after: "ユーコと協力して恋人関係をアピールする方針に",
      },
    ],
  },
  {
    id: "scene-3-2-3",
    title: "カフェデート",
    placeId: "place-cafe",
    characterIds: ["char-tenma", "char-yuuko"],
    events: [
      "監視に見せつけるようにユーコが積極的に攻めてくる",
    ],
    changes: [
      {
        target: "周囲の認識",
        before: "天馬とユーコの関係に疑いがある",
        after: "カフェデートの様子が監視者に目撃される",
      },
    ],
  },
];
