import axios from 'axios';
import { FormEvent, useState, VFC } from 'react'
import { Redirect } from 'react-router';

export const Login: VFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const submitLogin = async (e: FormEvent<HTMLFormElement | HTMLInputElement>) => {
    e.preventDefault()

    await axios.post("http://localhost:8000/api/login", {
      email,
      password
    }, {withCredentials: true});

    setRedirect(true);
  }

  return (
    <>
      { redirect && <Redirect to={'/'} />}
      <main className="form-signin">
        <form onSubmit={submitLogin}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
          <input type="email" className="form-control" placeholder="Email" required onChange={e => setEmail(e.target.value)} />
          <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />

          <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        </form>
      </main>
    </>
  )
}
