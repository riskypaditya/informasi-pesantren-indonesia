class tablePesantren extends HTMLElement {
  set DataPesantren(data) {
    this._dataPesantren = data;
    this.render();
  }
  erorGetData(message) {
    this.innerHTML = `<h5 class="bg-primary text-light text-center p-2 col-sm-9 mx-auto">${message}<h5>`;
  }
  render() {
    let no = 0;
    this.innerHTML = `
        <table class="table bg-light table-hover table-striped table-sm table-bordered border-dark text-center shadow p-2">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">ID</th>
                    <th scope="col">Nama Pesantdan</th>
                    <th scope="col">NSPP</th>
                    <th scope="col">Alamat</th>
                    <th scope="col">Pimpinan Pondok</th>
                    <th scope="col">Provinsi</th>
                    <th scope="col">Kab/Kota</th>
                </tr>
            </thead>
            <tbody id="data-pesantren">
                
            </tbody>
        </table>
      `;
    this._dataPesantren.forEach((pesantren) => {
      let { id, nama, nspp, alamat, kyai, kab_kota, provinsi } = pesantren;
      let row = document.createElement("tr");
      row.innerHTML = `
        <tr>
          <td scope="col">${no}</td>
          <td scope="col">${id}</td>
          <td scope="col">${nama}</td>
          <td scope="col">${nspp}</td>
          <td scope="col">${alamat}</td>
          <td scope="col">${kyai}</td>
          <td scope="col">${kab_kota.nama}</td>
          <td scope="col">${provinsi.nama}</td>
        </tr>
      `;
      no++;
      this.querySelector("#data-pesantren").appendChild(row);
    });
  }
}
customElements.define("table-pesantren", tablePesantren);
