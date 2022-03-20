import { LSNames, useStore } from "@/common";
import { LoginForm, RegistrationForm } from "@/components";
import { observer } from "mobx-react-lite";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  const store = useStore();

  useEffect(() => {
    if (!localStorage.getItem(LSNames.AUTH_TOKEN)) {
      return;
    }

    store.checkAuth();
  }, []);

  if (store.isLoading) {
    return <h1>loading...</h1>;
  }

  return (
    <main>
      <h1>{store.isAuth ? `Greeting ${store.user.name}` : "Not auth"}</h1>
      <p>https://tempmailo.com/</p>
      {!store.isAuth ? (
        <>
          <RegistrationForm />
          <LoginForm />
        </>
      ) : (
        <button onClick={() => store.logout()}>Logout</button>
      )}
      <button onClick={() => store.getUsers()}>Get users</button>
      {store.users.length > 0 && (
        <ul>
          {store.users.map((user) => (
            <li key={user.email}>
              {user.email} - {user.name}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default observer(Home);
