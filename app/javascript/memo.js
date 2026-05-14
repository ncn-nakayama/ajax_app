function post (){
  // 取得した投稿ボタンの要素を変数formに格納
   const form = document.getElementById("form");
  //  投稿されたことを確認
    form.addEventListener("submit", () => {
      const formData = new FormData(form);
      // 重複投稿されないようにする(投稿ボタンをクリックしたという現象を無効化)
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      // 非同期通信(JavaScript→サーバーサイトにリクエストを送信)
      const XHR = new XMLHttpRequest();
      // リクエスト内容を指定
      XHR.open("POST", "/posts", true);
      // サーバー→レスポンスのデータフォーマット(json)の形式を指定
      XHR.responseType = "json";
      // フォームの内容をサーバー側に送信
      XHR.send(formData);
    });
};

window.addEventListener('turbo:load', post); 