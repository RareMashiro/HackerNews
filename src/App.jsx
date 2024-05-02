import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LayoutContainer } from "./components/layout/container"
import { NewsPage } from "./pages/newsPage/component";
import { DescPage } from "./pages/descPage/component";
import { Provider } from "react-redux";
import { store } from "./redux";
import { useState } from "react";
import { CountContext } from "./contexts/count";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LayoutContainer />,
		children: [
			{
				index: true,
				element: <NewsPage />
			},
			{
				path: ":commentId",
				element: <DescPage />
			}
		]
	}
]);

export const App = () => {
	const [sum, setSum] = useState(0);
	
	return (
		<Provider store={store}>
			<CountContext.Provider value={{sum, setSum}}>
				<RouterProvider router={router}/>
			</CountContext.Provider>
		</Provider>
	)
}