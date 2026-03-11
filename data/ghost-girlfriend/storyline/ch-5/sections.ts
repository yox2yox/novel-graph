import type { Section } from "../../../src";
import { scenes as sec51Scenes } from "./sec-5-1/scenes";
import { scenes as sec52Scenes } from "./sec-5-2/scenes";
import { scenes as sec53Scenes } from "./sec-5-3/scenes";
import { scenes as sec54Scenes } from "./sec-5-4/scenes";
import { scenes as sec55Scenes } from "./sec-5-5/scenes";

export const sections: Section[] = [
  {
    id: "sec-5-1",
    title: "お化け屋敷の準備",
    summary:
      "天馬がお化け屋敷でエネルギー収集を企画。ユーコは南川に天馬への恋愛感情を打ち明ける。",
    scenes: sec51Scenes,
  },
  {
    id: "sec-5-2",
    title: "買い物デート",
    summary:
      "天馬とユーコが買い出しに出かけ、おそろいのキーホルダーを購入。帰り道にユーコが天馬と手をつなぎ、天馬の家へ向かう。",
    scenes: sec52Scenes,
  },
  {
    id: "sec-5-3",
    title: "二人きりの夜",
    summary:
      "天馬の家でユーコが積極的に迫り、同じベッドで眠る。ユーコはこの時間が続くことを願う。",
    scenes: sec53Scenes,
  },
  {
    id: "sec-5-4",
    title: "文化祭当日",
    summary:
      "お化け屋敷は大盛況だが、幼馴染ミコの登場で天馬の過去のトラウマが再燃。ユーコに励まされ、天馬はミコとリュウに謝罪して和解する。",
    scenes: sec54Scenes,
  },
  {
    id: "sec-5-5",
    title: "霊界への突入",
    summary:
      "エネルギー収集機械の暴走でユーコが霊界に連れ去られる。天馬たちは霊界に飛び込み、おそろいのキーホルダーの力とユーコの新しい未練の力でユーコを救出して現実に戻る。",
    scenes: sec55Scenes,
  },
];
