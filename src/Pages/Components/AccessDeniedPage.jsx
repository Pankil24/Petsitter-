import React from "react";

import images from "../../images/images";
function AccessDeniedPage() {
  return (
    <div className="mt-4">
      <img style={{ height: "92px" }} src={`${images?.errorImage}`} alt="" />
      <p className="mt-4">You didn't have access to this page</p>
    </div>
  );
}

export default AccessDeniedPage;
