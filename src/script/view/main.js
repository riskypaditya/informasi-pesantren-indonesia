let getData = (path) => {
  let provinsi_url = "https://api-pesantren-indonesia.vercel.app";
  let _path = path;
  let requestOptions = {
    method: "GET",
    redirect: "follow",
  };
  return fetch(`${provinsi_url}${path}.json`, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      return JSON.parse(result);
    })
    .catch((error) => console.log("error", error));
};
const main = () => {
  const sortItem = document.querySelector("option-sort");
  const tablePesantren = document.querySelector("table-pesantren");
  const setDataProvinsi = async () => {
    try {
      sortItem.DataProvinsi = await getData("/provinsi");
    } catch (message) {
      console.log(message);
    }
  };
  const setDataKabupaten = async () => {
    try {
      let id = sortItem.IdProvinsi;
      sortItem.DataKabupaten = await getData(`/kabupaten/${id}`);
    } catch (message) {
      console.log(message);
    }
  };
  const findDataPesantren = async () => {
    try {
      let id = sortItem.IdKabupaten;
      console.log(id);
      if (id == "Kabupaten") {
        tablePesantren.erorGetData("Pilih Provinsi Terlebih Dahulu");
      } else {
        tablePesantren.DataPesantren = await getData(`/pesantren/${id}`);
      }
    } catch (message) {
      console.log(message);
    }
  };
  sortItem.eventFindButton = findDataPesantren;
  sortItem.eventChangeProvinsi = setDataKabupaten;
  setDataProvinsi();
};
export default main;
