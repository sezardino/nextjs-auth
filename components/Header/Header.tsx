import { useStore } from "@/common";
import Link from "next/link";
import { Button } from "../Button/Button";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Header: React.FC = () => {
  const { isAuth } = useStore();

  const wrapperInner = isAuth ? (
    <Button variant="secondary">Logout</Button>
  ) : (
    <>
      <LoginForm />
      <RegistrationForm />
    </>
  );

  return (
    <header className="p-8 flex flex-col gap-4 sm:flex-row items-center justify-between">
      <h1 className="font-black text-3xl text-center hover:text-white transition">
        <Link href="/">NextJS Auth</Link>
      </h1>
      <div className="flex gap-4">{wrapperInner}</div>
    </header>
  );
};
