import { useAuthStore } from "../store/auth.store";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  if (!user) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Dashboard</h2>
      <div style={{ border: "1px solid #000000", padding: 20, maxWidth: 300 }}>
        <img src={user.avatar} style={{ width: 50, borderRadius: "50%" }} alt="" />
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <button onClick={() => { logout(); navigate("/login"); }}>Logout</button>
      </div>
    </div>
  );
}