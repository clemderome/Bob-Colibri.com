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
for (let i = 0; i < changeColor.length; i++) {
    (function (h2) {
        window.setInterval(function () {
        h2.classList.toggle('blue')
        }, 1000)
    })(changeColor[i])
}

// A little game

    let initGame = document.querySelector('.playGame')

initGame.addEventListener('click', function () {
    var demo = window.confirm("On va jouer à un jeu >:ˆ)")
    console.log(demo)
    var devineLe = Math.round(Math.random() * 10)
    var essais = 3
    var essai
    for (var i = 0; i < 3; i++) {
        if (i == 0) {
            essai = prompt('Devine quel chiffre j\'ai en head ! Il se situe entre 0 et 10.  Attention, tu n\'as que 3 essais !')
        } else {
        essai = prompt('Try again my friend !')
        }
        essai = parseInt(essai, 10)
        if (essai == devineLe) {
            break
        } else if (essai > devineLe) {
            alert('Trop haut !')
        } else {
            alert('Trop bas !')
        }
    }
    if (essai == devineLe) {
        alert('Bien joué BG :ˆ)')
    } else {
        alert('Looooooseeeeeer :ˆ(')
    }
})