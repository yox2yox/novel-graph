import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-3-1-1",
    title: "上原のアプローチ",
    placeId: "place-classroom",
    characterIds: ["char-tenma", "char-yuuko", "char-uehara", "char-ono"],
    events: [
      "サッカー部キャプテンの上原と副キャプテンの小野が話しかけてくる",
      "上原がユーコを口説こうとするが簡単にかわされる",
      "ユーコは天馬の頭にぽんと手を置いて去っていく",
    ],
    changes: [
      {
        target: "上原",
        before: "ユーコに興味を持つ",
        after: "ユーコに軽くあしらわれる",
      },
    ],
  },
  {
    id: "scene-3-1-2",
    title: "東山の圧力",
    placeId: "place-classroom",
    characterIds: ["char-yuuko", "char-higashiyama", "char-nishimori"],
    events: [
      "ユーコが東山と西森に詰められる",
      "東山がユーコに天馬と別れるよう言う",
      "ユーコは別れないと言って二人の元を去る",
    ],
    changes: [
      {
        target: "東山とユーコの関係",
        before: "接点なし",
        after: "東山がユーコに敵意を向け始める",
      },
    ],
  },
];
