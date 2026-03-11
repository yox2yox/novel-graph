import type { Scene } from "../../../../src";
import { body as scene131Body } from "./scene-1-3-1/body";

export const scenes: Scene[] = [
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
    body: scene131Body,
  },
];
