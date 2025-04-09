"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (res.ok) {
            alert('🎉 Đăng ký thành công!');
        } else {
            alert('❌ Đăng ký thất bại: ' + (data.message || 'Vui lòng thử lại.'));
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Đăng ký</h2>
            <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column", width: "300px", margin: "0 auto" }}>
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} style={{ marginBottom: "10px", padding: "8px" }} />
                <input type="password" placeholder="Mật khẩu" onChange={e => setPassword(e.target.value)} style={{ marginBottom: "10px", padding: "8px" }} />
                <button type="submit" style={{ padding: "10px", backgroundColor: "#4c9aff", color: "white", border: "none", borderRadius: "5px" }}>
                    Đăng ký
                </button>
            </form>
            <p style={{ marginTop: "15px" }}>
                Đã có tài khoản? <Link href="/login" style={{ color: "#4c9aff", textDecoration: "none" }}>Đăng nhập</Link>
            </p>
        </div>
    );
}
