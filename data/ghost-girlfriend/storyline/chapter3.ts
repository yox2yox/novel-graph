import type { Chapter } from "../../../src";

/** 第3章: 妨害と対抗 */
export const chapter3: Chapter = {
  id: "ch-3",
  title: "妨害と対抗",
  summary:
    "東山を中心としたクラスメイトからの妨害が始まり、天馬は嫌がらせを受ける。天馬はユーコと協力して対抗策を講じていく。",
  phase: "development",
  direction: "setback",
  sections: [
    {
      id: "sec-3-1",
      title: "周囲の反応",
      summary:
        "上原がユーコに接触し、東山がユーコに天馬と別れるよう迫る。天馬への風当たりが強くなり始める。",
      scenes: [
        {
          id: "scene-3-1-1",
          title: "上原のアプローチ",
          placeId: "place-classroom",
          characterIds: [
            "char-tenma",
            "char-yuuko",
            "char-uehara",
            "char-ono",
          ],
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
          characterIds: [
            "char-yuuko",
            "char-higashiyama",
            "char-nishimori",
          ],
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
      ],
    },
    {
      id: "sec-3-2",
      title: "嫌がらせと反撃",
      summary:
        "天馬への嫌がらせがエスカレートする。天馬とユーコはカフェデートで反撃を試みる。",
      scenes: [
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
      ],
    },
    {
      id: "sec-3-3",
      title: "渡り廊下の幽霊",
      summary:
        "南川から渡り廊下の幽霊の話を聞き、天馬たちは幽霊を東山のノートに封じ込めることに成功する。",
      scenes: [
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
      ],
    },
  ],
};
