let { MessageType } = require('@adiwajshing/baileys')
let num = /([0-9])$/i
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Masukkan Uang Yang Akan Anda Slot'
    if (!num.test(text)) throw 'Hanya Angka'
    let uang = `${text}`
    let jackpot = Math.ceil(uang * 10)
    let win = Math.ceil(uang * 2)
    if (uang < 1000) throw 'Minimal 1000'
    let users = global.DATABASE._data.users
    if (uang > users[m.sender].uang) throw 'Uang Anda Tidak Cukup'
    let emojis = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐","🍒","🥥","🍌"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let d = Math.floor(Math.random() * emojis.length);
    let e = Math.floor(Math.random() * emojis.length);
    let v = [],
        w = [],
        x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        v[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        w[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[d];
        d++;
        if (d == emojis.length) d = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[e];
        e++;
        if (e == emojis.length) e = 0;
    }
    let end;
    if (a == b == c == d == e) {
        end = "*ANDA MENGJACKPOT*";
        hasil = `Win With 3 Thing Common +Rp${jackpot}`;
        gcha = `${v[0]} | ${w[0]} | ${x[0]} | ${y[0]} | ${z[0]}\n${v[0]} | ${w[0]} | ${x[0]} | ${y[0]} | ${z[0]}\n${v[1]} | ${w[1]} | ${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${v[1]} | ${w[1]} | ${x[1]} | ${y[1]} | ${z[1]}\n${v[2]} | ${w[2]} | ${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].uang += jackpot
        await conn.fakeReply(m.chat, `[ 🎰 VIRTUAL SLOT 🎰 ]\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')

    } else if (a == b || a == c || d == c || d == e || e == a) {
        end = "*SELAMAT!*";
        hasil = `Win With 2 Things Common +Rp${win}`;
        gcha = `${v[0]} | ${w[0]} | ${x[0]} | ${y[0]} | ${z[0]}\n${v[0]} | ${w[0]} | ${x[0]} | ${y[0]} | ${z[0]}\n${v[1]} | ${w[1]} | ${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${v[1]} | ${w[1]} | ${x[1]} | ${y[1]} | ${z[1]}\n${v[2]} | ${w[2]} | ${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].uang += win
        await conn.fakeReply(m.chat, `[ 🎰 VIRTUAL SLOT 🎰 ]\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    } else {
        end = "*YAHAHA KALAH*";
        hasil = `Hopefully You Are lucky Next -Rp${uang}`;
        gcha = `${v[0]} | ${w[0]} | ${x[0]} | ${y[0]} | ${z[0]}\n${v[0]} | ${w[0]} | ${x[0]} | ${y[0]} | ${z[0]}\n${v[1]} | ${w[1]} | ${x[1]} | ${y[1]} | ${z[1]} <=== ${end}\n${v[1]} | ${w[1]} | ${x[1]} | ${y[1]} | ${z[1]}\n${v[2]} | ${w[2]} | ${x[2]} | ${y[2]} | ${z[2]}`;
        global.DATABASE._data.users[m.sender].uang -= uang
        await conn.fakeReply(m.chat, `[ 🎰 VIRTUAL SLOT 🎰 ]\n\n${gcha}\n\n*[ 🎰 VIRTUAL SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    }
}
handler.help = ['slot']
handler.tags = ['game']
handler.command = /^(slot)$/i
handler.group = true
handler.register = true
handler.owner = false

handler.exp = 10
handler.limit = true

module.exports = handler
