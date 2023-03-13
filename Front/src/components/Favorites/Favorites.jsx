import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../Redux/actions";
import { Card } from "../Card/Card";
import styles from "./Favorites.module.css";

export function Favorites(props) {
  return (
    <div className={styles.container}>
      <h1>My Favorites</h1>
      <div className={styles.gridContainer}>
        {props.myFavorites.map((char) => (
          <Card
            key={char.id}
            name={char.name}
            image={char.image}
            species={char.species}
            gender={char.gender}
            detailId={char.id}
            onClose={() => props.deleteFavorites(char.id)}
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFavorites: function (char) {
      dispatch(addFavorites(char));
    },
    deleteFavorites: function (id) {
      dispatch(deleteFavorites(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);