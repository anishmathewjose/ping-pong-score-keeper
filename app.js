const p1 = {
    score: 0,
    button: document.querySelector("#add1"),
    display: document.querySelector("#num1"),
}
const p2 = {
    score: 0,
    button: document.querySelector("#add2"),
    display: document.querySelector("#num2"),
}

const limitSelect = document.querySelector("#limit");
const reset = document.querySelector("#reset");

let limit = 3;
let isGameOver = false;
function updateScores(p, o) {
    if (!isGameOver) {
        p.score++;
        if (p.score === limit) {
            isGameOver = true;
            p.display.classList.add('has-text-success');
            o.display.classList.add('has-text-danger');
            p.button.disabled = true;
            o.button.disabled = true;
        }
        p.display.innerText = p.score;
    }
}
p1.button.addEventListener('click', () => {
    updateScores(p1, p2)
})
p2.button.addEventListener('click', () => {
    updateScores(p2, p1)
})
limitSelect.addEventListener('change', function () {
    limit = parseInt(this.value);
    resetfn();
})
reset.addEventListener('click', resetfn)
function resetfn() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}
