function handleSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('message').value.trim();
  if (email && msg) {
    alert("Merci " + email + "! Votre message a été envoyé avec succès.");
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  } else {
    alert("Veuillez remplir tous les champs.");
  }
}