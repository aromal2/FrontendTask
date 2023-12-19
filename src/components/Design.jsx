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
   setSelectedRadio(value);

 };

 


  return (
    <div className="main">
      <div className="line-wrapper">
        <div className="line"></div>
        <div className="text">Bundle & Save</div>
        <div className="line"></div>
      </div>

      <div className={`second ${selectedRadio ==='option1' ? 'selected-border' : ''}`}>
        <div className="seconddividing1">
          <div className="secondfirst">
            <div>
              <form className="form">
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="option2"
                  className="radio1"
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
                  <p className="pair1pair">1 Pair</p>
                  <p className="twopair2">DKK 195.00</p>
                </div>
              </form>
            </div>
          </div>
          <div className="secondsecond">
            <p>50% OFF</p>
          </div>
        </div>
      </div>

      <div className={`third ${selectedRadio ==='option2' ? 'selected-border' : ''}`}>
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
                  onClick={() => handleRadioClick("option2")}
                />
              </form>
            </div>
            <div className="pair2">
              <p className="twopair">2 Pair</p>
              <p className="twopair2">DKK 345.00</p>
            </div>
          </div>
          <div className="crossed-text">
            <p>DKK 195.00</p>
          </div>
          <div className="thirdthird">
            <p className="popular">Most popular</p>
            <p className="thirdthird2">40% OFF </p>
          </div>
        </div>

        <div className="table">
          <div className="firstcolumn">
            <p> </p>
            <p className="data">#1</p>
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
                      style={{ border: "1px solid #007F61" }}
                    >
                      S
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
                    >
                      M
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
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
                      style={{ border: "1px solid #007F61" }}
                    >
                      S
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
                    >
                      M
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
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
                  Colour<span className="arrow-down1">&#9660;</span>
                </div>
                {isOpen3 && (
                  <div className="dropdown-options" id="dropdownOptions">
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
                    >
                      S
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
                    >
                      M
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
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
                      style={{ border: "1px solid #007F61" }}
                    >
                      Black
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
                    >
                      White
                    </div>
                    <div
                      className="option"
                      style={{ border: "1px solid #007F61" }}
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

      <div className={`fourth  ${selectedRadio ==='option3' ? "selected-border" : ""}`}>
        <div className="seconddividing1">
          <div className="secondfirst">
            <div>
              <form className="form">
                <input
                  type="radio"
                  id="option2"
                  name="options"
                  value="option2"
                  className="radio1"
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

                <div className="pair1">
                  <p className="pair1pair">3 Pair</p>
                  <p className="twopair2">DKK 528.00</p>
                </div>
              </form>
            </div>
          </div>
          <div className="secondsecond">
            <p>50% OFF</p>
          </div>
        </div>
      </div>

      <div className="fifth">
        <p className="free">Free 2 Day Shipping</p>
        <p className="total">Total :DKK 360.00</p>
      </div>
      <div className="sixth">
        <button className="button">
          <span className="cart">&#43; Add to Cart</span>
        </button>
      </div>
      <p className="power">Powered By Pumper</p>
    </div>
  );
};

export default Design;
