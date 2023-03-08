import styles from "./Header.module.css";

interface CityProps {
  name: string;
  abs: string;
}
interface HeaderProps {
  cities: CityProps[]
}

export function Header({ cities }: HeaderProps) {
  return(
    <header>
      <div className={styles.content}>
        <div className={styles.top}>
          <p>FIND YOU BLOCK</p>
          <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
        </div>
        <form className={styles.search}>
          <div className={styles.searchField}>
            <label className="srOnly" htmlFor="name">Pesquise por nome</label>
            <i className="ph-magnifying-glass-light"></i>
            <input type="text" id="name" name="name" placeholder="Pesquise por nome" />
          </div>
          <div className={styles.searchField}>
            <label className="srOnly" htmlFor="city">Selecione uma cidade</label>
            <i className="ph-map-pin-light"></i>
            <select id="city" name="city">
              <option value="0" selected>Selecione uma cidade</option>
              {
                cities.map(city => {
                  return <option value={city.abs}>{city.name}</option>
                })
              }
            </select>
            <i className="ph-caret-down-light"></i>
          </div>
          <button className="btn primary">Buscar agora</button>
        </form>
      </div>
    </header>
  );
}