class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
        <nav class="navbar navbar bg-success text-light">
            <div class="container-fluid justify-content-center">
            <span class="navbar-brand mb-0 h1 pt-3 pb-3">INFORMASI POSANTREN iNDONESIA</span>
            </div>
        </nav`;
  }
}
customElements.define("app-bar", AppBar);
