import fetch from 'node-fetch';

const getSwaggerDoc = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.log(`请求失败：${error}`);
  }
};

getSwaggerDoc('http://36.110.47.222:11703/user/v2/api-docs').then((value) =>
  console.log(value)
);
