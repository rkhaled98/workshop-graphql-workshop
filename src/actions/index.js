// import your npm packages

// keys for actiontypes
export const ActionTypes = {
  FETCH_REPOS: 'FETCH_REPOS',
  ERROR_SET: 'ERROR_SET',
  STAR_CHANGE: 'STAR_CHANGE',
};

const GITHUB_API = 'https://api.github.com/graphql';
const API_KEY = 'YOUR_KEY';

const client = new ApolloClient({
  uri: GITHUB_API,
  headers: { authorization: `bearer ${API_KEY}` },
}); 


client.query({
  query: GetRepos,
  variables: {
    queryString: query,
  },
  fetchPolicy: 'no-cache',
})
  .then((response) => {
    const repos = response.data.search.edges[0].node.repositories.edges.map(repo => repo.node)
    dispatch({ type: ActionTypes.FETCH_REPOS, payload: repos });
  })
  .catch((error) => {
    dispatch({ type: ActionTypes.ERROR_SET, error });
  }); 

  client.mutate({
    mutation: AddStar,
    variables: {
      id: repoID,
    },
    fetchPolicy: 'no-cache',
  })
    .then((res) => {
      dispatch(fetchRepos(searchTerm))
    })
    .catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
// this creates the store with the reducers, and does some other stuff to initialize devtools
// boilerplate to copy, don't have to know

// initialize ApolloClient here

export function fetchRepos(query) {
  return (dispatch) => {
    // fetchRepos query
  };
}

export function addStar(repoID, searchTerm) {
  return (dispatch) => {
    // addStar mutation
  };
}

export function removeStar(repoID, searchTerm) {
  return (dispatch) => {
    // removeStar mutation
  };
}
