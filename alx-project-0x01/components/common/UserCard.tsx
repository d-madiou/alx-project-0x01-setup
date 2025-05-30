import React from "react";
import { UserProps } from "@/interfaces";

// Example usage with hardcoded values for demonstration
const sampleUser: UserProps = {
  id: 1,
  name: "Thierno Madiou",
  username: "thierno",
  email: "thierno@email.com",
  address: {
    street: "123 Main St",
    suite: "Apt. 4B",
    city: "Dakar",
    zipcode: "12345",
    geo: {
      lat: "14.6928",
      lng: "-17.4467",
    },
  },
  phone: "+221 77 123 4567",
  website: "thierno.dev",
  company: {
    name: "ThiernoTech",
    catchPhrase: "Innovate your world",
    bs: "tech solutions",
  },
};

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold">{name} (@{username})</h2>
      <p className="text-gray-600">{email}</p>
      <p className="mt-2 text-sm">
        {address.street}, {address.suite}, {address.city} {address.zipcode}
      </p>
      <p className="text-sm">Phone: {phone}</p>
      <p className="text-sm">
        Website: <a href={`http://${website}`} className="text-blue-600 hover:underline">{website}</a>
      </p>
      <p className="mt-2 italic text-gray-500">Company: {company.name}</p>
      <p className="text-xs text-gray-400">"{company.catchPhrase}"</p>
    </div>
  );
};

// Example export for demo/testing
export default () => <UserCard {...sampleUser} />;