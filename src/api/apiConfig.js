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
  },
  file: {
    upload: '/upload',
  },
  org: {
    orgListByUser: '/org/list/get',
    createOrg: '/org/create'
  },
};
