import { UserModalProps, UserData } from "@/interfaces";
import { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser, onSubmit }) => {
  const [form, setForm] = useState<Omit<UserData, 'id'>>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: { name: "", catchPhrase: "", bs: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    if (keys.length === 1) {
      setForm(prev => ({ ...prev, [name]: value }));
    } else {
      setForm(prev => {
        const updated = { ...prev };
        let ref: any = updated;
        keys.slice(0, -1).forEach(k => (ref = ref[k]));
        ref[keys[keys.length - 1]] = value;
        return updated;
      });
    }
  };

  const handleSubmit = () => {
    const newUser: UserData = {
      id: Date.now(),
      ...form,
    };
    onAddUser(newUser);
    onClose();
    if (onSubmit) {
      onSubmit(newUser);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-xl">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <input className="mb-2 w-full p-2 border rounded" name="name" placeholder="Name" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="username" placeholder="Username" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="email" placeholder="Email" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="phone" placeholder="Phone" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="website" placeholder="Website" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="address.street" placeholder="Street" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="address.city" placeholder="City" onChange={handleChange} />
        <input className="mb-2 w-full p-2 border rounded" name="company.name" placeholder="Company Name" onChange={handleChange} />
        <div className="flex justify-end space-x-2 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
