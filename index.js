const drums = document.querySelectorAll('.drum')


drums.forEach((drum) => {
    drum.addEventListener('click', () => {
        const buttonText = drum.textContent
        playBaraban(buttonText)
        animationButton(buttonText)
    })
})

document.addEventListener('keydown', (e) => {
    const keyboardKey = e.key
    keyboardKey(keyboardKey)
    animationButton(keyboardKey)

    
})


    function playBaraban(key) {
        switch (key) {
            case 'w':
                const crash = new Audio('sounds/crash.mp3')
                crash.play()
                break;
            case 'a':
                const kickBass = new Audio('sounds/kick-bass.mp3')
                kickBass.play()
                break;
            case 's':
                const snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;
            case 'd':
                const tom1 = new Audio('./sounds/tom-1.mp3')
                tom1.play()
                break;
            case 'j':
                const tom2 = new Audio('./sounds/tom-2.mp3')
                tom2.play()
                break;
            case 'k':
                const tom3 = new Audio('./sounds/tom-3.mp3')
                tom3.play()
                break;
            case 'l':
                const tom4 = new Audio('./sounds/tom-4.mp3')
                tom4.play()
                break;
            default:
                console.log(keyboardKey);
        }
    }

    function animationButton(key) {
        const button = document.querySelector(`.${key}`)
        button.classList.add('pressed')
        setTimeout(() => {
            button.classList.remove('pressed')
        }, 100);
    }



















    //     if (buttonText == 'w') {
    //         const crash = new Audio('./sounds/crash.mp3')
    //         crash.play()
    //     } else if (buttonText == 'a') {
    //         const kickBass = new Audio('./sounds/kick-bass.mp3')
    //         kickBass.play()
    //     } else if (buttonText == 's') {
    //         const snare = new Audio('./sounds/snare.mp3')
    //         snare.play()
    //     } else if (buttonText == 'd') {
    //         const tom1 = new Audio('./sounds/tom-1.mp3')
    //         tom1.play()
    //     }
    // })