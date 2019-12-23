import React, { useState } from 'react';

interface IProps {
  message: string;
  speedboat: boolean;
}

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  done: boolean;
}

const Form = ({ message, speedboat }: IProps) => {
  const initState = {
    firstName: '',
    lastName: '',
    email: '',
    done: false,
  };

  const [user, setUser] = useState<IState>(initState);

  return (
    <div>
      <h1>{message}</h1>
      {speedboat ? <h2>Has speedboat</h2> : null}
      {user.done ? (
        <>
          <div>
            Name:{' '}
            {`${user.firstName} ${user.lastName} can be found at: ${user.email}`}
          </div>
          <button onClick={() => setUser({ ...user, done: false })}>
            Revert
          </button>
        </>
      ) : (
        <>
          <h1>Form</h1>
          <input
            placeholder="First Name"
            value={user.firstName}
            onChange={e => setUser({ ...user, firstName: e.target.value })}
          />
          <input
            placeholder="Last Name"
            value={user.lastName}
            onChange={e => setUser({ ...user, lastName: e.target.value })}
          />
          <input
            placeholder="Email"
            value={user.email}
            onChange={e => setUser({ ...user, email: e.target.value })}
          />
          <button onClick={() => setUser({ ...user, done: true })}>
            Done!
          </button>
        </>
      )}
    </div>
  );
};

export default Form;
