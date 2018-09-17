import Mock from 'mockjs';
import apiOther from './apiOther';

const isDev = process.env.NODE_ENV === 'development' ? true : false; 

if (isDev) {
  Mock.mock(/\/apiOther\/newTest/, 'get', apiOther.newTest);
}

