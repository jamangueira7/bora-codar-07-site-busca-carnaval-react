import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import styles from "./Header.module.css";

interface CityProps {
  name: string;
  abs: string;
}
interface HeaderProps {
  cities: CityProps[]
  searchBlock: (search: string, place: string) => void;
}

export function Header({ cities, searchBlock }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('');
  const [placeValue, setPlaceValue] = useState('');

  function handleSearchBlock(event: FormEvent) {
    event.preventDefault();
    searchBlock(searchValue, placeValue);
  }

  function handleSearchName(event: ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
  }

  function handleSearchPlace(event: ChangeEvent<HTMLSelectElement>) {
    setPlaceValue(event.target.value);
  }

  return(
    <header>
      <div className={styles.content}>
        <div className={styles.top}>
          <p>FIND YOU BLOCK</p>
          <h1>Encontre os <span>melhores blocos</span> de carnaval de 2023</h1>
        </div>
        <form className={styles.search} onSubmit={handleSearchBlock} >
          <div className={styles.searchField}>
            <label className="srOnly" htmlFor="name">Pesquise por nome</label>
            <i className="ph-magnifying-glass-light"></i>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Pesquise por nome"
              onChange={handleSearchName}
              value={searchValue}
            />
          </div>
          <div className={styles.searchField}>
            <label className="srOnly" htmlFor="city">Selecione uma cidade</label>
            <i className="ph-map-pin-light"></i>
            <select
              id="city"
              name="city"
              defaultValue={'DEFAULT'}
              onChange={handleSearchPlace}
              value={placeValue}
            >
              <option value="DEFAULT">Selecione uma cidade</option>
              {
                cities.map(city => {
                  return <option key={city.abs} value={city.abs}>{city.name}</option>
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