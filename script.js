// Write your JavaScript interactivity from scratch here
const pwd = document.getElementById('pwd');
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', () =>{
const isHidden = pwd.type === 'password';
pwd.type = isHidden ? 'text' : 'password';
btn.textContent = isHidden ? 'Hide' : 'Show';
})
