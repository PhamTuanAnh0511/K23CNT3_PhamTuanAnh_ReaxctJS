import React from 'react';

export default function PtaRenderArray() {
    const ptaNumbers = [10, 20, 30, 40, 50];

    // Sửa lỗi: Thêm return vào arrow function
    const ptaElement = ptaNumbers.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <div className='alert alert-success'>
            <ul>{ptaElement}</ul> 
        </div>
    );
}