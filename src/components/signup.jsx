import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./logsign.css";
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {createUser} = UserAuth();
  const navigate = useNavigate();

  const onSubmit=(event)=>{
    event.preventDefault();
  }
  const onFinish = async (e) => {
      
      setError('')
      try{
        await createUser(email, password);
        navigate('/home')
      }
      catch(e){
        setError(e.message)
        console.log(e.message)

      }
      
  };

  return (<div className='log-sign'>
    <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish} onSubmit={onSubmit}
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
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input 
          prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Email" 
          onChange={(e)=> setEmail(e.target.value)}
        />
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
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e)=> setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item className='submit'>
        <Button htmlType="submit" className="orderprocess">
          Sign up
        </Button>
        <span className='sign'><b>Already a user?</b><Link to='/login' className='link'>Login!</Link></span>
      </Form.Item>
    </div>
    </Form>
    </div>
  );
};

export default Signup;