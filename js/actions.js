// vim: sts=2 sw=2 ts=2 expandtab

import * as RC from "./const/reducer_type";
import get_job_data from "./get_job_data.js";

function set_state_job_fetching() {
  return { type: RC.state.FETCHING, selector: RC.data_type.JOB };
}

function set_state_job_loaded() {
  return { type: RC.state.LOADED, selector: RC.data_type.JOB };
}

function set_job_data(data) {
  return { type: RC.job.ASSIGN, job: data };
}

export function fetch_job_data(url) {
  return function (dispatch) {
    dispatch(set_state_job_fetching());
    get_job_data(url).then((job) => {
      dispatch(set_job_data(job));
      dispatch(set_state_job_loaded());
      return Promise.resolve(job);
    });
  }
}
