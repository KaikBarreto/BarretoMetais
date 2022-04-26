// Parallax

setTimeout(function () {
  $('#apply-area').parallax({ imageSrc: 'img/pattern.png' })
}, 250)

// Form de contato

function Enviar() {

  const nome = document.getElementById("nameinput")
  const phone = document.getElementById("phoneinput")
  const msg = document.getElementById("msginput")
  const confirm = document.getElementById("confirmation-text")

  if (nome.value != "" && email.value != "" && msg != "") {
      confirm.style.display = "inline-block"

      setTimeout(function() {
          confirm.style.display = "none"
      }, 4000)

      nome.value = ""
      phone.value = ""
      msg.value = ""
  }
  document.getElementById("msg-box").focus()

}