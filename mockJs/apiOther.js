import Mock from 'mockjs';

export default {
  newTest: config => {
    return {
      code: '00000',
      msg: '',
      data: {
        currentDate: Mock.mock('@date("yyyy-MM-dd")')
      }
    };
  }
};