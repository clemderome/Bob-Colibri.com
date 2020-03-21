// Dark mode

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        alert('Ça pique les yeux hein ?');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        alert('Attention, levée de rideau !');
    }    
}

const toggler = document.querySelector('#toggler');
toggler.addEventListener('change', switchTheme, false);

// Change color

const changeColor = document.querySelectorAll('h2')
for (const i = 0; i < changeColor.length; i++) {
    (function (h2) {
        window.setInterval(function () {
        h2.classList.toggle('blue')
        }, 1000)
    })(changeColor[i])
}