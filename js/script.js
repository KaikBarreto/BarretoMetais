// Parallax

setTimeout(function () {
    $('#pattern-img').parallax({ imageSrc: './img/pattern.png' })
    $('#company-img').parallax({ imageSrc: './img/planeta.jpg' })
}, 250)

// Form de contato

function Enviar() {

    const nome = document.getElementById("nameinput")
    const phone = document.getElementById("phoneinput")
    const msg = document.getElementById("msginput")
    const confirm = document.getElementById("confirmation-text")

    if (nome.value != "" && email.value != "" && msg != "") {
        confirm.style.display = "inline-block"

        setTimeout(function () {
            confirm.style.display = "none"
        }, 4000)

        nome.value = ""
        phone.value = ""
        msg.value = ""
    }
    document.getElementById("msg-box").focus()

}

ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 1000
}).reveal(`
    #about-area, 
    #social-media,
    #recycle-info,
    #services-area,
    #call-area,
    #contact-area,
    #copy-area`)
