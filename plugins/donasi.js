let handler = async m => m.reply(`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 DONASI 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ Pulsa [085780372455]
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━

Terimakasih sudah berdonasi 😁
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i
handler.register = true

module.exports = handler
