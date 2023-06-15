import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const { id } = useParams();
  
  // Este callback lo va disparar cada vez que sus dependencias cambien
  const hero = useMemo(() => getHeroById(id), [id]);

  const navigateTo = useNavigate();

  const onNavigateBack = () => {
    if (hero.publisher === "Marvel Comics") {
      navigateTo("/marvel", {
        // El replace evita que la persona pueda regresar al historial anterior
        replace: true,
      });
    } else if (hero.publisher === "DC Comics") {
      navigateTo("/dc", {
        replace: true,
      });
    }
  };

  // condición para cuando no tenemos el hero bien escrito en la URL
  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__zoomIn">
      <div className="col-4">
        <img
          src={`/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
          style={{width: "100%"}}
        />
      </div>

      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul>
          <li className="list-group list-group-flush"></li>
          <li className="list-group-item">
            <b>Alter ego: {hero.alter_ego}</b>
          </li>
          <li className="list-group-item">
            <b>Publisher: {hero.publisher}</b>
          </li>
          <li className="list-group-item">
            <b>First appearance: {hero.first_appearance}</b>
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Back
        </button>
      </div>
    </div>
  );
};
