// vim: sts=2 sw=2 ts=2 expandtab

// 外部からjob_dataとしてJSONデータを取りこむ
// jQueryが必要
var job_promise = {};
var job_json = {};
export default function get_job_data (job_url) {
  let url = job_url ? job_url : "data/job_data.json";
  job_promise[url] = job_promise[url] || fetch(url);
  // Promiseオブジェクトを返すことで待つことを可能にする
  // see_also: http://qiita.com/koki_cheese/items/c559da338a3d307c9d88
  return job_promise[url].then(function(response) {
    if (job_json[url]) {
      return Promise.resolve(job_json[url]);
    } else {
      return Promise.resolve(response).then(function(j) {
        job_json[url] = j.json();
        return job_json[url];
      });
    }
  });
}


