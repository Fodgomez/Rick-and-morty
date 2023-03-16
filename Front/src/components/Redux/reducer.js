
import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
        errors:{}
      };

    case DELETE_FAVORITES:
      //const filtered= state.myFavorites.filter((fav) => fav.id !== payload);
      return {
        ...state,
        myFavorites: payload,
        errors:{}
      };

      case "GETFAVORITE":
      return {
        ...state,
        myFavorites: payload,
        errors:{},
      };

    case FILTER:
      const filterCopy = [...state.allCharacters];
      const filter = filterCopy.filter((ch) => ch.gender === payload);
      return {
        ...state,
        myFavorites: filter,
      };

    case ORDER: {
      const orderCopy = [...state.allCharacters];
      const order = orderCopy.sort((a, b) => {
        if (a.id < b.id) {
          return payload === "Ascendente" ? 1 : -1;
        }
        if (a.id > b.id) {
          return payload === "Ascendente" ? -1 : 1;
        }
      });
    }

    case"ERROR": {
      return {
        ...state,
        errorrs: payload,
      }
    }
  
    default:  
      return state;
  }
}
