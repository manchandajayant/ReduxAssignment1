const initialState = [
  {
    id: 101,
    email: "xiatian2@mail.ru",
    name: "Ksenia Gulyaeva",
    intro: null,
    github_username: null,
    website: null,
    createdAt: "2019-11-28T23:16:30.028Z",
    technologies: []
  },
  {
    id: 26,
    email: "rein@codaisseur.com",
    name: "Rein",
    intro: null,
    github_username: "Reinoptland",
    website: null,
    createdAt: "2019-11-25T10:38:39.970Z",
    technologies: []
  }
];

function developersReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "FETCHED_DEVELOPERS":
      {
        return action.payload;
      }
      break;
    default: {
      return state;
    }
  }
}

export default developersReducer;
