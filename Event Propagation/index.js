let gp = document.querySelector('#grandparent');
gp.addEventListener('click', () => {
    gp.style.backgroundColor = 'red';
});
let p = document.querySelector('#parent');
p.addEventListener('click', () => {
    p.style.backgroundColor = 'blue';
});

let c = document.querySelector('#child');
c.addEventListener('click', () => {
    c.style.backgroundColor = 'green';
});

