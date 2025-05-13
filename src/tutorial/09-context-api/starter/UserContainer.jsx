import { useAppContext } from "./navbar";

const UserContainer = () => {
  const { user, logout } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello {user?.name?.toLowerCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <p>Please Login</p>
        </>
      )}
    </div>
  );
};
export default UserContainer;
