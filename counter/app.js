
const up = document.querySelector('.increase');
let text = document.querySelector('.text');
let heading = document.querySelector('h4');
let number = (~~text);
console.log(number)
up.addEventListener('click', () => {

    number = number + 1;
    console.log(number)
    heading.innerText = number;

})
validate = (number) => {
    return (number === 100 ? alert('max') : 'srry')
}
validate();