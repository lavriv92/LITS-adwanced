(() => {
  const form = document.forms[0];

  console.log(form);

  form.addEventListener('submit', (e) => {
    const data = new FormData(form);

    console.log('d', data.get('first[]'));

    e.preventDefault();
  });
})();
