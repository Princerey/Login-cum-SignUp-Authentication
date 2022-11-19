import React, { useState } from 'react';
import axios from 'axios';
// import { setUserSession } from './Utils/Common';

function SignUp(props) {
  const [loading, setLoading] = useState(false);
  const email = useFormInput('');
  const password = useFormInput('');
  const about = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleSignUp = () => {
    setError(null);
    setLoading(true);
    axios.post('https://express-auth-jwt.onrender.com/auth/signup', { email: email.value , password: password.value , about:about.value}).then(response => {
      setLoading(false);
      alert(response.data.message);
      props.history.push('/login');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
  });
  }

  return (
    <div>
      Sign Up<br /><br />
      <div>
        E-mail<br />
        <input type="text" {...email} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        Password<br />
        <input type="password" {...password} autoComplete="new-password" />
      </div>
      <div style={{ marginTop: 10 }}>
        About<br />
        <input type="text" {...about} autoComplete="new-password" />
      </div>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
      <input type="button" value={loading ? 'Loading...' : 'Sign Up'} onClick={handleSignUp} disabled={loading} /><br />
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default SignUp;