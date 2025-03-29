// 导航栏菜单切换
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// 点击空白处关闭导航栏
document.addEventListener('click', function (event) {
    const isClickInsideMenu = navMenu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (navMenu.classList.contains('active') &&!isClickInsideMenu &&!isClickOnToggle) {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});

// 示例交互：当页面加载完成后，给导航栏添加一个激活状态
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('#nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});