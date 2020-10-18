export default async (ctx, next) => {
  console.log(ctx);
  function getData() {
    return new Promise(function (resolve, reject) {
      let num = Math.random() * 10;
      if (num > 5) {
        setTimeout(() => {
          resolve("请求返回的数据");
        }, 3000);
      } else {
        setTimeout(() => {
          reject("请求失败!!!");
        }, 1000);
      }
    });
  }
  try {
    let res = await getData();
    console.log(res);
    ctx.body = {
      code: 200,
      msg: "成功",
      data: {
        news: "新闻",
        base: res,
      },
    };
  } catch (err) {
    ctx.body = {
      code: 1,
      msg: "失败",
      err: err,
    };
  }
};
