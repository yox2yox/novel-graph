import type { Section } from "../../../src";
import { scenes as sec71Scenes } from "./sec-7-1/scenes";
import { scenes as sec72Scenes } from "./sec-7-2/scenes";
import { scenes as sec73Scenes } from "./sec-7-3/scenes";
import { scenes as sec74Scenes } from "./sec-7-4/scenes";

export const sections: Section[] = [
  {
    id: "sec-7-1",
    title: "夏祭り",
    summary:
      "ユーコが夏祭りで天馬に本当の恋人になってほしいと告白するが、天馬ははぐらかして返事をしない。",
    scenes: sec71Scenes,
  },
  {
    id: "sec-7-2",
    title: "告白の行方",
    summary:
      "ユーコは何度も返事を求めるが天馬は避け続ける。天馬は告白に答えればユーコが成仏してしまうことを恐れていた。",
    scenes: sec72Scenes,
  },
  {
    id: "sec-7-3",
    title: "迫りくる危機",
    summary:
      "エネルギーの集めすぎで学校に霊が集まり被害が続出。ユーコが原因だと判明し、周囲の目が厳しくなる。",
    scenes: sec73Scenes,
  },
  {
    id: "sec-7-4",
    title: "別れと再会",
    summary:
      "悪霊がユーコを霊界に引き戻そうとする。クラスメイトが大切なものを犠牲にし、天馬が泣きながら告白してユーコを救うが、ユーコはキスをして消えてしまう。半年後、ユーコと瓜二つの少女・大場ユウミが現れる。",
    scenes: sec74Scenes,
  },
];
