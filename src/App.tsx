import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import { OrganizationByNameComponent } from "./codegen";
import logo from "./logo.svg";

const client = new ApolloClient({
  cache: new InMemoryCache({}),
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    headers: {
      Authorization: "Bearer <add-your-token-here>"
    }
  })
});

function App() {
  const [orgName, setOrgName] = React.useState("");

  console.log(orgName);

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello GraphQL Bangkok!</p>

          <input
            type="text"
            placeholder="Organization name..."
            style={{
              padding: 20,
              width: 400
            }}
            onChange={e => setOrgName(e.target.value)}
            value={orgName}
          />

          <OrganizationByNameComponent
            variables={{
              login: orgName
            }}
          >
            {({ data, loading }) => {
              if (loading) return <p> Loading... </p>;
              if (!data) return <p> Cannot found </p>;
              if (data.organization) {
                return (
                  <>
                    <img
                      src={data.organization.avatarUrl}
                      style={{
                        width: 200
                      }}
                    />
                    <p> {data.organization.login} </p>
                    {data.organization &&
                      data.organization.repositories &&
                      data.organization.repositories.nodes &&
                      data.organization.repositories.nodes.map(repo => (
                        <li key={repo!.id}>
                          {repo!.name} - ⭐ {repo!.stargazers!.totalCount}
                        </li>
                      ))}
                  </>
                );
              }
            }}
          </OrganizationByNameComponent>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
