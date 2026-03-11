import type { Item } from "../../../src";

export const ghostNotebook: Item = {
  id: "item-ghost-notebook",
  type: "item",
  name: "幽霊ノート",
  description:
    "幽霊に関する情報が記されたノート。オカルト研部室で天馬が発見した。",
  effect: "幽霊の存在や出現場所に関する情報を提供する。",
  significance:
    "天馬が幽霊彼女計画を思いつくきっかけとなった重要アイテム。",
};

export const summoningMachine: Item = {
  id: "item-summoning-machine",
  type: "item",
  name: "召喚装置",
  description:
    "ユーコをあの世からこの世に引き戻すために天馬が使用した機械。",
  effect: "幽霊をこの世に引き戻し、物理的に存在できるようにする。",
  significance:
    "ユーコを転校生として学校に通わせることを可能にした装置。",
};

export const higashiyamaNotebook: Item = {
  id: "item-higashiyama-notebook",
  type: "item",
  name: "東山のノート",
  description:
    "東山が使っていたノート。霊を封じ込める力がある。",
  effect: "幽霊をノートの中に封じ込めることができる。",
  significance:
    "渡り廊下の幽霊を封じ込め、東山への対抗手段となった。",
};

export const items: Item[] = [
  ghostNotebook,
  summoningMachine,
  higashiyamaNotebook,
];
