import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeliveryForm = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    localStorage.setItem("dataKey", JSON.stringify(data));
  }, [data]);

  const addtoSave = () => {
    const localData = localStorage.getItem("dataKey");
    setData(localData, data);
    console.log(localData, data);
  };

  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [streetA, setStreetA] = useState("");
  const [complexbuilding, setComplexBuilding] = useState("");
  const [citytown, setCityTown] = useState("");
  const [selectProvince, setSelectProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const navigator = useNavigate();

  // this function that help call
  const saveInfo = () => {
    // const localFirstName = localStorage.getItem('FirstName');
    if (
      !name ||
      !mobileNumber ||
      !streetA ||
      !complexbuilding ||
      !citytown ||
      !selectProvince ||
      !postalCode
    ) {
      toast.error("All the inputs are required.");
    }

    // if (name === localFirstName) {
    //   toast.error('Name does not match')
    // }

    if (
      name &&
      mobileNumber &&
      streetA &&
      complexbuilding &&
      citytown &&
      selectProvince &&
      postalCode
    ) {
      localStorage.setItem("Name", name);
      localStorage.setItem("MobileNumber", mobileNumber);
      localStorage.setItem("StreetA", streetA);
      localStorage.setItem("ComplexBuilding", complexbuilding);
      localStorage.setItem("CityTown", citytown);
      localStorage.setItem("SelectProvince", selectProvince);
      localStorage.setItem("PostalCode", postalCode);
      toast.success("Save.");
      navigator("/paymentpage");
    }
  };

  return (
    <div className="container">
      <h3 className="text-center">Delivery Addresses</h3>
      <div className="row delivery-form g-3 mt-5">
        <div className="col-md-6">
          <div for="inputEmail4" className="form-div">
            Recipient Name
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <div for="inputPassword4" className="form-div">
            Recipient Mobile Number
          </div>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-12">
          <div for="inputAddress" className="form-div">
            Street Address
          </div>
          <input
            type="text"
            value={streetA}
            onChange={(e) => setStreetA(e.target.value)}
            className="form-control"
            placeholder="Eg. 6 Sardust Avenue"
          />
        </div>
        <div className="col-12">
          <div for="inputAddress2" className="form-div">
            Complex / Building
          </div>
          <input
            type="text"
            value={complexbuilding}
            onChange={(e) => setComplexBuilding(e.target.value)}
            className="form-control"
            placeholder="Complex or Building Name, unit number or floor"
          />
        </div>
        <div className="col-md-6">
          <div for="inputCity" className="form-div">
            City / Town
          </div>
          <input
            type="text"
            value={citytown}
            onChange={(e) => setCityTown(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-4">
          <div for="inputState" className="form-div">
            Select Province
          </div>
          <select
            id="inputState"
            value={selectProvince}
            onChange={(e) => setSelectProvince(e.target.value)}
            className="form-select"
          >
            <option select="true">Choose...</option>
            <option>Gauteng</option>
            <option>KwaZulu-Natal</option>
            <option>Western Cape</option>
            <option>Northern Cape</option>
            <option>North West</option>
            <option>Free State</option>
            <option>Limpopo</option>
            <option>Mpumalang</option>
            <option>Eastern Cape</option>
          </select>
        </div>
        <div className="col-md-2">
          <div for="inputZip" className="form-div">
            Postal Code
          </div>
          <input
            type="number"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="form-control"
            id="inputZip"
          />
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary mb-3"
            onClick={saveInfo}
          >
            Save
          </button>
        </div>
      </div>

      <button onClick={addtoSave}>Save</button>
    </div>
  );
};

export default DeliveryForm;
