import { useStore } from "@/common";
import { FormEvent, useState } from "react";

export const LoginForm: React.FC = (props) => {
  const store = useStore();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    store.login({ email, password });
  };

  return (
    <form onSubmit={submitHandler} {...props}>
      <input
        name="email"
        placeholder="example@mail.com"
        type="text"
        value={email}
        onChange={(evt) => setEmail(evt.target.value)}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        value={password}
        onChange={(evt) => setPassword(evt.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
