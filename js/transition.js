// 網頁跳轉

// 獲取所有具有 transition-link 類別的超連結
const transitionLinks = document.querySelectorAll('.transition-link');

// 監聽每個超連結的點擊事件
transitionLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // 阻止超連結的默認行為

    // 在跳轉前添加過渡效果元素
    const transitionOverlay = document.querySelector('.transition-overlay');
    transitionOverlay.classList.add('show-overlay');

    // 等待一定時間後進行頁面跳轉
    setTimeout(() => {
      window.location = link.href; 
    }, 500); // 過渡效果的時間
  });
});



//表單提交

const form = document.getElementById('myForm');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 



  alert('訂位成功！');


  window.location.href="./首頁.html";
});