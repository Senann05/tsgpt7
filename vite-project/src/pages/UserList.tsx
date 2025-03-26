import useFetch from "../hooks/useFetch";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserList = () => {
  const { data: users, error, loading } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
