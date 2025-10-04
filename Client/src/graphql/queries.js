import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      name
      age
      isMarried
    }
  }
`;

export const GET_USER = gql`
  query GetUserById($getUserById: ID!) {
    getUserById(id: $getUserById) {
      id
      name
      age
      isMarried
    }
  }
`
