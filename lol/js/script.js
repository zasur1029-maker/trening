function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}



function handleAuth(event, type) {
    event.preventDefault();

    const btn = type === 'login' ? document.getElementById('login-btn') : document.getElementById('signup-btn');
    btn.innerText = "Please wait...";
    btn.disabled = true;

    setTimeout(() => {
        // СОХРАНЯЕМ ВХОД В ПАМЯТЬ БРАУЗЕРА
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', 'User'); // Можно добавить ввод имени

        window.location.href = "index.html";
    }, 1000);
}




function toggleMenu() {
    var menu = document.getElementById("side-menu");
    if (menu.style.width === "250px") {
        menu.style.width = "0";
    } else {
        menu.style.width = "250px";
    }
}
