import MobForm from "./components/MobForm"
import MobList from "./components/MobList"
import App from "./App"
import Search from "./components/Search"

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
            }
        ]
    }
]