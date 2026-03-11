import type { Storyline } from "../../../src";
import { chapter1 } from "./chapter1";
import { chapter2 } from "./chapter2";
import { chapter3 } from "./chapter3";
import { chapter4 } from "./chapter4";

export const storyline: Storyline = {
  title: "ゴーストガールフレンド",
  synopsis:
    "高校デビューを目論む変わり者の天馬が、16年前に亡くなった少女ユーコの幽霊を見つけ、彼女のフリをしてもらう契約を結ぶ。ユーコを転校生として学校に送り込むが、クラスメイトの東山からの妨害や、ユーコ自身のこの世への未練と向き合うことになる。",
  chapters: [chapter1, chapter2, chapter3, chapter4],
};

export { chapter1, chapter2, chapter3, chapter4 };
