import React from "react";
import { Link } from "react-router-dom";

const Viewcircle = () => {
  return (
    <div className="container text-center">
          <div className="row">
            <div className="col">
            <Link to="/presale" className="card">
          <img
            src="https://thumbs.dreamstime.com/b/red-sale-sign-sticker-illustration-isolated-white-background-31436582.jpg"
            alt="..."
          />
          <div className="card-link mt-3 text-center">Sale</div>
        </Link>
            </div>
            <div className="col">
            <Link to="/men">
          <div className="card">
            <img
              src="https://images.hugoboss.com/is/image/hugobossdm/HBME_110_W22FW_BOSS_CTG_Tier3_BMO_005_sRGB?%24large%24&cropN=0.2907386,0.0953125,0.4747948,0.30625&align=0,-1&fit=crop,1&ts=1677613869963&qlt=80&wid=720&hei=696"
              alt="..."
            />
          </div>
          <div className="card-link mt-3 text-center">Men</div>
        </Link>
            </div>
            <div className="col">
            <Link to="/women">
          <div className="card">
            <img
              src="https://discoverymood.com/wp-content/uploads/2020/04/Mental-Strong-Women-min.jpg"
              alt="..."
            />
          </div>
          <div className="card-link mt-3 text-center">Women</div>
        </Link>
            </div>
          </div>
          <div class="container text-center">
</div>
        </div>
      
  );
};

export default Viewcircle;
