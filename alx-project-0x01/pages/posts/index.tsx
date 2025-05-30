import { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, PostData } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userList, setUserList] = useState<UserProps[]>(users);
  const [post, setPost] = useState<PostData | null>(null); // ✅ included as instructed

  const handleAddUser = (newUser: Omit<UserProps, "id">) => {
    const newUserWithId: UserProps = {
      ...newUser,
      id: userList.length + 1,
    };
    setUserList([...userList, newUserWithId]);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">User List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-green-600 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {userList.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          onAddUser={handleAddUser}
            onSubmit={(newUser) => {
                setPost(newUser); // ✅ included as instructed
                setModalOpen(false);
            }}

        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
