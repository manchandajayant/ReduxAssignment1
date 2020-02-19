export function fetchPost(id) {
  return function thunk(dispatch, getState) {
    fetch(`/posts/${id}`)
      .then(resp => resp.json())
      .then(post => {
        dispatch(setPost(post));
      });

    fetch(`/posts/${id}/comments`)
      .then(resp => resp.json())
      .then(comments => {
        dispatch(setComments(comments));
      });
  };
}

export default function setPost(post) {
  return { type: "POST_SET", payload: post };
}

export default function setComments(comments) {
  return { type: "POST_COMMENTS", payload: comments };
}
