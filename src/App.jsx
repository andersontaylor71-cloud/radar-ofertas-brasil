import { useState } from "react";
import ProductCard from "./components/ProductCard";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [freeShipping, setFreeShipping] = useState(false);
  const [sort, setSort] = useState("relevance");

  const search = async () => {
    let url = `https://api.mercadolibre.com/sites/MLB/search?q=${encodeURIComponent(query)}&sort=${sort}`;
    if (minPrice) url += `&price_from=${minPrice}`;
    if (maxPrice) url += `&price_to=${maxPrice}`;
    if (freeShipping) url += `&shipping_cost=free`;

    const res = await fetch(url);
    const data = await res.json();
    setResults(data.results);
  };

  return (
    <div>
      <header className="bg-dark text-warning text-center p-4 shadow">
        <h1>Radar de Ofertas Brasil</h1>
        <p>Seu buscador de preços no Mercado Livre</p>
      </header>

      <div className="container mt-4">
        {/* Barra de busca */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar produto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-primary" onClick={search}>
            Buscar
          </button>
        </div>

        {/* Filtros */}
        <div className="row mb-4">
          <div className="col-md-3">
            <label className="form-label">Preço mínimo</label>
            <input
              type="number"
              className="form-control"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">Preço máximo</label>
            <input
              type="number"
              className="form-control"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          <div className="col-md-3 d-flex align-items-end">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                checked={freeShipping}
                onChange={(e) => setFreeShipping(e.target.checked)}
              />
              <label className="form-check-label">Frete grátis</label>
            </div>
          </div>
          <div className="col-md-3">
            <label className="form-label">Ordenar</label>
            <select
              className="form-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="relevance">Relevância</option>
              <option value="price_asc">Menor preço</option>
              <option value="price_desc">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Resultados */}
        <div className="row">
          {results.length === 0 && (
            <p className="text-center">Nenhum produto encontrado.</p>
          )}
          {results.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
