import React from "react";

export interface UserListProps {
  users: any;
}

function UserList({ users }: UserListProps) {
  return (
    <div>
      <h1>List of user</h1>
      {users.map((user: any) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: {
      users: data,
    },
  };
}
export default UserList;
