const axios = require('axios');
const getLugarLatLng = async(dir) => {
    const encodeUlr = encodeURI(dir);
    //console.log(encodeUlr);
    const instance = axios.create({
        baseURL: `https://openweathermap.org/data/2.5/weather?q=${encodeUlr}&appid=439d4b804bc8187953eb36d2a8c26a02`
    });
    const resp = await instance.get();
    if (resp.data.cod !== 200) {
        console.log('pasa por aqui');
        throw new Error(`No hay resultados para ${ dir }`);
    }
    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;
    return {
        direccion,
        lat,
        lng
    }
    // instance.get().then(resp => {
    //     console.log(resp.data.coord.lon);
    //     console.log(resp.data.coord.lat);
    // }).catch(err => {
    //     console.log('ERROR!!!', err);
    // });
}
module.exports = {
    getLugarLatLng
}