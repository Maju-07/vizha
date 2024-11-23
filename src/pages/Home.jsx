import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import data from "../apis/data";
import ratingIcon from "../assets/rating.svg";
import searchIcon from "../assets/search.svg";
import filterIcon from "../assets/filter.svg";
import Login from "../components/Login";
import { vendorIconData, vendors, tamilNaduDistricts } from "../constant/index";

const Home = ({ isLogin, setIsLogin }) => {
  const [vendor, setVendor] = useState("");
  const [location, setLocation] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [date, setDate] = useState("");
  const [active, setActive] = useState(true);

  const handleLocationSelect = useCallback((district) => {
    setLocation(district);
    setLocationInput(district);
    setActive(false);
  }, []);

  const handleLocationInputChange = useCallback((e) => {
    setLocationInput(e.target.value);
    setActive(true);
  }, []);

  const filteredDistricts = tamilNaduDistricts.filter((district) =>
    district.toLowerCase().startsWith(locationInput.toLowerCase())
  );

  return (
    <main className="w-full min-h-screen flex flex-col items-center mt-2">
      <SearchBar
        vendor={vendor}
        setVendor={setVendor}
        locationInput={locationInput}
        handleLocationInputChange={handleLocationInputChange}
        active={active}
        filteredDistricts={filteredDistricts}
        handleLocationSelect={handleLocationSelect}
        date={date}
        setDate={setDate}
      />
      <VendorIcons />
      <VendorList data={data} handleLoginClick={() => setIsLogin(false)} />
      {isLogin && <Login setIsLogin={setIsLogin} />}
    </main>
  );
};

const SearchBar = ({
  vendor,
  setVendor,
  locationInput,
  handleLocationInputChange,
  active,
  filteredDistricts,
  handleLocationSelect,
  date,
  setDate,
}) => (
  <div className="w-full max-w-4xl flex gap-5">
    <div className="bg-background rounded-[3rem] w-full h-auto flex justify-between items-center border border-solid border-primary pl-5 pr-1">
      <Dropdown
        label="Who You Want"
        value={vendor}
        options={vendors}
        onChange={setVendor}
      />
      <LocationInput
        locationInput={locationInput}
        handleLocationInputChange={handleLocationInputChange}
        active={active}
        filteredDistricts={filteredDistricts}
        handleLocationSelect={handleLocationSelect}
      />
      <DateInput date={date} setDate={setDate} />
      <button className="w-[3.5rem] h-[3.5rem] bg-primary grid place-content-center rounded-full">
        <img src={searchIcon} alt="search" />
      </button>
    </div>
    <button className="px-[1rem] py-[0.5rem]  flex items-center justify-center gap-2 bg-background rounded-[3rem]">
      <img src={filterIcon} alt="filter" />
      <span>Filter</span>
    </button>
  </div>
);

const Dropdown = ({ label, value, options, onChange }) => (
  <div className="">
    <p className="text-lg font-semibold mb-2">{label}</p>
    <select
      name="vendor"
      id="vendor"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">Select Vendor</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const LocationInput = ({
  locationInput,
  handleLocationInputChange,
  active,
  filteredDistricts,
  handleLocationSelect,
}) => (
  <div className="relative">
    <p className="text-lg font-semibold mb-2">Where You Want</p>
    <input
      type="text"
      placeholder="Search Location"
      value={locationInput}
      onChange={handleLocationInputChange}
    />
    {locationInput && active && (
      <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
        {filteredDistricts.length ? (
          filteredDistricts.map((district) => (
            <li
              key={district}
              className="p-3 cursor-pointer hover:bg-blue-100 transition duration-150"
              onClick={() => handleLocationSelect(district)}
            >
              {district}
            </li>
          ))
        ) : (
          <li className="p-3 text-gray-500">No matching districts</li>
        )}
      </ul>
    )}
  </div>
);

const DateInput = ({ date, setDate }) => (
  <div className="">
    <p className="text-lg font-semibold mb-2">When You Want</p>
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
  </div>
);

const VendorIcons = () => (
  <div className="flex justify-between my-10 overflow-x-auto w-full">
    {vendorIconData.map((data, idx) => (
      <div className="flex flex-col justify-center items-center" key={idx}>
        <img src={data.icon} alt="icon" />
        <p>{data.name}</p>
      </div>
    ))}
  </div>
);

const VendorList = ({ data, handleLoginClick }) => (
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
    {data.map((item) => (
      <VendorCard
        key={item.id}
        item={item}
        handleLoginClick={handleLoginClick}
      />
    ))}
  </div>
);

const VendorCard = ({ item, handleLoginClick }) => (
  <div
    className="w-[250px] h-[300px] p-4 my-4 rounded-lg shadow-lg"
    onClick={handleLoginClick}
  >
    <Link to={`vendor/${item.id}`}>
      <img className="rounded-lg" src={item.images[0]} alt={item.name} />
      <div>
        <p>{item.name}</p>
        <p>{item.amount}</p>
      </div>
      <p>{item.place}</p>
      <div>
        <img src={ratingIcon} alt="" />
        <p>{item.rating}</p>
      </div>
    </Link>
  </div>
);

export default Home;
