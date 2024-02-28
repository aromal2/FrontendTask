import React, { useState, useEffect } from "react";
import "./design.css"; // Assuming your styles are in design.css

const Design = () => {
  const [selectedRadio, setSelectedRadio] = useState(null);
const [isOpen1, setIsOpen1] = useState(false);
const [isOpen2, setIsOpen2] = useState(false);
const [isOpen3, setIsOpen3] = useState(false);
const [isOpen4, setIsOpen4] = useState(false);

const toggleDropdown1 = () => {
  setIsOpen1(!isOpen1);
  setIsOpen2(false);
  setIsOpen3(false);
  setIsOpen4(false);
};

const toggleDropdown2 = () => {
  setIsOpen2(!isOpen2);
  setIsOpen1(false);
  setIsOpen3(false);
  setIsOpen4(false);
};

const toggleDropdown3 = () => {
  setIsOpen3(!isOpen3);
  setIsOpen1(false);
  setIsOpen2(false);
  setIsOpen4(false);
};

const toggleDropdown4 = () => {
  setIsOpen4(!isOpen4);
  setIsOpen1(false);
  setIsOpen2(false);
  setIsOpen3(false);
};

 
 const handleRadioClick = (value) => {

   if (selectedRadio === value) {
  //   // If the clicked option is already selected, deselect it
     setSelectedRadio(null);
   } else {
  //   // Otherwise, select the clicked option
     setSelectedRadio(value);
  }


 };

 


  return (
    <div className="main">
      <div className="line-wrapper">
        <div className="line"></div>
        <div className="text">YAY! It's BOGO</div>
        <div className="line1"></div>
      </div>

      <div
        className={`second ${
          selectedRadio === "option1" ? "selected-border" : ""
        }`}
      >
        <div className="seconddividing1">
          <div className="secondfirst">
            <div>
              <form className="form">
                <input
                  type="radio"
                  id="option1"
                  name="options"
                  value="option1"
                  className="radio1"
                  checked={selectedRadio === "option1"}
                  onClick={() => handleRadioClick("option1")}
                />
                {/* <label for="option2" className="onepair">
                  1 Pair
                </label>
                <br></br>
                <label for="option2" className="label2">
                  DKK 195.00
                </label>
                <br></br> */}
                <div className="pair1">
                  <p className="pair1pair">
                    1 Unit <span className="off1">20% OFF</span>
                  </p>
                  <p className="twopair2">Standard Price</p>
                </div>
              </form>
            </div>
          </div>
          {/* <div>
            jjjjjjjj
          </div> */}
          <div>
            <p className="secondsecond">$10.00 USD</p>
            <p className="secondsecond2">$24.00 USD</p>
          </div>
        </div>
      </div>
      <div className="thirdtop">
        <div className="thirdtop1"></div>
        <div className="trapezoid"></div>
      </div>

      <div
        className={`third ${
          selectedRadio === "option2" ? "selected-border" : ""
        }`}
      >
        <div className="thirddivi">
          <div className="thirddividing1">
            <div>
              <form className="form">
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="option2"
                  className="radio2"
                  checked={selectedRadio === "option2"}
                  onClick={() => handleRadioClick("option2")}
                />
              </form>
            </div>

            <div className="pair2">
              <p className="twopair">2 Unit</p>
            </div>
          </div>
          <div className="crossed-text">
            <p className="rec23">20% Off</p>
          </div>
          <div className="thirdthird">
            <p className="rectangle2">MOST POPULAR</p>
            <p className="popular">$18.00 USD</p>
            <p className="thirdthird2">$24.00 USD </p>
          </div>
        </div>

        <div className="table">
          <div className="firstcolumn">
            <p> </p>
            <p className="data1">#1</p>
            <p className="data">#2</p>
          </div>
          <div className="secondcolumn">
            <p className="size">Size</p>
            <div className="dropdown-box">
              <div className="dropdown" onClick={toggleDropdown1}>
                <div className="dropdown-content">
                  S<span className="arrow-down">&#9660;</span>
                </div>
                {isOpen1 && (
                  <div className="dropdown-options" id="dropdownOptions">
                    <div
                      className="option"
                      style={{
                        border: "1px solid border: #FF6B82",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      S
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid  #FF6B82",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      M
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid #FF6B82",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      L
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="dropdown-box">
              <div className="dropdown" onClick={toggleDropdown2}>
                <div className="dropdown-content">
                  S<span className="arrow-down">&#9660;</span>
                </div>
                {isOpen2 && (
                  <div className="dropdown-options" id="dropdownOptions">
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      S
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      M
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey;",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      L
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="thirdcolumn">
            <div className="size">Colour</div>
            <div className="dropdown-box">
              <div className="dropdown" onClick={toggleDropdown3}>
                <div className="dropdown-content">
                  Black<span className="arrow-down2">&#9660;</span>
                </div>
                {isOpen3 && (
                  <div className="dropdown-options" id="dropdownOptions">
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      S
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      M
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      L
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="dropdown-box">
              <div className="dropdown" onClick={toggleDropdown4}>
                <div className="dropdown-content">
                  Colour<span className="arrow-down1">&#9660;</span>
                </div>
                {isOpen4 && (
                  <div className="dropdown-options" id="dropdownOptions">
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      Black
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      White
                    </div>
                    <div
                      className="option"
                      style={{
                        border: "1px solid grey",
                        backgroundColor: "#FF6B82",
                      }}
                    >
                      Grey
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fourth  ${
          selectedRadio === "option3" ? "selected-border" : ""
        }`}
      >
        <div className="seconddividing1">
          <div className="secondfirst">
            <div className="third4">
              <form className="form">
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="option2"
                  className="radio1"
                  checked={selectedRadio === "option3"}
                  onClick={() => handleRadioClick("option3")}
                />
                {/* <label for="option2" className="onepair">
                  1 Pair
                </label>
                <br></br>
                <label for="option2" className="label2">
                  DKK 195.00
                </label>
                <br></br> */}
              </form>
            </div>
            <div>
              <p className="pair3">3 Unit</p>
            </div>
          </div>
          <div>
            <div className="off3">30% Off</div>
          </div>
          <div className="thirdthirdthird">
            <p className="thirdthird3">$24.00 USD</p>
            <p className="second2">$24.00 USD</p>
          </div>
        </div>
      </div>

      <div className="fifth">
        <p className="free">Free Delivery</p>
        <p className="total">Total :$18.00 USD</p>
      </div>
      <div className="sixth">
        <div className="plus-sign">
          <div className="horizontal-line"></div>
          <div className="vertical-line"></div>
        </div>
        <div className="cart1">
          <span className="cart"> Add to Cart</span>
        </div>
      </div>
      <p className="power">@ Powered By Pumper</p>
    </div>
  );
};

export default Design;
