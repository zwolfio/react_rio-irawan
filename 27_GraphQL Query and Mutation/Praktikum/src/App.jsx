import React from "react";
import RootRouting from "./config/router/RootRouting";
import { Provider } from "react-redux";
import store from "./config/redux/store";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./config/redux/Apollo";
const App = () => {
	return (
		<ApolloProvider client= {apolloClient}>
			<Provider store={store}>	
					<RootRouting />;
			</Provider>
		</ApolloProvider>
	);
};

export default App;
