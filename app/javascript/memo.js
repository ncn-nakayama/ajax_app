const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

function post (){
  // 取得した投稿ボタンの要素を変数formに格納
   const form = document.getElementById("form");
      // 重複投稿されないようにする(投稿ボタンをクリックしたという現象を無効化)
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      const formData = new FormData(form);
       // 非同期通信(JavaScript→サーバーサイトにリクエストを送信)
      const XHR = new XMLHttpRequest();
      // リクエスト内容を指定
      XHR.open("POST", "/posts", true);
      // サーバー→レスポンスのデータフォーマット(json)の形式を指定
      XHR.responseType = "json";
      // フォームの内容をサーバー側に送信
      XHR.send(formData);
      // 通信が成功した場合
      XHR.onload = () => {
        if (XHR.status != 200) {
          alert(`Error ${XHR.status}: ${XHR.statusText}`);
          return null;
        };
        const list = document.getElementById("list");
        const formText = document.getElementById("content");
        list.insertAdjacentHTML("afterend", buildHTML(XHR));
        console.log(formText.value);
        const item = XHR.response.post;
        const html = `
          <div class="post">
            <div class="post-date">
              投稿日時：${item.created_at}
            </div>
            <div class="post-content">
              ${item.content}
            </div>
          </div>`;
        list.insertAdjacentHTML("afterend", html);
        // フォームの中身をリセット
        formText.value = "";
      };
    });
};

window.addEventListener('turbo:load', post);