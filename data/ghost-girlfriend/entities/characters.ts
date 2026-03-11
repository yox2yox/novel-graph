import type { Character } from "../../../src";

export const tenma: Character = {
  id: "char-tenma",
  type: "character",
  name: "天馬",
  description:
    "高校デビューを目論む男子高校生。オカルトや変わった本に興味があり、周囲からは変人扱いされている。幽霊を彼女にするという突飛な計画を立てる行動力の持ち主。",
  personality: {
    traits: ["行動力がある", "変わり者", "意地っ張り", "計画的", "読書家"],
    values: ["友情", "自分を変えたいという向上心", "約束を守ること"],
    flaws: [
      "周囲の空気が読めない",
      "突飛な発想に走りがち",
      "異性に対して免疫がない",
    ],
  },
  goals: [
    "高校デビューを成功させる",
    "クラス内での地位を上げる",
    "リュウと並べる人間になる",
  ],
  motivation: "親友リュウと対等に並べる存在になりたいという強い思い",
  backstory:
    "中学時代からリュウとは親友。高校デビューのために様々な準備をしてきた。オカルト研究部に所属しており、幽霊に関するノートを発見したことがきっかけでユーコの存在を知る。",
  relationships: [
    {
      targetId: "char-ryuu",
      label: "親友",
      description:
        "中学からの親友。お互いを尊重する契約を結んでいる。天馬はリュウと並べる人間になることを目標にしている。",
    },
    {
      targetId: "char-yuuko",
      label: "偽りの恋人",
      description:
        "幽霊であるユーコをこの世に呼び戻し、彼女のフリをしてもらう契約を結んだ。次第に距離が縮まっていく。",
    },
  ],
};

export const ryuu: Character = {
  id: "char-ryuu",
  type: "character",
  name: "リュウ",
  description:
    "天馬の中学からの親友。サッカー部に所属しており、天馬とは対照的に社交的。天馬の無茶な計画に巻き込まれがち。",
  personality: {
    traits: ["社交的", "常識的", "ビビり", "スポーツマン"],
    values: ["友情", "約束"],
    flaws: ["天馬の無茶に逆らえない", "怖がり"],
  },
  goals: ["平穏な高校生活を送る"],
  motivation:
    "天馬との友情を大切にしつつも、巻き込まれたくないという葛藤",
  backstory:
    "中学時代に天馬と「お互いを尊重する」契約を結んだ。破れば女子の前で一発ギャグ100連発というペナルティがある。サッカー部に所属。",
  relationships: [
    {
      targetId: "char-tenma",
      label: "親友",
      description: "中学からの親友。天馬の無茶な計画にいつも巻き込まれる。",
    },
  ],
};

export const yuuko: Character = {
  id: "char-yuuko",
  type: "character",
  name: "椎名ユーコ",
  description:
    "16年前に亡くなった少女の幽霊。天馬の機械によってこの世に引き戻され、転校生として学校生活を送る。明るく積極的な性格で天馬をからかうのが好き。",
  personality: {
    traits: [
      "明るい",
      "積極的",
      "いたずら好き",
      "人懐っこい",
      "食いしん坊",
    ],
    values: ["楽しい学生生活", "会いたい人に会うこと"],
    flaws: ["距離感が近すぎる", "学校から離れるとエネルギーが減る"],
  },
  goals: ["楽しい学生生活を送る", "会いたい人に会う"],
  motivation: "この世への未練を果たすこと",
  backstory:
    "16年前に亡くなった少女。旧校舎の音楽室でピアノの音が聞こえるという噂の元になっていた。天馬に発見され、彼女のフリをする契約を結ぶ。学校から一定以上離れると体が消えかかる制約がある。",
  relationships: [
    {
      targetId: "char-tenma",
      label: "偽りの恋人",
      description:
        "天馬の彼女のフリをしている。天馬をからかったり積極的に迫ったりする。",
    },
  ],
};

export const uehara: Character = {
  id: "char-uehara",
  type: "character",
  name: "上原",
  description:
    "サッカー部のキャプテン。ユーコを口説こうとするが簡単にかわされる。",
  personality: {
    traits: ["軽い", "社交的", "お調子者"],
    values: [],
    flaws: ["軽薄"],
  },
  goals: [],
  motivation: "モテたい",
  backstory: "サッカー部のキャプテン。",
  relationships: [
    {
      targetId: "char-ono",
      label: "部活仲間",
      description: "サッカー部の副キャプテン小野とつるんでいる。",
    },
  ],
};

export const ono: Character = {
  id: "char-ono",
  type: "character",
  name: "小野",
  description:
    "サッカー部の副キャプテン。上原と一緒に行動することが多い。",
  personality: {
    traits: ["控えめ", "追従的"],
    values: [],
    flaws: [],
  },
  goals: [],
  motivation: "",
  backstory: "サッカー部の副キャプテン。上原と行動を共にする。",
  relationships: [
    {
      targetId: "char-uehara",
      label: "部活仲間",
      description: "サッカー部キャプテンの上原とつるんでいる。",
    },
  ],
};

export const higashiyama: Character = {
  id: "char-higashiyama",
  type: "character",
  name: "東山",
  description:
    "クラスの女子。天馬とユーコの関係に敵意を向け、天馬に嫌がらせを仕掛ける。過去に恋人を亡くした経験がある。",
  personality: {
    traits: ["攻撃的", "執念深い", "影響力がある"],
    values: [],
    flaws: [
      "他人の恋愛関係に過剰に干渉する",
      "過去のトラウマに囚われている",
    ],
  },
  goals: ["天馬とユーコを別れさせる"],
  motivation:
    "恋人の死をきっかけに、他人の恋人関係に対して厳しくなった",
  backstory:
    "かつては優しい性格だったが、恋人の死を境に変わってしまった。南川とは昔仲が良かった。恋人の霊を目撃したことがある。",
  relationships: [
    {
      targetId: "char-nishimori",
      label: "取り巻き",
      description: "一緒にユーコに詰め寄る仲間。",
    },
    {
      targetId: "char-minamikawa",
      label: "元友人",
      description: "昔は仲が良かったが、現在は疎遠。",
    },
  ],
};

export const nishimori: Character = {
  id: "char-nishimori",
  type: "character",
  name: "西森",
  description: "東山と行動を共にする女子生徒。",
  personality: {
    traits: ["追従的"],
    values: [],
    flaws: [],
  },
  goals: [],
  motivation: "",
  backstory: "東山の取り巻きとしてユーコに詰め寄る。",
  relationships: [
    {
      targetId: "char-higashiyama",
      label: "取り巻き",
      description: "東山に従って行動する。",
    },
  ],
};

export const minamikawa: Character = {
  id: "char-minamikawa",
  type: "character",
  name: "南川",
  description:
    "天馬に渡り廊下の幽霊の情報を教えてくれるクラスメイト。東山とは昔仲が良かった。",
  personality: {
    traits: ["親切", "情報通"],
    values: ["友情"],
    flaws: [],
  },
  goals: [],
  motivation: "東山のことを心配している",
  backstory:
    "東山とは昔仲が良かった。東山の過去や恋人のことを知っている人物。",
  relationships: [
    {
      targetId: "char-higashiyama",
      label: "元友人",
      description:
        "昔は仲が良かったが、東山が変わってしまい疎遠になった。",
    },
  ],
};

export const miko: Character = {
  id: "char-miko",
  type: "character",
  name: "ミコ",
  description:
    "天馬とリュウの共通の幼馴染。中学時代にリュウと恋人関係になり、それがきっかけで三人の仲に亀裂が入った。高校は別の学校に進学した。",
  personality: {
    traits: ["優しい", "気遣いができる", "素直"],
    values: ["友情", "過去の関係を修復したい"],
    flaws: ["自分を責めがち"],
  },
  goals: ["天馬やリュウとの関係を修復する"],
  motivation: "三人の友情を壊してしまったことへの罪悪感",
  backstory:
    "天馬とリュウの幼馴染。中学時代にリュウと恋人関係になったことで三人の関係が崩れた。その後リュウとは別れ、高校は別の学校に進学。文化祭で再会する。",
  relationships: [
    {
      targetId: "char-tenma",
      label: "幼馴染",
      description:
        "小さいころからの親友だったが、リュウとの恋愛がきっかけで疎遠になった。",
    },
    {
      targetId: "char-ryuu",
      label: "元恋人・幼馴染",
      description:
        "中学時代に恋人関係にあった。現在は別れているが、友人関係の修復を望んでいる。",
    },
  ],
};

export const homeRoomTeacher: Character = {
  id: "char-homeroom-teacher",
  type: "character",
  name: "担任",
  description: "天馬たちのクラスの担任教師。ユーコの書類の不正に気づく。",
  personality: {
    traits: ["厳格", "真面目"],
    values: ["規律"],
    flaws: ["融通が利かない"],
  },
  goals: [],
  motivation: "教師としての責任を果たすこと",
  backstory: "天馬たちのクラスの担任。ユーコの転入書類に不審な点を発見する。",
  relationships: [],
};

export const yuukoMother: Character = {
  id: "char-yuuko-mother",
  type: "character",
  name: "ユーコの母親",
  description:
    "16年前に亡くなったユーコの母親。かつて教育界で有名だったが、ユーコの遺書が原因でバッシングを受け世間から姿を消した。",
  personality: {
    traits: ["厳格だった", "後悔に苛まれている"],
    values: ["娘への愛情"],
    flaws: ["過去に娘に過度なプレッシャーを与えていた"],
  },
  goals: ["娘に許しを請うこと"],
  motivation: "娘を失った後悔と償いの気持ち",
  backstory:
    "ユーコに成績のプレッシャーを与え、友人関係や趣味を禁止し軟禁状態にしていた。ユーコの自殺後、遺書の内容が公になりバッシングを受けて世間から消えた。現在はユーコの部屋を再現し、写真を飾りながら暮らしている。",
  relationships: [
    {
      targetId: "char-yuuko",
      label: "母娘",
      description:
        "生前は過度な教育圧力で娘を追い詰めたが、死後はその罪を悔い続けている。",
    },
  ],
};

export const oobaYuumi: Character = {
  id: "char-ooba-yuumi",
  type: "character",
  name: "大場ユウミ",
  description:
    "ユーコと瓜二つの容姿を持つ少女。物語の最後に天馬のクラスに現れる。",
  personality: {
    traits: [],
    values: [],
    flaws: [],
  },
  goals: [],
  motivation: "",
  backstory:
    "ユーコが消えてから半年後に天馬のクラスに現れた少女。ユーコと瓜二つの容姿を持つ。",
  relationships: [],
};

export const characters: Character[] = [
  tenma,
  ryuu,
  yuuko,
  uehara,
  ono,
  higashiyama,
  nishimori,
  minamikawa,
  miko,
  homeRoomTeacher,
  yuukoMother,
  oobaYuumi,
];
