import axios from 'axios';
import { ChangeEvent, FormEvent, useState, VFC } from 'react'
import { Redirect } from 'react-router';
import '../Login.css'

export const Register: VFC = () => {
  const initialNames = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: ""
  };

  const [isLogin, setLogin] = useState(false);

  const [names, setNames] = useState(initialNames);

  const onChangeRegisterValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNames({
      ...names,
      [name]: value
    });
  };

  const submit = async (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/register", {
      first_name: names.firstName,
      last_name: names.lastName,
      email: names.email,
      password: names.password,
      password_confirm: names.passwordConfirm
    });

    setLogin(true);
    setNames(initialNames);
  }

  return (
    <>
      {isLogin && <Redirect to={'/login'} />}
      <main className="form-signin">
        <form onSubmit={submit}>
          <h1 className="h3 mb-3 fw-normal">register</h1>
          <input className="form-control" placeholder="First Name" required value={names.firstName} onChange={onChangeRegisterValue} name="firstName" />
          <input className="form-control" placeholder="Last Name" required value={names.lastName} onChange={onChangeRegisterValue} name="lastName" />
          <input type="email" className="form-control" placeholder="Email" required value={names.email} onChange={onChangeRegisterValue} name="email" />
          <input type="password" className="form-control" placeholder="Password" required value={names.password} onChange={onChangeRegisterValue} name="password" />
          <input type="password" className="form-control" placeholder="Password Confirm" required value={names.passwordConfirm} onChange={onChangeRegisterValue} name="passwordConfirm" />

          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
