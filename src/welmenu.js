const welmenu = (prefix, pushname) => {
    return `
▋▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
▋┋*Comandos De Bienvenida 👋*
▋┋
■█ *PARA ACTIVAR LA BIENVENIDA*
▋┋
▋┋ ${prefix}welcome 1
▋┋
■█ *PARA DESACTIVAR LA BIENVENIDA*
▋┋
▋┋ ${prefix}welcome 0
▋┋
■█ NOTA: EL BOT NECESITA ADMIN PARA ACTIVAR EL COMANDO
▋┋
▋┋_*☠️Drevill☠️*_
▋▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
`

}

exports.welmenu = welmenu
