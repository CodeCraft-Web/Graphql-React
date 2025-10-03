import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUsers {
    getUsers {
      id
      name
      age
      isMarried
    }
  }
`;
