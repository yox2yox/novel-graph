import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-4-3-1",
    title: "海辺の町へ",
    placeId: "place-seaside-town",
    characterIds: [
      "char-tenma",
      "char-ryuu",
      "char-minamikawa",
      "char-yuuko",
    ],
    events: [
      "天馬、リュウ、南川、ユーコの4人で東山や南川の地元である海辺の町に来る",
      "夜になるまで海で遊ぶことにする",
      "天馬、リュウ、南川の3人は早々に着替えて待つ",
      "ユーコがなかなか出てこない",
      "天馬が呼びに行くとユーコは更衣室の鍵が閉まらないという",
      "ユーコが天馬に扉の前で見張りを頼む",
      "ユーコが天馬を更衣室の中に引き込む",
      "水着のひもが結べないから結んでほしいと頼まれる",
      "天馬が手を震わせながらひもを結ぶ",
      "ユーコが振り返ると結びが甘く水着が落ちてしまう",
      "天馬は更衣室から飛び出して逃げる",
      "天馬が全力で謝るが「天馬くんならいいよ」と言われて怒る",
    ],
    changes: [
      {
        target: "天馬とユーコの関係",
        before: "信頼関係が芽生え始めている",
        after: "ユーコが天馬に対して特別な信頼を見せる（「天馬くんならいいよ」）",
      },
    ],
  },
  {
    id: "scene-4-3-2",
    title: "ビーチ",
    placeId: "place-seaside-town",
    characterIds: [
      "char-tenma",
      "char-ryuu",
      "char-minamikawa",
      "char-yuuko",
    ],
    events: [
      "天馬とリュウがはしゃいで海で遊ぶのをユーコと南川が見守る",
      "天馬とリュウは泳ぐのを競争しようと言って遠くまで泳いでいく",
      "ユーコが南川の水着を褒める",
      "ユーコは南川の水着がアニメ『魔法少女みみぴょん』に出てくる衣装に似ていると言う",
      "南川はそのコラボ水着だと明かす",
      "好きなアニメが一致した二人は意気投合する",
    ],
    changes: [
      {
        target: "ユーコと南川の関係",
        before: "知り合い程度の関係",
        after: "共通の趣味で意気投合し、距離が縮まる",
      },
    ],
  },
  {
    id: "scene-4-3-3",
    title: "合流",
    placeId: "place-seaside-town",
    characterIds: [
      "char-tenma",
      "char-ryuu",
      "char-minamikawa",
      "char-yuuko",
    ],
    events: [
      "売店でアイスを買って食べていたユーコと南川の元に息を切らした天馬とリュウが戻ってくる",
      "次第に辺りが暗くなってきた",
      "4人は東山の恋人が亡くなったという現場の検証に向かうことにする",
    ],
    changes: [],
  },
  {
    id: "scene-4-3-4",
    title: "事故現場",
    placeId: "place-accident-scene",
    characterIds: [
      "char-tenma",
      "char-ryuu",
      "char-minamikawa",
      "char-yuuko",
      "char-higashiyama",
    ],
    events: [
      "東山の恋人は交通事故で亡くなったことが判明",
      "4人が事故現場の道路に到着すると、そこには東山がいた",
      "陰から隠れて東山の様子をうかがう",
      "東山は道に花を供え、手を合わせるとすぐに立ち去った",
      "天馬が計測器を取り出しあたりのエネルギー値を測る",
      "エネルギーは高めでいつ霊が出てもおかしくないという結果",
      "白い光がふわりと通り過ぎていく",
      "これなら霊を呼び戻せるかもしれないと天馬が言う",
      "作戦を練ってまた出直そうと決める",
    ],
    changes: [
      {
        target: "作戦の進捗",
        before: "恋人の霊の手がかりがなかった",
        after: "事故現場のエネルギー値が高く、霊を呼び戻せる可能性を確認",
      },
    ],
  },
];
