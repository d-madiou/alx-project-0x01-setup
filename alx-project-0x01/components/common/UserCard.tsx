import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold">{user.name} (@{user.username})</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="mt-2 text-sm">
        {user.address.street}, {user.address.city}
      </p>
      <p className="text-sm">Phone: {user.phone}</p>
      <p className="text-sm">Website: {user.website}</p>
      <p className="mt-2 italic text-gray-500">Company: {user.company.name}</p>
    </div>
  );
};

export default UserCard;
