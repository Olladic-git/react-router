import { Link, useLoaderData } from "react-router-dom";

export default function User() {
    const user = useLoaderData();
    return (
        <div className="Main user-page">
            <div>
                <Link to='/users'>Back</Link>
            </div>
            <h2>Name: {user.name}</h2>
            <h2>Nickname: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>User City: {user.address.city}</h2>
            <h2>User Company: {user.company.name}</h2>
        </div>
    )
}