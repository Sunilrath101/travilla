import { Box } from "@chakra-ui/react";
import React from "react";

const Map = ({ city = "delhi", width = "100%", height = "800px" }) => {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        id="gmap_canvas"
        src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
      ></iframe>
      <a href="https://www.whatismyip-address.com/divi-discount/"></a>
      <br />
    </div>
  );
};

export default Map;
