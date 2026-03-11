import type { Place } from "../../../src";

export const musicRoom: Place = {
  id: "place-music-room",
  type: "place",
  name: "旧校舎音楽室",
  description:
    "誰もいないはずの旧校舎にある音楽室。夜になるとピアノの音が聞こえるという噂がある。",
  atmosphere: "不気味で静寂に包まれた空間。夜はピアノの音だけが響く。",
  significance: "ユーコが出現する場所。天馬とユーコの出会いの場。",
};

export const classroom: Place = {
  id: "place-classroom",
  type: "place",
  name: "教室",
  description: "天馬たちのホームルーム教室。",
  atmosphere:
    "賑やかで日常的な空間。天馬にとっては居心地が悪い場所でもある。",
  significance: "物語の多くのイベントが発生する中心的な舞台。",
};

export const occultClub: Place = {
  id: "place-occult-club",
  type: "place",
  name: "オカルト研部室",
  description:
    "オカルト研究部の部室。怪しげな資料やアイテムが置かれている。",
  atmosphere: "薄暗く、怪しげな雰囲気。",
  significance: "天馬が幽霊に関するノートを発見した場所。計画の起点。",
};

export const hallway: Place = {
  id: "place-hallway",
  type: "place",
  name: "廊下",
  description: "教室の外の廊下。教室内の様子が見える。",
  atmosphere: "教室の賑わいとは対照的に静かな空間。",
  significance: "天馬が疎外感を感じる場所。",
};

export const courtyard: Place = {
  id: "place-courtyard",
  type: "place",
  name: "中庭",
  description: "学校の中庭。昼食を食べたり休憩したりする場所。",
  atmosphere: "開放的で穏やかな空間。",
  significance: "天馬とユーコが親密になる場所。",
};

export const schoolRoad: Place = {
  id: "place-school-road",
  type: "place",
  name: "帰り道",
  description: "学校から自宅への通学路。校門から続く道。",
  atmosphere: "放課後の静かな雰囲気。",
  significance:
    "ユーコが学校から離れると体が消えかかることが判明する場所。",
};

export const hilltopPark: Place = {
  id: "place-park",
  type: "place",
  name: "高台の公園",
  description:
    "さびれた高台の上にある公園。自然に囲まれた気持ちの良い場所。",
  atmosphere: "自然に囲まれて気持ちがいい、静かな場所。",
  significance:
    "ユーコのお気に入りの場所。二人の距離が縮まる重要な場所。",
};

export const corridor3f: Place = {
  id: "place-corridor-3f",
  type: "place",
  name: "3階渡り廊下",
  description:
    "学校の3階にある渡り廊下。幽霊が出ると噂されている。",
  atmosphere: "不気味で、不幸な出来事が度々起きる場所。",
  significance:
    "東山に関連する幽霊が出没する場所。天馬が幽霊を捕獲する作戦の舞台。",
};

export const stationCafe: Place = {
  id: "place-cafe",
  type: "place",
  name: "駅前カフェ",
  description: "駅前にあるカフェ。",
  atmosphere: "おしゃれで落ち着いた雰囲気。",
  significance:
    "天馬とユーコが恋人であることを監視者に見せつけるための場所。",
};

export const seasideTown: Place = {
  id: "place-seaside-town",
  type: "place",
  name: "海辺の町",
  description: "東山や南川の地元である海辺の町。",
  atmosphere: "開放的な海辺の雰囲気。",
  significance:
    "東山の恋人の霊を探しに行く目的地。更衣室事件の舞台。",
};

export const accidentScene: Place = {
  id: "place-accident-scene",
  type: "place",
  name: "事故現場の道路",
  description: "東山の恋人が交通事故で亡くなった道路。花が供えられている。",
  atmosphere: "車通りのある道路だが、夜になると霊的なエネルギーが高まる。",
  significance:
    "東山の恋人の霊を呼び出す作戦の舞台。天馬が東山と向き合う場所。",
};

export const places: Place[] = [
  musicRoom,
  classroom,
  occultClub,
  hallway,
  courtyard,
  schoolRoad,
  hilltopPark,
  corridor3f,
  stationCafe,
  seasideTown,
  accidentScene,
];
