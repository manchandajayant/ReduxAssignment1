import developersFetched from "../developersActions";

export function fetchDevelopers(dispatch, getState) {
  fetch(
    "https://codaisseur-coders-network.herokuapp.com/developers?offset=10&limit=20"
  )
    .then(res => res.json())
    .then(data => {
      dispatch(developersFetched(data.rows));
    });
}
