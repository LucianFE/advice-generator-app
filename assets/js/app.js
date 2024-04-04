const url = 'https://api.adviceslip.com/advice';
const btn = document.querySelector('.btn');
const id = document.querySelector('.id');
const adviceText = document.querySelector('.advice');

btn.addEventListener('click', () => {
  showAdvice();
});

const showAdvice = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('There was an error...');
    }
    const data = await response.json();
    id.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    adviceText.textContent = 'There was an error...';
  }
};
showAdvice();
