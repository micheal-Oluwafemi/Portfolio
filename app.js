const btn = document.getElementById('menu-btn');
const menuLinks = document.getElementById('menu');
const hLinks = document.querySelectorAll('#hLink');
const body = document.querySelector('body');
const moon = document.querySelector('#moon');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  menuLinks.classList.toggle('hidden');
  document.getElementById('h1').classList.toggle('bg-white');
  document.getElementById('h1').classList.toggle('bg-black');

  document.getElementById('h2').classList.toggle('bg-white');
  document.getElementById('h2').classList.toggle('bg-black');

  document.getElementById('h3').classList.toggle('bg-white');
  document.getElementById('h3').classList.toggle('bg-black');
});

hLinks.forEach((link) => {
  link.addEventListener('click', () => {
    btn.classList.toggle('open');
    menuLinks.classList.toggle('hidden');
    document.getElementById('h1').classList.toggle('bg-white');
    document.getElementById('h1').classList.toggle('bg-black');

    document.getElementById('h2').classList.toggle('bg-white');
    document.getElementById('h2').classList.toggle('bg-black');

    document.getElementById('h3').classList.toggle('bg-white');
    document.getElementById('h3').classList.toggle('bg-black');
  });
});

// Moon
moon.addEventListener('click', () => {
  body.classList.toggle('dark');
});
