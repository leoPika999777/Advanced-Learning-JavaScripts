function getBase64Img(file) {
  //呼叫的時候會拿到一個promise
  if (!(file instanceof File)) {
    //如果這個東西不是這個類型 我們就不做 直接return
    return null;
  }
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    //FileReader的時間處理器  進來這邊表示處理完成
    //處理完成就開啟

    reader.onload = function () {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
}
