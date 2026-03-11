import type { Scene } from "../../../../src";

export const scenes: Scene[] = [
  {
    id: "scene-2-1-1",
    title: "転校生の登場",
    placeId: "place-classroom",
    characterIds: ["char-tenma", "char-ryuu", "char-yuuko"],
    events: [
      "先生が転校生の来訪を告げる",
      "扉が開きユーコが入ってくる",
      "リュウが天馬にどうやったのか問い詰める",
      "天馬は昨夜のうちに職員室に忍び込んで細工をしたと明かす",
      "ユーコが自己紹介を終え天馬たちの方へ近づく",
      "先生が席を聞くとユーコは「天馬くんの隣がいい」と言う",
      "ユーコが「私たち付き合ってるんだよね」と公言する",
      "天馬は固まり、二人はクラスメイトに質問攻めにあう",
    ],
    changes: [
      {
        target: "天馬のクラス内の立場",
        before: "変人扱いされ孤立気味",
        after: "彼女持ちとして注目される（一時的）",
      },
      {
        target: "ユーコ",
        before: "幽霊",
        after: "転校生としてクラスに溶け込む",
      },
    ],
  },
];
