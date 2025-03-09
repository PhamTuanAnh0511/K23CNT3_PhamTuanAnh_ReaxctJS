import React, { Component } from 'react';
import PtaStudent from './PtaStudent';

export default class PtaStudentList extends Component {
 
    render() {
        let { renderPtaStudents, onPtaHandleView, onPtaHandleEdit, onPtaHandleDelete } = this.props;
        console.log("List:", renderPtaStudents);

        let ptaElementStudent = renderPtaStudents.map((ptaItem, index) => {
            return (
                <PtaStudent 
                    key={index} 
                    renderPtaStudent={ptaItem} 
                    onPtaHandleView={onPtaHandleView} 
                    onPtaHandleEdit={onPtaHandleEdit} 
                    onPtaHandleDelete={onPtaHandleDelete} 
                    ptaIndex={index + 1} 
                />
            );
        });

        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ptaElementStudent}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}