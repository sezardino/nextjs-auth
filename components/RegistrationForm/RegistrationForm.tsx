import { useStore } from "@/common";
import { useModal } from "@/hooks/use-modal";
import { FormEvent, useState } from "react";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";

export const RegistrationForm: React.FC = (props) => {
  const store = useStore();
  const { isOpen, closeHandler, openHandler } = useModal();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!name.trim() || !email.trim() || !password.trim()) {
      return;
    }

    store.registration({ name, email, password });
  };

  return (
    <>
      <Button onClick={openHandler}>Register</Button>
      <Modal closeHandler={closeHandler} isOpen={isOpen}>
        <div>
          <h2 className="text-slate-900 text-2xl font-bold">
            Registration Form
          </h2>
          <form
            onSubmit={submitHandler}
            className="mt-4 grid gap-4 text-slate-900"
            {...props}
          >
            <input
              name="name"
              placeholder="John Doe"
              type="text"
              value={name}
              className="p-4 border border-slate-900 rounded-md"
              onChange={(evt) => setName(evt.target.value)}
            />
            <input
              name="email"
              placeholder="example@mail.com"
              type="text"
              value={email}
              className="p-4 border border-slate-900 rounded-md"
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <input
              name="password"
              placeholder="password"
              type="password"
              value={password}
              className="p-4 border border-slate-900 rounded-md"
              onChange={(evt) => setPassword(evt.target.value)}
            />
            <Button
              type="submit"
              className="bg-slate-900 text-white hover:text-slate-900 hover:border-slate-900"
            >
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </>
  );
};
