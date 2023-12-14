// hello, username !.js
const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm .nameInput");
const greeting = document.querySelector("#greeting");

function onLoginSumit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("username", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username} !`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit",onLoginSumit);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit",onLoginSumit);
} else {
  paintGreetings(savedUsername);
}