import type { Section } from "../../../src";
import { scenes as sec31Scenes } from "./sec-3-1/scenes";
import { scenes as sec32Scenes } from "./sec-3-2/scenes";
import { scenes as sec33Scenes } from "./sec-3-3/scenes";

export const sections: Section[] = [
  {
    id: "sec-3-1",
    title: "周囲の反応",
    summary:
      "上原がユーコに接触し、東山がユーコに天馬と別れるよう迫る。天馬への風当たりが強くなり始める。",
    scenes: sec31Scenes,
  },
  {
    id: "sec-3-2",
    title: "嫌がらせと反撃",
    summary:
      "天馬への嫌がらせがエスカレートする。天馬とユーコはカフェデートで反撃を試みる。",
    scenes: sec32Scenes,
  },
  {
    id: "sec-3-3",
    title: "渡り廊下の幽霊",
    summary:
      "南川から渡り廊下の幽霊の話を聞き、天馬たちは幽霊を東山のノートに封じ込めることに成功する。",
    scenes: sec33Scenes,
  },
];
