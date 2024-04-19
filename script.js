const adviceId = document.querySelector('.container__card__id');
const text = document.querySelector('.container__card__text');
const btn = document.querySelector('.container__card__btn');
const api = "https://api.adviceslip.com/advice"

async function getAdvice() {
    const res = await fetch(api);
    const { slip: { id, advice } } = await res.json();
    adviceId.innerText = id;
    text.innerText = advice;
}
getAdvice();
btn.addEventListener('click', getAdvice);