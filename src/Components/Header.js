import React from "react";
import logo from "../Assets/TF logo.svg";
import metric from "../Assets/metrics.png";
import list from "../Assets/list.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* implement logic for underling toggle */}
      <div className="py-2 px-4 inline-flex justify-between">
        <img className="px-2" alt="logo" src={logo} />
        <div className="flex items-center mx-2">
          <img className="h-4 mr-1" alt="metric" src={metric} />
          <Link to="/">
            <p className="text-sm font-bold">Metrics</p>
          </Link>
        </div>
        <div className="flex items-center">
          <img className="h-3 mr-1" alt="list" src={list} />
          <Link to="/logs">
            <p className="text-sm font-bold">Logs</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
