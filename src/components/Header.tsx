export function Header() {
  return(
    <div>
      <div className="top">
        <p>FIND YOU BLOCK</p>
        <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
      </div>
      <form className="search">
        <div className="search-field">
          <label className="sr-only" htmlFor="name">Pesquise por nome</label>
          <i className="ph-magnifying-glass-light"></i>
          <input type="text" id="name" name="name" placeholder="Pesquise por nome" />
        </div>
        <div className="search-field select">
          <label className="sr-only" htmlFor="city">Selecione uma cidade</label>
          <i className="ph-map-pin-light"></i>
          <select id="city" name="city">
            <option value="0" selected>Selecione uma cidade</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
            <option value="BA">Salvador</option>
          </select>
          <i className="ph-caret-down-light"></i>
        </div>
        <button className="btn primary">Buscar agora</button>
      </form>
    </div>
  );
}