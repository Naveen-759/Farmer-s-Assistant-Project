import React from "react";
import "../components/Main.css";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <div className="main1">
      <div className="cont1">
        <div className="container1">
          <Link to="/croplist">Crop List</Link>
        </div>

        <div className="disc">
          Select the type of the soil and get the list of crops that can be
          grown in that selected soil
        </div>
      </div>
      <hr />
      <div className="cont2">
        <div className="container2">
          <Link to="/fertilizers">Fertilizers</Link>
        </div>

        <div className="disc">
          Select the type of the soil and the crop to be grown in that soil and
          get the suitable Fertilizer to be applied
        </div>
      </div>
      <hr />

      <div className="cont3">
        <div className="container3">
          <Link to="/diseases">Diseases</Link>
        </div>

        <div className="disc">
          Select the crop and find the various diseases associated with that
          selected crop
        </div>
      </div>
      <hr />

      <div className="cont4">
        <div className="container4">
          <Link to="/pesticides">Pesticides</Link>
        </div>

        <div className="disc">
          Select the crop name and the disease name and get the suitable
          pesticide to be applied to control the disease
        </div>
      </div>
    </div>
  );
}
