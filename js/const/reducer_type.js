// vim: sts=2 sw=2 ts=2 expandtab
// 主にreducerで使ったり渡したりする定数集

export const state = {
  FETCHING: "DATA_FETCHING",
  LOADING: "DATA_LOADING",
  LOADED: "DATA_LOADED",
  COMPUTING: "DATA_COMPUTING",
  ERROR: "DATA_ERROR"
};

export const data_type = {
  JOB: "TYPE_JOB"
};

export const job = {
  ASSIGN: "JOB_ASSIGN",
  DELETE: "JOB_DELETE"
};

export const weapon = {
  APPEND: "WEAPON_APPEND",
  DELETE: "WEAPON_DELETE",
  REPLACE: "WEAPON_REPLACE",
  MOVE: "WEAPON_MOVE",
  ENABLE: "WEAPON_ENABLE",
  DISABLE: "WEAPON_DISABLE",
  COSMOS: "WEAPON_SET_COSMOS"
};

export const summon = {
  APPEND: "SUMMON_APPEND",
  DELETE: "SUMMON_DELETE",
  REPLACE: "SUMMON_REPLACE",
  MOVE: "SUMMON_MOVE",
  ENABLE: "SUMMON_ENABLE",
  DISABLE: "SUMMON_DISABLE"
};

export const basic = {
  ATK_PERCENT: "BASIC_SET_ATK_PERCENT",
  ATK_VALUE: "BASIC_SET_ATK_VALUE",
  ZENITH_ATK: "BASIC_SET_ZENITH_ATKVAL",
  ZENITH_WEAPON: "BASIC_SET_ZENITH_WEAPON",
  ZENITH_ATTR: "BASIC_SET_ZENITH_ATTR",
  RANK: "BASIC_SET_RANK",
  SHIP_BONUS: "BASIC_SET_SHIP_BONUS",
  HP_PERCENT: "BASIC_SET_HP_PERCENT",
  AFFINITY: "BASIC_SET_AFFINITY",
  JOB: "BASIC_SET_JOB"
};
