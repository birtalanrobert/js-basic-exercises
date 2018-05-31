document.querySelector('.range').oninput = () => {
  const value = document.querySelector('.range').value;
  document.querySelector('.range-value').innerHTML = value;
};
