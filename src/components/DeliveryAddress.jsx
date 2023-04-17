import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [streetA, setStreetA] = useState("");
  const [complexbuilding, setComplexBuilding] = useState("");
  const [citytown, setCityTown] = useState("");
  const [selectProvince, setSelectProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const navigator = useNavigate();

  const saveInfo = () => {

    const localFirstName = localStorage.getItem('FirstName');

    if (!name || !mobileNumber || !streetA || !complexbuilding || !citytown || !selectProvince || !postalCode) {
      toast.error("All the inputs are required.");
    }

    if (name !== localFirstName) {
      toast.error('Name does not match')
    }

    if (name === localFirstName) {
      toast.success('Name does match')
    }

    if (name && mobileNumber && streetA && complexbuilding && citytown && selectProvince && postalCode) {
      localStorage.setItem("MobileNumber", mobileNumber);
      localStorage.setItem("StreetA", streetA);
      localStorage.setItem("ComplexBuilding", complexbuilding);
      localStorage.setItem("CityTown", citytown);
      localStorage.setItem("SelectProvince", selectProvince);
      localStorage.setItem("PostalCode", postalCode);
      toast.success("Save.");
      navigator('/paymentpage')

    }
  }

  return (
    <div className="container">
      <h3 className="text-center">Delivery Addresses</h3>
      <div class="row g-3 mt-5">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Recipient Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            class="form-control"
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            Recipient Mobile Number
          </label>
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            class="form-control"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Street Address
          </label>
          <input
            type="text"
            value={streetA}
            onChange={(e) => setStreetA(e.target.value)}
            class="form-control"
            placeholder="Eg. 6 Sardust Avenue"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Complex / Building
          </label>
          <input
            type="text"
            value={complexbuilding}
            onChange={(e) => setComplexBuilding(e.target.value)}
            class="form-control"
            placeholder="Complex or Building Name, unit number or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City / Town
          </label>
          <input
            type="text"
            value={citytown}
            onChange={(e) => setCityTown(e.target.value)}
            class="form-control"
          />
        </div>
        <div class="col-md-4">
          <label for="inputState" class="form-label">
            Select Province
          </label>
          <select
            id="inputState"
            value={selectProvince}
            onChange={(e) => setSelectProvince(e.target.value)}
            class="form-select"
          >
            <option selected>Choose...</option>
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
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Postal Code
          </label>
          <input
            type="number"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            class="form-control"
            id="inputZip"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary" onClick={saveInfo}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
