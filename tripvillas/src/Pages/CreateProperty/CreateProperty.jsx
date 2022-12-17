import React from "react";
import { useState } from "react";
import styles from "./CreateProperty.module.css";
import PropertyDetails1 from "./PropertyDetails1/PropertyDetails1";
import PropertyDetails2 from "./PropertyDetails2/PropertyDetails2";
import PropertyDetails3 from "./PropertyDetails3/PropertyDetails3";
import PropertyDetails4 from "./PropertyDetails4/PropertyDetails4";
import PropertyDetails5 from "./PropertyDetails5/PropertyDetails5";
import PropertyDetails6 from "./PropertyDetails6/PropertyDetails6";
import PropertyDetails7 from "./PropertyDetails7/PropertyDetails7";
import PropertyDetails8 from "./PropertyDetails8/PropertyDetails8";

const CreateProperty = () => {
  const [property, setProperty] = useState({
    page1: true,
    page2: false,
    page3: false,
    page4: false,
    page5: false,
    page6: false,
    page7: false,
    page8: false,
  });

  return (
    <div>
      {property.page1 && <PropertyDetails1 />}
      {property.page2 && <PropertyDetails2 />}
      {property.page3 && <PropertyDetails3 />}
      {property.page4 && <PropertyDetails4 />}
      {property.page5 && <PropertyDetails5 />}
      {property.page6 && <PropertyDetails6 />}
      {property.page7 && <PropertyDetails7 />}
      {property.page8 && <PropertyDetails8 />}
    </div>
  );
};

export default CreateProperty;
