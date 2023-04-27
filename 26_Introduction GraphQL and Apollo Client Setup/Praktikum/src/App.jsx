import React from "react";
import RootRouting from "./config/router/RootRouting";
import { Provider } from "react-redux";
import store from "./config/redux/store";
const App = () => {
	return (
		<Provider store={store}>	
				<RootRouting />;
		</Provider>
	);
};

export default App;
