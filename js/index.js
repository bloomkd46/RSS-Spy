function validateFeed(document, url) {
  document.getElementById('error').innerHTML = 'validating';
  const input = document.getElementById('rssUrl');
  axios.get(url).then(response => {
    const form = XMLValidator.validate(response);
    if (form === true) {
      input.classList.remove('is-invalid');
      document.getElementById('continueButton').disabled = false;
    } else {
      input.classList.add('is-invalid');
      document.getElementById('continueButton').disabled;
      document.getElementById('error').innerHTML = JSON.stringify(form);
    };
  }).catch(err => {
    input.classList.add('is-invalid');
    document.getElementById('error').innerHTML = err;
    document.getElementById('continueButton').disabled;
  });
}