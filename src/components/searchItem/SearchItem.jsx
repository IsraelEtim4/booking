import "./searchItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const SearchItem = () => {
  
  const [destination, setDestination] = useState("");
  const navigate = useNavigate()
  const handleSearch = () => {
    navigate("/hotels/roomie", { state:{ destination }})
  };

  return (
    <div className="search">
      <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Tower Street Apartment</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Studio Apartment with Air conditioning
          </span>
          <span className="siFeatures">
            Enter studio . 1 bathroom . 21m2 1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$110</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton" onClick={handleSearch}>See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Colton House Hotel</h1>
          <span className="siDistance">2km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Double Room - Disability Access
          </span>
          <span className="siFeatures">
            1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.6</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$105</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Staybridge Suites</h1>
          <span className="siDistance">500m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Queen Studio Suites - Non-Smoking
          </span>
          <span className="siFeatures">
            2 bed (1 sofa bed, 1 queen)
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.8</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$140</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Hyatt Place Columbus</h1>
          <span className="siDistance">3km from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            King Room with Bath Tub - Disability Access
          </span>
          <span className="siFeatures">
            1 king bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$105</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
      <div className="searchItem">
        <img src="https://cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">Holiday Inn Express</h1>
          <span className="siDistance">200m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
            Double Room - Disability Access
          </span>
          <span className="siFeatures">
            1 full bed
          </span>
          <span className="siCancelOp">Free cancellation</span>
          <span className="siCancelOpSubtitle">
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className="siDetails">
          <div className="siRating">
            <span>Excellent</span>
            <button>8.7</button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">$105</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <button className="siCheckButton">See availability</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem;