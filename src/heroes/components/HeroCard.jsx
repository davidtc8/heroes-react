import { Link } from "react-router-dom";
import '../styles/heropage.css'

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const heroImageURL = `/heroes/${id}.jpg`;

  const CharactersByHero = ({ alter_ego, characters }) => {
    // if ( alter_ego === characters ) return (<></>);
    // return <p>{ characters }</p>
    return alter_ego === characters ? <></> : <p>{characters}</p>;
  };

  return (
    <div className="col animate__animated animate__bounceInUp">
      <div className="card card_width_responsive">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={heroImageURL} alt={superhero} className="card-img img_size text" />
          </div>

          <div className="col-8 my_col">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              {/* {alter_ego === characters ? <></> : charactersByHero} */}
              <CharactersByHero characters={ characters } alter_ego={ alter_ego } />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
