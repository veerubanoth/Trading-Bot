import { useForm } from "react-hook-form";

export const Login = () => {
  const form = useForm();

  return (
    <div>
      <form>
        <label htmlFor="Fullname">Full name</label>
        <input type="text" id="Fullname" name="Fullname" />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <button>Create Account</button>
      </form>
    </div>
  );
};
