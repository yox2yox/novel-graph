import type { Chapter } from "../../../src";

/** 第1章: 幽霊との出会い */
export const chapter1: Chapter = {
  id: "ch-1",
  title: "幽霊との出会い",
  summary:
    "天馬が高校デビューのために幽霊を彼女にするという突飛な計画を立て、旧校舎音楽室でユーコと出会い契約を結ぶ。",
  phase: "introduction",
  direction: "advance",
  sections: [
    {
      id: "sec-1-1",
      title: "音楽室の幽霊（プロローグ）",
      summary:
        "天馬とリュウが夜の旧校舎音楽室でユーコを発見し、天馬が彼女になる契約を持ちかける。",
      scenes: [
        {
          id: "scene-1-1-1",
          title: "ユーコとの遭遇",
          placeId: "place-music-room",
          characterIds: ["char-tenma", "char-ryuu", "char-yuuko"],
          events: [
            "天馬とリュウが夜の旧校舎音楽室に忍び込む",
            "天馬がユーコを発見する",
            "リュウはビビる",
            "天馬はユーコに彼女になる代わりにこの世への未練を解消してやると申し出る",
            "ユーコはあっさりOKして天馬に迫ってくる",
            "天馬は叫ぶ",
          ],
          changes: [
            {
              target: "天馬とユーコの関係",
              before: "他人（天馬が一方的にユーコの存在を知っていた）",
              after: "偽りの恋人契約を結ぶ",
            },
          ],
        },
      ],
    },
    {
      id: "sec-1-2",
      title: "高校デビュー計画",
      summary:
        "数時間前に遡り、天馬がリュウに高校デビューの協力を頼み、幽霊彼女計画を明かす。",
      scenes: [
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
        },
      ],
    },
    {
      id: "sec-1-3",
      title: "契約成立",
      summary:
        "ユーコが追いかけてきて正式に契約が成立。天馬は機械を使ってユーコをこの世に引き戻す。",
      scenes: [
        {
          id: "scene-1-3-1",
          title: "逃走と契約",
          placeId: "place-music-room",
          characterIds: ["char-tenma", "char-ryuu", "char-yuuko"],
          events: [
            "時は再び夜に戻る",
            "音楽室から逃げてきた天馬とリュウ",
            "ユーコは追いかけてきていた",
            "ユーコは改めて天馬の彼女のフリをすることを承諾",
            "天馬がどこからか機械を取り出す",
            "機械を使ってユーコをあの世からこの世に引き戻す",
          ],
          changes: [
            {
              target: "ユーコ",
              before: "あの世の幽霊",
              after: "この世に引き戻された存在",
            },
          ],
        },
      ],
    },
  ],
};
