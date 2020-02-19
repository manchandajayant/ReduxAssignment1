export function login(email, password) {
  return function thunk(dispatch, getState) {
    fetch(
      `/login${email}${password}`,

      {
        method: "POST",
        body: {
          email: "kelley@codaisseur.com",
          password: "abcd"
        }
      }
    )
      .then(res => res.json())
      .then(accessToken => {
        console.log("data", accessToken);
        dispatch(saveAccessToken(accessToken));
      });
  };
  //console.log("thunk", thunk);
}

export function saveAccessToken(accessToken) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: accessToken
  };
}
