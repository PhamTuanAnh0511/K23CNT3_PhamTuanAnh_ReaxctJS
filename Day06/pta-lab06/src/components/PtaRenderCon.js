import React, { Component } from 'react';
import PtaLoginControl from './PtaLoginControl';

class PtaRenderCon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        };
    }

    // Hàm xử lý login
    ptaHandleLogin = () => {
        this.setState({
            isLoggedIn: true
        });
    };

    // Hàm xử lý logout
    ptaHandleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
    };

    render() {
        return (
            <div className='alert alert-danger'>
                <h2>Render Condition</h2>
                <hr />
                
                {/* Truyền state isLoggedIn vào PtaLoginControl */}
                <PtaLoginControl isLoggedIn={this.state.isLoggedIn} />

                <hr />

                {/* Hiển thị nút phù hợp dựa trên trạng thái đăng nhập */}
                {this.state.isLoggedIn ? (
                    <button onClick={this.ptaHandleLogout}>Logout</button>
                ) : (
                    <button onClick={this.ptaHandleLogin}>Login</button>
                )}
            </div>
        );
    }
}

export default PtaRenderCon;