/** エンティティの種類 */
export type EntityType = "character" | "place" | "item";

/** すべてのエンティティが持つ共通フィールド */
export interface EntityBase {
  id: string;
  type: EntityType;
  name: string;
  description: string;
}

/** キャラクターの性格特性 */
export interface Personality {
  /** 性格の特徴（例: 「内向的」「正義感が強い」） */
  traits: string[];
  /** 価値観・信念 */
  values: string[];
  /** 弱点・欠点 */
  flaws: string[];
}

/** キャラクター */
export interface Character extends EntityBase {
  type: "character";
  /** 性格 */
  personality: Personality;
  /** 目的・目標 */
  goals: string[];
  /** 動機・行動原理 */
  motivation: string;
  /** 背景・経歴 */
  backstory: string;
  /** 他キャラクターとの関係 */
  relationships: Relationship[];
}

/** キャラクター間の関係 */
export interface Relationship {
  /** 関係先キャラクターのID */
  targetId: string;
  /** 関係の種類（例: 「友人」「ライバル」「師弟」） */
  label: string;
  /** 関係の補足説明 */
  description: string;
}

/** 場所 */
export interface Place extends EntityBase {
  type: "place";
  /** 場所の雰囲気・特徴 */
  atmosphere: string;
  /** 物語における役割・重要性 */
  significance: string;
}

/** アイテム */
export interface Item extends EntityBase {
  type: "item";
  /** アイテムの効果・機能 */
  effect: string;
  /** 物語における役割・重要性 */
  significance: string;
}

/** エンティティのユニオン型 */
export type Entity = Character | Place | Item;
