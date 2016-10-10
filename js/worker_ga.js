// vim: sts=2 sw=2 ts=2 expandtab

/*
 * 編成最適化計算機ワーカーのエントリーポイント
 */

import { GrblFormGAOptimizer, CALC_STATE } from "./optimize_atk.js";

self.addEventListener("message", (e) => {
  let data = e.data;
  self.postMessage("HELLO!");
}, false);

