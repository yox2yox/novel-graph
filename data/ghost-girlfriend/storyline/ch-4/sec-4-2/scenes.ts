import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-4-2-1",
    title: "情報収集",
    placeId: "place-classroom",
    characterIds: [
      "char-tenma",
      "char-yuuko",
      "char-uehara",
      "char-ono",
      "char-minamikawa",
    ],
    events: [
      "天馬とユーコが対処法を考える",
      "上原と小野にあんなに弱っている東山を見たのは初めてだと褒められる",
      "弱点を聞くと南川と昔は仲が良かったと教えられる",
      "天馬が南川を呼び出し東山のことを聞く",
      "昔は優しかったが恋人の死を境に変わったことが判明",
      "今日弱っているのは天馬の攻撃だけでなく東山が恋人の霊を目撃したため",
      "天馬は恋人の霊を利用することを思いつく",
    ],
    changes: [
      {
        target: "東山に関する情報",
        before: "敵対的な人物としか認識していなかった",
        after: "恋人の死がきっかけで変わったこと、恋人の霊の目撃が弱点であることを知る",
      },
      {
        target: "天馬の戦略",
        before: "消耗戦で疲弊",
        after: "東山の恋人の霊を探し出す方針に転換",
      },
    ],
  },
];
