import MobForm from "../components/MobForm"
import MobList from "../components/MobList"
import App from "./App"

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
            }
        ]
    }
]