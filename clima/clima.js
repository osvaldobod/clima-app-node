const axios = require('axios');
const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=86823544486827016179f0d9ec253713&units=metric`)
    return resp.data.main.temp;
}
module.exports = {
    getClima
}