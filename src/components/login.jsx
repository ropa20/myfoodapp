import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./logsign.css";
import { UserAuth } from '../context/AuthContext';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const {signIn} = UserAuth();

  const onFinish = async (e) => {
    setError('')
    try{
      await signIn(email, password)
      navigate('/home')
    }
    catch(e){
      setError(e.message)
      console.log(e.message);
    }
  }

  return (<div className='log-sign'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      // onSubmit={handleSubmit}
    >
    <div className='form-container'>
      <Form.Item>
      <div className='logo'>
                <i className="fa-solid fa-cloud"></i> 
                WindDelivery
            </div>
      </Form.Item>
      <Form.Item
        className='email'
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email!',
          },
        ]}
      >
        <Input onChange={(e) => setEmail(e.target.value)} 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        className='password'
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          onChange={(e) => setPassword(e.target.value)}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item className='submit'>
        <Button htmlType="submit" className="login">
          Log in
        </Button>
        <span className='sign'><b>Aren't a user?</b><Link to='/' className='link'>Signup now!</Link></span>
      </Form.Item>
    </div>
    </Form>
    </div>
  );
};

export default Login;