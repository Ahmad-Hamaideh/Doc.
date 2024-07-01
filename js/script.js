let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () => {
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () => {
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

// تأكد من تفعيل الوضع الداكن عند تحميل الصفحة
if (!darkMode || darkMode === 'enabled') {
   enableDarkMode();
} else {
   disableDarkMode();
}

toggleBtn.onclick = (e) => {
   darkMode = localStorage.getItem('dark-mode');
   if (darkMode === 'enabled') {
      disableDarkMode();
   } else {
      enableDarkMode();
   }
}

let profile = document.querySelector('.header .flex .profile');
let search = document.querySelector('.header .flex .search-form');
let sideBar = document.querySelector('.side-bar');

// إخفاء البروفايل بشكل دائم عند تحميل الصفحة
profile.classList.remove('active');

document.querySelector('#user-btn').onclick = () => {
   // تأكد من بقاء البروفايل مخفيًا دائمًا
   profile.classList.remove('active');
   search.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () => {
   search.classList.toggle('active');
   profile.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () => {
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () => {
   profile.classList.remove('active');
   search.classList.remove('active');

   // لا تقم بإلغاء تنشيط الـ sidebar عند التمرير
}

// ضمان إخفاء البروفايل عند تحميل الصفحة
window.onload = () => {
   profile.classList.remove('active');
}
