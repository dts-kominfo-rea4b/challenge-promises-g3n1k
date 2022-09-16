const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (cari) => {
  try {
    // dapatkan raw value
    const data_ixx = await promiseTheaterIXX();
    const data_gvc = await promiseTheaterVGC();
    
    let _counter = 0;
    data_ixx.filter(hitung);
    data_gvc.filter(hitung);
    function hitung(item){
      if(item.hasil == cari) ++_counter;
    }
    console.log(_counter);

  } catch {
    console.log(err);
  }
};





module.exports = {
  promiseOutput,
};
