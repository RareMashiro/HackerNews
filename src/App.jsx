import { LayoutContainer } from "./components/layout/container"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NewsPage } from "./pages/newsPage/component";
import { DescPage } from "./pages/descPage/component";
import { store } from "./redux";
import { Provider } from "react-redux";


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
	return (
		<Provider store={store}>
			<RouterProvider router={router}/>
		</Provider>
	)
}