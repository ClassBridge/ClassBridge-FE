export const USER_TABLE = "user";
export const TUTOR_TABLE = "tutor";
export const CLASS_TABLE = "class";

export const PROFILE_BUCKET = "profile";
export const CLASS_BUCKET = "class";
export const REVIEW_BUCKET = "review";

export type Buckets =
  | typeof PROFILE_BUCKET
  | typeof CLASS_BUCKET
  | typeof REVIEW_BUCKET;
