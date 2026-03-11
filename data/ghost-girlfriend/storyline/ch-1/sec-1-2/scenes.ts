import type { Scene } from "../../../../src";
import { body as scene121Body } from "./scene-1-2-1/body";
import { body as scene122Body } from "./scene-1-2-2/body";

export const scenes: Scene[] = [
  {
    id: "scene-1-2-1",
    title: "天馬の頼み",
    placeId: "place-classroom",
    characterIds: ["char-tenma", "char-ryuu"],
    events: [
      "天馬が変な本を読んでいる",
      "周囲からヒソヒソ声が聞こえる",
      "天馬が突然立ち上がりリュウに話しかける",
      "高校デビューを手伝ってほしいと頼む",
      "リュウは断るが、中学の頃の契約（お互いを尊重する約束）を持ち出される",
      "契約を破れば女子の前で一発ギャグ100連発というペナルティ",
      "リュウはいやいや承諾する",
    ],
    changes: [
      {
        target: "リュウ",
        before: "天馬の計画に無関係",
        after: "いやいやながら高校デビュー計画に巻き込まれる",
      },
    ],
    body: scene121Body,
  },
  {
    id: "scene-1-2-2",
    title: "幽霊彼女計画",
    placeId: "place-occult-club",
    characterIds: ["char-tenma", "char-ryuu"],
    events: [
      "天馬が幽霊に関する情報が記されたノートを見つけたことをリュウに教える",
      "幽霊を見つけて自分の彼女にすると天馬が宣言する",
      "幽霊のこの世への未練をかなえる代わりに仮の彼女になってもらう計画を説明する",
      "ターゲットは16年前に亡くなった少女・椎名ユーコ",
      "旧校舎音楽室からピアノの音が聞こえる噂からユーコの出現場所を特定",
      "夜、旧校舎の音楽室に行くことが決まる",
    ],
    changes: [
      {
        target: "天馬の計画",
        before: "漠然とした高校デビュー願望",
        after: "幽霊彼女計画として具体化（ターゲット: 椎名ユーコ）",
      },
    ],
    body: scene122Body,
  },
];
