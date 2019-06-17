// Create a password generator

// Create the source array
const passSource = [0,1,2,3,4,5,6,7,8,9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Access to window objects
const passBtn = document.querySelector('.passBtn');
const pass = document.querySelector('.pass');

passBtn.addEventListener('click', getPass)

// Create password generator
function getPass() {
    let passNum = ':';

    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * passSource.length);
        passNum += passSource[random];
    }
    pass.innerHTML = passNum;
}
