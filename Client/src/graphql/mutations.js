import { gql } from "@apollo/client";

export const ADD_USER = gql`
  mutation CreateUser($input: createUserInput) {
    createUser(input: $input) {
      id
      name
      age
      isMarried
    }
  }
`;
