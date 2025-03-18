import React from 'react';
import { Link } from 'react-router-dom';

export default function PtaNavNar() {
    return (
        <div style={{ backgroundColor: '#2c3e50', padding: '15px', borderRadius: '10px' }}>
            <ul style={{
                listStyleType: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        Home
                    </Link>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/about" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        About Us
                    </Link>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/contact" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        Contact
                    </Link>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/list-user" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        List User
                    </Link>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/products" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        Products
                    </Link>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/news" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        News
                    </Link>
                </li>
                <li style={{ margin: '0 20px' }}>
                    <Link to="/create-user" style={{
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '18px',
                        fontWeight: 'bold',
                        transition: 'color 0.3s ease'
                    }}>
                        Create User
                    </Link>
                </li>
            </ul>
        </div>
    );
}
