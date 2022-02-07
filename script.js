 function verificar () {
     const data = new Date()
     const ano = data.getFullYear()
     const fano = document.getElementById('txtano')
         res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        const fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','foto-menino.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-moço.png')
            } else {
                //idoso
                img.setAttribute('src','foto-senhor.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-bebef.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','foto-menina.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-moça.png')
            } else {
                //idoso
                img.setAttribute('src','foto-senhora.png')
            }
           
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
       
    }
}