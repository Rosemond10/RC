
function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;

  if (email && msg) {
    alert("Merci, " + email + "! Votre message a été envoyé.");
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}
