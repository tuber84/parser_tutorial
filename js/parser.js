window.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector("body");
  let textNodes = []; //пустой массив, куда будем заносить результат парсинга

  function recursy(element) {
    //проходимся по всем элементам страницы с помощью рекурсии
    element.childNodes.forEach((node) => {
      if (node.nodeName.match(/^H\d/)) {
        const obj = {
          //записываем содрежимое тегов в отдельный обьект
          header: node.nodeName,
          content: node.textContent,
        };
        textNodes.push(obj); //заполняем обьектами массив
      } else {
        recursy(node);
      }
    });
  }
  recursy(body);
  console.log(textNodes);

  fetch("https://jsonplaceholder.typicode.com/posts", {
    //отправляем массив обьектов загловков на сервер
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(textNodes),
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});
