import React, { Component } from 'react';

class PtaRenderListObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ptaStudents: [
                { ptaId: 1, ptaName: "Phạm Tuấn Anh", ptaAge: 20 },
                { ptaId: 2, ptaName: "Nguyen Gia Duy", ptaAge: 30 },
                { ptaId: 3, ptaName: "Nguyễn Trọng Hưng", ptaAge: 40 },
                { ptaId: 4, ptaName: "Nguyen Duy Manh", ptaAge: 50 },
            ],
        };
    }

    render() {
        let { ptaStudents } = this.state;

        // Hiển thị danh sách dưới dạng danh sách `<ul>`
        let ptaElement = ptaStudents.map((ptaItem) => (
            <li key={ptaItem.ptaId}>
                {ptaItem.ptaId} - {ptaItem.ptaName} ({ptaItem.ptaAge} tuổi)
            </li>
        ));

        // Hiển thị danh sách dưới dạng bảng
        let ptaRenderElement = ptaStudents.map((ptaItem) => (
            <tr key={ptaItem.ptaId}>
                <td>{ptaItem.ptaId}</td>
                <td>{ptaItem.ptaName}</td>
                <td>{ptaItem.ptaAge}</td>
                <td>
                    <button className='btn btn-success mx-1'>Sửa</button>
                    <button className='btn btn-danger mx-1'>Xóa</button>
                </td>
            </tr>
        ));

        return (
            <div className='container mt-3'>
                <h2>Danh sách sinh viên (Dạng danh sách)</h2>
                <ul>{ptaElement}</ul>

                <hr />

                <h2>Danh sách sinh viên (Dạng bảng)</h2>
                <table className='table table-bordered table-striped'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Tuổi</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ptaRenderElement}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default PtaRenderListObject;