import React from 'react';
import PtaLogincomp from './PtaLogincomp';
import PtaLogoutCom from './PtaLogoutCom'; // Sửa lỗi thiếu import

export default function PtaLoginControl(props) {
    var isLoggedIn = props.isLoggedIn;
    var PtaLoginControl = isLoggedIn ? <PtaLogincomp /> : <PtaLogoutCom />;

    return (
        <div>
            {PtaLoginControl}
        </div>
    );
}