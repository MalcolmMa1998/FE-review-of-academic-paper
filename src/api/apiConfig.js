/**
 * @file api url config
 * @author Mingze Ma
 */

export default {
  user: {
    login: '/user/login',
    register: '/user/register',
    info: '/user/info/get',
    logout: 'user/logout',
    searchUser: '/user/search',
  },
  file: {
    upload: '/upload',
  },
  org: {
    orgListByUser: '/org/list/get',
    createOrg: '/org/create',
    orgInfo: 'org/detail/get',
    submissionCount: '/org/submission_count/get',
  },
  review: {
    createReview: '/review/submission/create',
    submissionList: '/review/submission_list/get',
    biddingPref: '/review/bidding/pref/set',
  },
};
