import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
    const users = useLoaderData();
    return (
        <div className="Main">
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>)}
            </ul>
        </div>
    )
}