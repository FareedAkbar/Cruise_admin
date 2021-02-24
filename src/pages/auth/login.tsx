import { Button } from '@paljs/ui/Button';
import { InputGroup } from '@paljs/ui/Input';
import { Checkbox } from '@paljs/ui/Checkbox';
import React, {  useState } from "react";
import Link from 'next/link';
import { LOGIN_USER_MUTATION } from "../../GraphQL/MutationLogin";
import { useMutation , useQuery } from "@apollo/client";
import Auth, { Group } from 'components/Auth';
import Socials from 'components/Auth/Socials';
import Layout from 'Layouts';
import { useRouter } from 'next/router';
import {Alert} from 'antd';

import 'antd/dist/antd.css';


export default function Login() {
  const [war, setwar] = useState(false);
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  // const { loading, error, data } = useQuery(LOGIN_USER_MUTATION);
 
  
  const router = useRouter();
  const [login,{ data}] = useMutation(LOGIN_USER_MUTATION,{
    onCompleted: (data) => {
     if(data){
     
      localStorage.setItem('token', data.login.jwt as string);
      console.log(data.login.jwt)
      router.push('/dashboard')
     }
     else{
       console.log('wrong passwrod')
     }
    }
  });
  const addUser = () => {

   if(!identifier|| !password){
     setwar(true)
     
   }else{
    login({
      variables: {
        identifier: identifier,
        password: password,
      },
    }
   );
   
   }
 
   
  };
  const onCheckbox = () => {
    // v will be true or false
  };
  
  

  return (
    
    <Layout title="Cruise">
      {war && <Alert message="Fields Empty" type="warning" showIcon />
   }
      <Auth title="Cruise" subTitle="Hello! Login with your email">
        <form>
          <InputGroup fullWidth>
            <input type="email" placeholder="Email Address"
             onChange={(e) => {
              setIdentifier(e.target.value);
            }}
             />
          </InputGroup>
          <InputGroup fullWidth>
            <input type="password" placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }} />
          </InputGroup>
          <Group>
            <Checkbox checked onChange={onCheckbox}>
              Remember me
            </Checkbox>
            {/* <Link href="/auth/request-password">
              <a>Forgot Password?</a>
            </Link> */}
          </Group>
          <Button status="Success" type="button" shape="SemiRound"
          onClick={addUser}
          fullWidth>
            Login
          </Button>
        </form>
        {/* <Socials /> */}
        {/* <p>
          Don&apos;t have account?{' '}
          <Link href="/auth/register">
            <a>Register</a>
          </Link>
        </p> */}
      </Auth>
    </Layout>
  );


}



