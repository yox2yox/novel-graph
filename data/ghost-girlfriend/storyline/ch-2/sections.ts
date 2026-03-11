import type { Section } from "../../../src";
import { scenes as sec21Scenes } from "./sec-2-1/scenes";
import { scenes as sec22Scenes } from "./sec-2-2/scenes";
import { scenes as sec23Scenes } from "./sec-2-3/scenes";

export const sections: Section[] = [
  {
    id: "sec-2-1",
    title: "転校生ユーコ",
    summary:
      "ユーコが転校生として登場し、クラス中に天馬との交際が知れ渡る。",
    scenes: sec21Scenes,
  },
  {
    id: "sec-2-2",
    title: "二人の距離",
    summary:
      "天馬はすぐに飽きられるが、ユーコとの距離は少しずつ縮まっていく。ユーコの未練の一端が明かされる。",
    scenes: sec22Scenes,
  },
  {
    id: "sec-2-3",
    title: "ユーコの制約",
    summary:
      "下校時にユーコが学校から離れると体が消えかかることが判明。ユーコのお気に入りの公園で二人の距離がさらに縮まる。",
    scenes: sec23Scenes,
  },
];
