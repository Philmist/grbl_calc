// vim: sts=2 sw=2 ts=2 expandtab

// JOBのデータを渡すモジュール

import job_json from "./const/job_data.js";

// 今となっては残骸のjobデータを渡すモジュール
export default function get_job_data () {
  return Promise.resolve(job_json);
}
