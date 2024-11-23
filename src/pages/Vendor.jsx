import data from "../apis/data";
import { useParams, Link } from "react-router-dom";

const Vendor = () => {
  const { vendorId } = useParams();
  const newData = data.find((data) => data.id.toString() === vendorId);
  console.log("newData:", newData);

  return (
    <>
      <main>vender</main>
    </>
  );
};

export default Vendor;
