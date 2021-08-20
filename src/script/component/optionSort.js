class OptionSort extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  set DataProvinsi(data) {
    this._DataProvinsi = data;
    this._DataProvinsi.forEach((provinsi) => {
      let { id, nama } = provinsi;
      let option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerHTML = nama;
      this.querySelector("#SelectProvinsi").appendChild(option);
    });
  }
  get IdProvinsi() {
    return this.querySelector("#SelectProvinsi").value;
  }
  get IdKabupaten() {
    return this.querySelector("#SelectKabupaten").value;
  }
  set eventChangeProvinsi(event) {
    this._event = event;
    this.render();
  }
  set eventFindButton(event) {
    this._findEvent = event;
    this.render();
  }
  set DataKabupaten(data) {
    this._DataProvinsi = data;
    this.querySelector("#SelectKabupaten").innerHTML = "";
    this._DataProvinsi.forEach((kabupaten) => {
      let { id, nama } = kabupaten;
      let option = document.createElement("option");
      option.setAttribute("value", id);
      option.innerHTML = nama;
      this.querySelector("#SelectKabupaten").appendChild(option);
    });
  }
  render() {
    this.innerHTML = `
      <div class="row justify-content-center mb-5 align-items-center">
        <div class="col-md-4 col-sm-8">
            <div class="input-group p-2">
                <label class="input-group-text bg-primary text-light rounded" for="SelectProvinsi">Provinsi</label>
                <select class="form-select" id="SelectProvinsi">
                    <option selected>Provinsi</option>
                </select>
            </div>
        </div>
        <div class="col-md-4 col-sm-8 ">
            <div class="input-group p-2">
            <label class="input-group-text bg-primary text-light rounded" for="SelectKabupaten">Kabupaten</label>
                <select class="form-select" id="SelectKabupaten">
                    <option selected>Kabupaten</option>
                </select>
             </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary d-block mx-auto col-md-8 p-3 rounded-pill shadow-lg " id="find">Temukan</button>
    `;
    this.querySelector("#SelectProvinsi").addEventListener("change", this._event);
    this.querySelector("#find").addEventListener("click", this._findEvent);
  }
}
customElements.define("option-sort", OptionSort);
