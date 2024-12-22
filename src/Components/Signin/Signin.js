import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate-ni import qilish
import './Signin.css';
import Navbar from '../Navbar';
import Footer from '../Footer';
import azweb from './assets/Screenshot_2024-03-07_at_21.47.46-removebg-preview.png';

function Signin() {

    const [isLogin, setIsLogin] = useState(false); // Login yoki Signin holatini boshqarish
    const navigate = useNavigate(); // navigate funksiyasini olish

    const first_name = useRef(null);
    const last_name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const Phonenumber = useRef(null);

    function Submit(e) {
        e.preventDefault();
        if (isLogin) {
            // Log In
            const storedData = JSON.parse(localStorage.getItem('userData'));
            if (storedData) {
                if (storedData.email === email.current.value && storedData.password === password.current.value) {
                    alert("Welcome back, " + storedData.first_name + "!");
                    navigate('/'); // Login to'g'ri bo'lsa, home sahifasiga o'tish
                } else {
                    alert("Incorrect email or password. Please try again.");
                }
            } else {
                alert("No account found. Please create one.");
            }
        } else {
            // Sign Up
            const data = {
                first_name: first_name.current?.value || '',
                last_name: last_name.current?.value || '',
                email: email.current.value,
                password: password.current.value,
                Phonenumber: Phonenumber.current.value,
            };

            // Ma'lumotlarni localStorage-ga saqlash
            localStorage.setItem('userData', JSON.stringify(data));

            console.log("Data saved to localStorage:", data);
            alert("Account created successfully!");

            // Inputlarni tozalash
            if (first_name.current) first_name.current.value = "";
            if (last_name.current) last_name.current.value = "";
            email.current.value = "";
            password.current.value = "";
            Phonenumber.current.value = "";
            navigate('/')
        }
    }

    return (
        <>
            <Navbar />
            <div className='Signin'>
                <div className="signin-cart">
                    <div className="img-part">
                        <span>Made by Azweb company</span>
                        <img src={azweb} alt="..." />
                    </div>
                    <div className="in-cart">
                        {isLogin ? (
                            // Login form
                            <>
                                <h1>Log In</h1>
                                <div className="signin-input">
                                    <input type="email" name='text' placeholder='Email' ref={email} />
                                    <input type="text" name='text' placeholder='Password' ref={password} />
                                </div>
                                <button onClick={Submit}>Log In</button>
                                <span onClick={() => setIsLogin(false)} style={{ cursor: 'pointer', color: 'blue' }}>
                                    Don't have an account? Create one
                                </span>
                            </>
                        ) : (
                            // Signin form
                            <>
                                <h1>Create an account</h1>
                                <div className="signin-input">
                                    <input type="text" name='text' placeholder='First Name' ref={first_name} />
                                    <input type="text" name='text' placeholder='Last Name' ref={last_name} />
                                    <input type="email" name='text' placeholder='Email' ref={email} />
                                    <input type="text" name='text' placeholder='Password' ref={password} />
                                    <input type="text" name='text' placeholder='Phone number' ref={Phonenumber} />
                                </div>
                                <button onClick={Submit}>Create Account</button>
                                <span onClick={() => setIsLogin(true)} style={{ cursor: 'pointer', color: 'blue' }}>
                                    Have you an account?
                                </span>
                            </>
                        )}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Signin;
