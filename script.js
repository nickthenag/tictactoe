const buttons = document.querySelectorAll('.tile')
const resetGameButton = document.getElementById('resetGameButton')

let player1Turn = false


buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === '') {
            // Switch player turn
            player1Turn = !player1Turn

            //Place player mark
            if(player1Turn) button.textContent = 'O'
            else button.textContent = 'X'
            // Check for winner
            checkWinner()
        }
    }) 
})

resetGameButton.addEventListener('click', () => {
    buttons.forEach(button => {
        button.textContent = ''
        button.disabled = false
    })
    player1Turn = true 
})

function checkWinner() {
    // Show mark, then display winner
    setTimeout(() => {
        if (checkButtons(buttons[0], buttons[1], buttons[2])) announceWinner(buttons[0].textContent)
            else if (checkButtons(buttons[3], buttons[4], buttons[5])) announceWinner(buttons[3].textContent)
            else if (checkButtons(buttons[6], buttons[7], buttons[8])) announceWinner(buttons[6].textContent)
            else if (checkButtons(buttons[0], buttons[3], buttons[6])) announceWinner(buttons[0].textContent)
            else if (checkButtons(buttons[1], buttons[4], buttons[7])) announceWinner(buttons[1].textContent)
            else if (checkButtons(buttons[2], buttons[5], buttons[8])) announceWinner(buttons[2].textContent)
            else if (checkButtons(buttons[0], buttons[4], buttons[8])) announceWinner(buttons[0].textContent)
            else if (checkButtons(buttons[2], buttons[4], buttons[6])) announceWinner(buttons[2].textContent)
            else if (isBoardFull()) announceCat()
    }, 100) 
    
}

function checkButtons(button1, button2, button3) {
    if(button1.textContent === '' || button2.textContent === '' || button3.textContent === '') return false
    return button1.textContent === button2.textContent && button1.textContent === button3.textContent
}

function isBoardFull() {
    for (const button of buttons) {
        if (button.textContent === '') {
            return false; 
        }
    }
    return true; 
}

function announceWinner(winner) {
    disableAllButtons()
    alert(`Player ${winner} Wins!`)
}

function announceCat() {
    disableAllButtons()
    alert(`It's a draw!`)
    
}

function disableAllButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
    resetGameButton.disabled = false
}