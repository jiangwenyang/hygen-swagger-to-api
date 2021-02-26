const fetch = require('node-fetch');

const getSwaggerDoc = async (url: string) => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    console.log(response.text());
  }
};

getSwaggerDoc('http://36.110.47.222:11703/user/v2/api-docs').then((value) =>
  console.log(value)
);
