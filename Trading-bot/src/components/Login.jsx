import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const Login = () => {
  const form = useForm();
  const { register } = form;

  return (
    <div>
      <form>
        <label htmlFor="Fullname">Full name</label>
        <input type="text" id="Fullname" {...register("Fullname")} />

        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register("username")} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />

        <button>Create Account</button>
        <DevTool />
      </form>
    </div>
  );
};
