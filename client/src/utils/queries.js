import { gql } from "@babel/client";

export const QUERY_ME = gql`
    type Query {
        me: User
    }
`;