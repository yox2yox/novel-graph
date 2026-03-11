import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-3-3-1",
    title: "南川の情報",
    placeId: "place-classroom",
    characterIds: ["char-tenma", "char-minamikawa"],
    events: [
      "天馬が東山をどうにかする方法を考え始める",
      "南川が話しかけてきて菓子折りを持ってくる",
      "南川から渡り廊下に出る幽霊の話を聞く",
      "その幽霊のせいで不幸なことが度々起きると知る",
    ],
    changes: [
      {
        target: "天馬の情報",
        before: "東山への対処法が不明",
        after: "渡り廊下の幽霊の存在を知る",
      },
    ],
  },
  {
    id: "scene-3-3-2",
    title: "幽霊捕獲作戦",
    placeId: "place-corridor-3f",
    characterIds: ["char-tenma", "char-ryuu", "char-yuuko"],
    events: [
      "リュウを呼び出して南川の言っていた幽霊を捕まえることにした",
      "東山の使っていたノートを見つける",
      "ノートに霊を封じ込めることにした",
      "3人は幽霊を見つけて襲われそうになる",
      "何とかノートの中に霊を封じ込めることに成功する",
    ],
    changes: [
      {
        target: "渡り廊下の幽霊",
        before: "渡り廊下に出没し不幸を引き起こしていた",
        after: "東山のノートに封じ込められた",
      },
      {
        target: "天馬の武器",
        before: "東山への対抗手段がなかった",
        after: "東山のノート（幽霊入り）を手に入れた",
      },
    ],
  },
];
