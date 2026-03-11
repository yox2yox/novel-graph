import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-4-1-1",
    title: "宣戦布告",
    placeId: "place-classroom",
    characterIds: ["char-tenma", "char-higashiyama"],
    events: [
      "天馬が東山に宣戦布告する",
      "その日も天馬は散々な目に遭う",
      "東山の方にも不幸が襲いかかる",
      "天馬が攻撃をやめない限りこちらの攻撃も続くと脅す",
      "東山は引き下がる気配がない",
      "お互い疲弊してしまう",
    ],
    changes: [
      {
        target: "天馬と東山の関係",
        before: "一方的に嫌がらせを受けていた",
        after: "互いに攻撃し合う消耗戦に突入",
      },
    ],
  },
];
