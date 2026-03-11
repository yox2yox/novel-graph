import type { Scene } from "../../../../src";
import { body as scene111Body } from "./scene-1-1-1/body";

export const scenes: Scene[] = [
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
    body: scene111Body,
  },
];
