import React, { useState } from 'react';
import './Profile.css';
import Footer from '../Footer';
import Navbar from '../Navbar';

let user = JSON.parse(localStorage.getItem('userData')) || {};

function Profile() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [isPasswordUpdated, setIsPasswordUpdated] = useState(false); // Parol yangilanganini tekshirish

    const handlePasswordChange = (e) => {
        e.preventDefault();

        if (newPassword === confirmNewPassword) {
            // Yangi parolni saqlash
            const updatedUser = { ...user, password: newPassword };

            // localStorage'ga yangilangan ma'lumotlarni saqlash
            localStorage.setItem('userData', JSON.stringify(updatedUser));
            setIsPasswordUpdated(true); // Parol yangilandi deb belgilash
            alert('Password updated successfully!');
        } else {
            alert('Passwords do not match. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className='Profile'>
                <div className="edit-card">
                    <h1>Edit Your Profile</h1>
                    <div className="top-card">
                        <label>
                            First Name
                            <input
                                type="text"
                                placeholder={user.first_name || ''}
                                value={user.first_name || ''}
                                readOnly
                            />
                        </label>
                        <label>
                            Last Name
                            <input
                                type="text"
                                placeholder={user.last_name || ''}
                                value={user.last_name || ''}
                                readOnly
                            />
                        </label>
                        <label>
                            Email
                            <input
                                type="text"
                                placeholder={user.email || ''}
                                value={user.email || ''}
                                readOnly
                            />
                        </label>
                        <label>
                            Phone number
                            <input
                                type="text"
                                placeholder={user.Phonenumber || ''}
                                value={user.Phonenumber || ''}
                                readOnly
                            />
                        </label>
                    </div>

                    <div className="bottom-card">
                        <h1>Password change</h1>
                        {isPasswordUpdated ? (
                            <p>Your password has been updated. You cannot change it anymore.</p>
                        ) : (
                            <>
                                <label>
                                    Old Password
                                    <input
                                        type="text"
                                        placeholder="Old Password"
                                        value={user.password || ''}
                                        readOnly
                                    />
                                </label>
                                <label>
                                    New Password
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </label>
                                <label>
                                    Again New Password
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={confirmNewPassword}
                                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    />
                                </label>
                                <button className='upbtn' onClick={handlePasswordChange}>Change Password</button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
