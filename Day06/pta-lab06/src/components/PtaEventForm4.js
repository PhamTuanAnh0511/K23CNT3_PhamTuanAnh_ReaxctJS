import React, { Component } from "react";

class PtaEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ptaSelectCheckBox: ["Apple"], // Trái cây mặc định đã chọn
    };
  }

  // Hàm xử lý khi chọn checkbox
  ptaHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let selected = [...this.state.ptaSelectCheckBox];

    // Nếu chọn checkbox, thêm vào mảng; nếu bỏ chọn, loại bỏ khỏi mảng
    const selectedOptions = checked
      ? [...selected, value]
      : selected.filter((option) => option !== value);

    console.log("selected:", selected, "selectedOptions:", selectedOptions);

    this.setState(
      {
        ptaSelectCheckBox: selectedOptions,
      },
    );
  };

  // Hàm xử lý khi form được submit
  ptaHandleSubmit = (event) => {
    event.preventDefault();
    const { ptaSelectCheckBox } = this.state;
    console.log("Fruits selected:", ptaSelectCheckBox);
    
    alert("Selected fruits: " + ptaSelectCheckBox.join(", "));
  };

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form onSubmit={this.ptaHandleSubmit}>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.ptaSelectCheckBox.includes("Apple")}
              onChange={this.ptaHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.ptaSelectCheckBox.includes("Banana")}
              onChange={this.ptaHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.ptaSelectCheckBox.includes("Orange")}
              onChange={this.ptaHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default PtaEventForm4;