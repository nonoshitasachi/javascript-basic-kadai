console.log(document.getElementById("text"));
console.log(document.getElementById("btn"));

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  text.textContent = "ボタンをクリックしました";
});
