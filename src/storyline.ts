/** 起承転結における位置づけ */
export type NarrativePhase =
  | "introduction"  // 起: 物語の導入
  | "development"   // 承: 物語の展開
  | "twist"         // 転: 物語の転換
  | "conclusion";   // 結: 物語の結末

/** 主人公の目的に対する物語の方向性 */
export type StoryDirection =
  | "advance"   // 目的に向かって進展する
  | "setback"   // 目的に対して後退する
  | "neutral";  // 直接的な進退はないが重要な展開がある

/** シーンにおける変化 */
export interface SceneChange {
  /** 変化の対象（キャラクター名、関係性、状況など） */
  target: string;
  /** 変化前の状態 */
  before: string;
  /** 変化後の状態 */
  after: string;
}

/** 第四階層: ボディ — シーンを小説として修飾した本文 */
export interface Body {
  /** 対応するシーンのID */
  sceneId: string;
  /** 小説として読みごたえのある修飾された文章 */
  text: string;
}

/** 第三階層: シーン — 場面ごとの単位 */
export interface Scene {
  id: string;
  title: string;
  /** 場所のエンティティID */
  placeId: string;
  /** 登場するキャラクターのエンティティID一覧 */
  characterIds: string[];
  /** そのシーンで起きることの箇条書き */
  events: string[];
  /** シーンで起きる変化 */
  changes: SceneChange[];
  /** 対応するボディ（執筆後に付与） */
  body?: Body;
}

/** 第二階層: セクション — 重要な変化のある単位 */
export interface Section {
  id: string;
  title: string;
  /** このセクションで起きる重要な変化の要約 */
  summary: string;
  /** セクションに含まれるシーン */
  scenes: Scene[];
}

/** 第一階層: チャプター — 大きな物語の区切り */
export interface Chapter {
  id: string;
  title: string;
  /** このチャプターで何が起きるかの簡潔な説明 */
  summary: string;
  /** 起承転結における位置づけ */
  phase: NarrativePhase;
  /** 主人公の目的に対する物語の方向性 */
  direction: StoryDirection;
  /** チャプターに含まれるセクション */
  sections: Section[];
}

/** ストーリーライン全体 */
export interface Storyline {
  title: string;
  /** 物語全体の概要 */
  synopsis: string;
  /** チャプター一覧 */
  chapters: Chapter[];
}
