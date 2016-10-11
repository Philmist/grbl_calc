// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化WebWorkerとのやりとりをするための
 * 定数群
 */

export const WORKER_STATE = {
  INITIAL: "INITIAL",  // 初期のまっさらな状態
  RUNNING: "RUNNING"  // GAによる最適化ルーチンが走っている状態
};

export const WORKER_COMMAND = {
  GET_STATE: "GET_STATE",  // Workerの現在の状態を取得する
  SET_GA_PARAM: "SET_GA_PARAM",  // GAのパラメータを設定する
  SET_BASIC_INFO: "SET_BASIC_INFO",  // 基礎的な攻撃力等のパラメータを設定する
  SET_WEAPON: "SET_WEAPON",  // 武器の配列を設定する
  SET_SUMMON: "SET_SUMMON",  // 召喚の配列を設定する
  SET_FRIEND: "SET_FRIEND"  // フレンド召喚の配列を設定する
};
