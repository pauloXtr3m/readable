/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const LOAD_APPLICATION = 'app/LOAD_APPLICATION';

export const LOAD_APPLICATION_SUCCESS = 'app/LOAD_APPLICATION_SUCCESS';

export const LOAD_APPLICATION_ERROR = 'app/LOAD_APPLICATION_ERROR';

export const VOTE = 'app/home/VOTE';
export const VOTE_SUCCESS = 'app/home/VOTE_UP_SUCCESS';
export const VOTE_ERROR = 'app/home/VOTE_UP_ERROR';

export const DOWN_VOTE = 'downVote';
export const UP_VOTE = 'upVote';
