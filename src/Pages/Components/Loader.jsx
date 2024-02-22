import React from "react";
import "../../css/dog-loader.css";

function Loader() {
  return (
    <div>
      <div className="loader">
        <div className="dog">
          <div className="dog-body">
            <div className="dog-tail">
              <div className="dog-tail">
                <div className="dog-tail">
                  <div className="dog-tail">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail">
                          <div className="dog-tail" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dog-torso" />
          <div className="dog-head">
            <div className="dog-ears">
              <div className="dog-ear" />
              <div className="dog-ear" />
            </div>
            <div className="dog-eyes">
              <div className="dog-eye" />
              <div className="dog-eye" />
            </div>
            <div className="dog-muzzle">
              <div className="dog-tongue" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
