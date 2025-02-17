import React from 'react'

export default function PtaJxsExpression() {
    //biến
    const name = " Phạm Tuấn Anh";

    const user = {
        firstName: "Phạm",
        lastName: "Anh"
    }

    //hàm
    const fullName = (user) => {
        return user.firstName + ' ' + user.lastName;
    }

    //element
    const element = (
        <div>
            {/*Biểu thức Jsx*/}
            <h2> {fullName(user)} </h2>
            <hr />
            <h3>Welcome to, {name}</h3>
        </div>
    );

    //Hàm
    const sayWelcome = (name) => {
        if (name) {
            return <h3> Welcome to {name}</h3>
        } else {
            return <h3> Welcome to Fit-NTU K23CNT3</h3>
        }
    }
    return (
        <div>
            <h1>Pta - JSX Expression</h1>
            {/* sử dụng biến */}
            {element}

            <hr />
            {sayWelcome()}
            <hr />
            {sayWelcome(" Phạm Tuấn Anh")}
        </div>
    )
}