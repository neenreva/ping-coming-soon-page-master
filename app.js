const email = document.querySelector(".form-container__input");
const notifyBtn = document.querySelector(".form-container__btn");
const error = document.querySelector(".error");

console.log(notifyBtn.innerHTML);

const validation = function () {
  if (!error.classList.contains("hidden")) {
    error.classList.add("hidden");
    email.style.border = "1px solid hsl(223, 100%, 88%)";
    notifyBtn.innerHTML = 'Notify Me'
  }
  if (!email.value.match(/^\S+@\S+\.\S+$/m)) {
    error.classList.remove("hidden");
    email.style.border = "1px solid red";
    notifyBtn.innerHTML = 'Notify Me'
  } else {
      notifyBtn.innerHTML = 'Thank you';
  }
};

email.addEventListener("keydown", (e) => {
  if (e.key === "Enter") validation();
});

notifyBtn.addEventListener("click", validation);
