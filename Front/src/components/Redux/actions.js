import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./types";
import axios from "axios"; 

export function addFavorites(char) {
return async function (dispatch){
    try{
        const response = await axios.post("http://localhost:3001/rickandmorty/favs", char);
        return dispatch ({
            type: ADD_FAVORITES,
            payload: response.data,
        });

    }catch(error){
        return dispatch({
            type: "ERROR",
            payload: error
        })
        }
    };
}

export function deleteFavorites(id) {

    return async function (dispatch) {
        try{
            const response = await axios.delete(`http://localhost:3001/rickandmorty/favs/${id}`);
            return dispatch({
                type: DELETE_FAVORITES,
                payload: response.data,
            })
        }catch(error){
            return dispatch({
                type: "ERROR",
                payload: error
            })
        }
    };
}

export function getFavorites() {

    return async function (dispatch) {
        try{
            const response = await axios.get(`http://localhost:3001/rickandmorty/favs/`);
            return dispatch({
                type: "GET_FAVORITES",
                payload: response.data,
            })
        }catch(error){
            return dispatch({
                type: "ERROR",
                payload: error
            })
        }
    };
}


export function filterCards(status) {
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }
}

