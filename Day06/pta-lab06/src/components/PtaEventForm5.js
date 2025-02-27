import React, { Component } from 'react'

export default class PtaEventForm5 extends Component {
    constructor(props){
        super(props);
        this.state={
            ptaName:"Phạm Tuấn",
            ptaAge: 20,
            ptaGender:"Male",
            ptaCourse:"CSS3"
        }
    }

    // hàm sự kiện change
    ptaHandleChage = (event)=>{
        let name = event.target.name
        let value = event.target.value

        this.setState({
            [name]:value
        })
    }

    ptaHandleSubmit = (event)=>{
        event.preventDefault()
        alert(this.state.ptaName + "\n" 
            + this.state.ptaAge + "\n" 
            + this.state.ptaGender + "\n" 
            + this.state.ptaCourse )

         // Chuyển dữ liệu trên form lên App component (TvcApp);
         this.props.onPtaHandleSubmit(this.state);
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Form Student Info</h2>
        <div>
            <label htmlFor='ptaName' >Student Name:</label>
            <input type='text' name='ptaName' id='ptaName'
            value={this.state.ptaName}
           
            onChange={this.ptaHandleChage}  
            className='mx-2 text-center'/>
        </div>
        <div>
            <label htmlFor='ptaAge' >Student Name:</label>
            <input type='text' name='ptaAge' id='ptaAge'
            value={this.state.ptaAge}
        
            onChange={this.ptaHandleChage} 
              className='mx-2 text-center '/>
        </div>
        
        <div>
  
            <label htmlFor='ptaGender' >Student Gender:</label>
            <input type='radio' name='ptaGender' id='ptaMale' className='mx-2'
            value={'Male'}
            checked={this.state.ptaGender === 'Male'}
            onChange={this.ptaHandleChage} />
            <label htmlFor='ptaMale'>Male</label>
    

     
          
           
                <input type='radio' name='ptaGender' id='ptaFemale' className='mx-2'
                value={'Female'}
                checked={this.state.ptaGender === 'Female'}
                onChange={this.ptaHandleChage} />
           
                <label htmlFor='ptaFemale'>Female</label>
            

         
                <input type='radio' name='ptaGender' id='ptaNone' className='mx-2'
                value={'None'}
                checked={this.state.ptaGender === 'None'}
                onChange={this.ptaHandleChage}/>
                <label htmlFor='ptaNone'>None</label>
         
            </div>

       
        <div>
        <label>
                    Chọn khóa học:
                    <select name='ptaCourse' id='ptaCourse'  className='mx-2 text-center '
                     value={this.state.ptaCourse} onChange={this.ptaHandleChage}>
                        <option value={"HTML3"}>HTML3</option>
                        <option value="CSS3">CSS3</option>
                        <option value="JS">JavaScript</option>
                        <option value="reactjs">ReactJS</option>
                        <option value="BOOTRAP5">BOOTRAP5</option>
                    </select>
                </label>
        </div>
        <button onClick={this.ptaHandleSubmit} className='btn btn-primary'>button</button>
      </div>
    )
  }
}