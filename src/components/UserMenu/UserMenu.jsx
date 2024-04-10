import useUser from "../../userContext";

export default function UserMenu() {
  const { isLoggedIn, username, logOut, logIn } = useUser();

  return (
    <div>
      <hr />
      <h3>Приклад роботи з контекстом</h3>
      {isLoggedIn ? (
        <>
          <p>{username}</p>
          <button onClick={logOut}>Log out</button>
        </>
      ) : (
        <button onClick={logIn}>Log in</button>
      )}
    </div>
  );
}
