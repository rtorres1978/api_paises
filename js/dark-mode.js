const btndarkmode = document.querySelector(".btn-dark-mode");

btndarkmode.addEventListener("click", () => {
  console.log("me estas dando click");
  document.body.classList.toggle("dark-mode");

  if (document.body.className === "dark-mode") {
    btndarkmode.innerHTML = `
     <i class="fa-regular fa-sun"></i>
     Ligt Mode
   `;
  } else {
    btndarkmode.innerHTML = `
    <i class="fa-regular fa-moon"></i>
   Dart Mode
      `;
  }
});
