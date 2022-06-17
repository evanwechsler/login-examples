import React, { createContext, useContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  ApolloProvider,
} from "@apollo/client";
import PropTypes from "prop-types";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  credentials: "include",
  cache: new InMemoryCache(),
});

const UserContext = createContext({ user: null });

const GET_USER = gql`
  query {
    me {
      id
      name
      username
    }
  }
`;

const LoginContext = ({ children }) => {
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;

  const user = data?.me || null;

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};

const ApolloContext = ({ children, ...props }) => {
  return (
    <ApolloProvider client={client}>
      <LoginContext>{children}</LoginContext>
    </ApolloProvider>
  );
};

LoginContext.propTypes = {
  children: PropTypes.node,
};

export default ApolloContext;
