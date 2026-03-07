function ProductCard({ item }) {
  const linkAfiliado = item.permalink + "?mian7622039";

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={item.thumbnail}
          className="card-img-top"
          alt={item.title}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text fw-bold">Preço: R${item.price}</p>
          <a
            href={linkAfiliado}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-warning mt-auto"
          >
            Ver no Mercado Livre
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

