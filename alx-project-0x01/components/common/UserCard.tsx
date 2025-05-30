import { UserCrardProps } from "@/interfaces";

const UserCard: React.FC<UserCrardProps> = ({
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
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 flex items-center gap-4">
        <div className="bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center text-2xl font-bold text-blue-600">
          {name ? name[0] : "?"}
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-700">Email:</span>{" "}
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">
          {email}
        </a>
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-700">Phone:</span>{" "}
        <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
          {phone}
        </a>
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-700">Website:</span>{" "}
        <a
          href={`http://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          {website}
        </a>
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-700">Company:</span>{" "}
        {company?.name}
      </div>
      <div className="mb-2">
        <span className="font-medium text-gray-700">Address:</span>{" "}
        {address
          ? `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`
          : "N/A"}
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
        <span>Company: {company?.name}</span>
      </div>
    </div>
  );
};

export default UserCard;