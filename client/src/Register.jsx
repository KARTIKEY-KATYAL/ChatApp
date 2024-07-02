import { useState } from "react"
const Register = () => {
    const [Username,setUsername]= useState('');
    const [Password,setPassword]= useState('');
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12">
        <input
        type="text"
          value={Username}
          onChange={(ev) => setUsername(ev.target.value)}
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
        type="password"
          value={Password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2"
        />
        <button className="bg-red-500 text-blue-950 block w-full rounded-md font-bold p-2 border">
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default Register
