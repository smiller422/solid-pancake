
export const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      _id
      firstName
      lastName
      email
      isAdmin
    }
  }
`;