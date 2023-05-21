import request from '@/utils/request';

export const getnew = (title, body) => {
  return request({
    url: '/newssort',
    method: 'POST',
    // title和body作为请求体数据传递
    data: {
      title: title,
      body: body
    }
  });
};

export default { getnew };