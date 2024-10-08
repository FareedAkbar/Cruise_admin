import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React,{useState} from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { CREATE_USER_MUTATION } from "../../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import Auth from 'components/Auth';
import Layout from 'Layouts';
import Socials from 'components/Auth/Socials';

const Input = styled(InputGroup)`
  margin-bottom: 2rem;
`;

export default function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

  const addUser = () => {
    createUser({
      variables: {
        username: username,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
  };

  const onCheckbox = () => {
    // v will be true or false
  };
  return (
    <Layout title="Register">
      <Auth title="Create new account">
        <form>
          <Input fullWidth>
            <input type="text" placeholder="Username"  onChange={(e) => {
          setUserName(e.target.value);
        }}/>
          </Input>
          <Input fullWidth>
            <input type="email" placeholder="Email Address"
             onChange={(e) => {
              setEmail(e.target.value);
            }} />
          </Input>
          <Input fullWidth>
            <input type="password" placeholder="Password"
             onChange={(e) => {
              setPassword(e.target.value);
            }} />
          </Input>
          {/* <Input fullWidth>
            <input type="password" placeholder="Confirm Password" />
          </Input>  */}
           <Checkbox checked onChange={onCheckbox}>
            Agree to{' '}
            <Link href="/">
              <a>Terms & Conditions</a>
            </Link>
           </Checkbox>
          <Button status="Success" type="button" shape="SemiRound"
          onClick={addUser}
          fullWidth>
            Register
          </Button>
        </form>
        <Socials />
        <p>
          Already have an account?{' '}
          <Link href="/auth/login">
            <a>Log In</a>
          </Link>
        </p>
      </Auth>
    </Layout>
  );
}
