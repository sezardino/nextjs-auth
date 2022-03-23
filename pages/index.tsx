import { LSNames, useStore } from "@/common";
import { Header, LoginForm, RegistrationForm } from "@/components";
import { Modal } from "@/components/Modal/Modal";
import { observer } from "mobx-react-lite";
import type { NextPage } from "next";
import { useEffect } from "react";

const Home: NextPage = () => {
  // const store = useStore();

  // useEffect(() => {
  //   if (!localStorage.getItem(LSNames.AUTH_TOKEN)) {
  //     return;
  //   }

  //   store.checkAuth();
  // }, []);

  // if (store.isLoading) {
  //   return <h1>loading...</h1>;
  // }

  return (
    <section className="text-white p-8">
      <h2 className="text-2xl mb-4">
        <span className="font-bold">https://tempmailo.com/ </span>
        to create temporal mail to test application
      </h2>

      <h2 className="text-2xl font-bold">NextJS Auth web application</h2>

      <p className="mt-2">
        This application wac created for education of NestJS and Authentication
        principles from backend side
      </p>

      <h3 className="text-xl my-2">Technology used (frontend):</h3>
      <ul className="pl-5 grid gap-2 font-medium text-md">
        <li>- NextJS</li>
        <li>- TypeScript</li>
        <li>- TailwindCSS</li>
      </ul>

      <h3 className="text-xl my-2">Technology used (backend):</h3>
      <ul className="pl-5 grid gap-2 font-medium text-md">
        <li>- NestJS</li>
        <li>- TypeScript</li>
        <li>- MailJet</li>
        <li>- JWT</li>
        <li>- MongoDM</li>
      </ul>
    </section>
  );

  // return (
  //   <main>
  //     <h1>{store.isAuth ? `Greeting ${store.user.name}` : "Not auth"}</h1>
  //     <p>https://tempmailo.com/</p>
  //     {!store.isAuth ? (
  //       <>
  //         <RegistrationForm />
  //         <LoginForm />
  //       </>
  //     ) : (
  //       <button onClick={() => store.logout()}>Logout</button>
  //     )}
  //     <button onClick={() => store.getUsers()}>Get users</button>
  //     {store.users.length > 0 && (
  //       <ul>
  //         {store.users.map((user) => (
  //           <li key={user.email}>
  //             {user.email} - {user.name}
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </main>
  // );
};

export default observer(Home);
