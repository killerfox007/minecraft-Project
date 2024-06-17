import MobForm from "./components/MobForm"
import MobList from "./components/MobList"
import App from "./App"
import Search from "./components/Search"
import Home from "./components/Home"

export default [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path:"/Mobs",
                element: <MobList />
            },
            {
                path: "/MobForm",
                element: <MobForm />
            },
            {
                element: <Search />
            },
            {
                path: "/Home",
                element: <Home />
            },
        ]
    }
]