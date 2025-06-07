export function UserDTO({ _id, username, email, roles, createdAt, updatedAt }) {
  return {
    id: _id,
    username,
    email,
    roles,
    createdAt,
    updatedAt
  };
}