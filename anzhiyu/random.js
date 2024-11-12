var posts=["2024/11/12/你好-世界/","2024/11/09/hello-world/","2024/11/09/测试内容/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };