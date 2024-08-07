import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import Swal from "sweetalert2";
import { Typewriter } from "react-simple-typewriter";
import { Navigate } from "react-router-dom";

const   AddTouristSport = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleAddData = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const country_Name = form.country_Name.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const seasonality = form.seasonality.value;
    const location = form.location.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const totaVisitorsPerYear = form.totaVisitorsPerYear.value;
    const travel_time = form.travel_time.value;
    const average_cost = form.average_cost.value;
    const description = form.description.value;

    const newTourist = {
      image,
      country_Name,
      tourists_spot_name,
      seasonality,
      location,
      email,
      userName,
      totaVisitorsPerYear,
      travel_time,
      average_cost,
      description,
    };
    // console.log(newTourist);
    fetch("https://b9-a10-tourism-management-of-my-dream-country-server.vercel.app/tourist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTourist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "add data successful",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        
        form.reset();
        <Navigate to={'/'}></Navigate>
      });
  };
  return (
    <div className="min-h-[calc(100vh-250px)] lg:mx-10 mx-2 mb-10 ">
      <div className=" pt-10  animate__animated animate__slideInDown">
        <div className="shadow-2xl p-5 rounded  dark:bg-[#121c26d5]">
          <div className="mt-5 mb-8">
            <p className="text-center text-3xl font-semibold">
              <span className="text-[#FF497C]">
                <Typewriter
                  words={['Your added Country', ' Your added Country', ' Your added Country', ' Your added Country']}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  // onLoopDone={handleDone}
                  // onType={handleType}
                />
               
              </span>
            </p>
          </div>
          {/* form */}
          <form onSubmit={handleAddData}>
            <div className=" flex gap-8 ">
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">image</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="image Link"
                  name="image"
                  required
                />

                <label
                  className="block mt-4 mb-2 dark:text-white"
                  htmlFor="brand"
                >
                  country_Name
                </label>
                <select
                  type="text"
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  placeholder="select country_Name"
                  name="country_Name"
                  required
                >
                  <option value="Thailand" selected>
                    Thailand
                  </option>
                  <option value="Indonesia" selected>
                    Indonesia
                  </option>
                  <option value="Malaysia" selected>
                    Malaysia
                  </option>
                  <option value="Vietnam" selected>
                    Vietnam
                  </option>
                  <option value="Cambodia" selected>
                    Cambodia
                  </option>
                  <option value="Bangladesh" selected>
                    Bangladesh
                  </option>
                </select>

                <label className="block mt-4 mb-2 dark:text-white">
                  tourists_spot_name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="tourists_spot_name"
                  name="tourists_spot_name"
                  required
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  seasonality
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="seasonality"
                  name="seasonality"
                  required
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  location
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="location"
                  name="location"
                  required
                />
              </div>
              {/* Right side */}
              <div className="flex-1">
                <label className="block mb-2 dark:text-white">Email</label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="email"
                  defaultValue={user.email}
                  placeholder="Enter Email"
                  name="email"
                  required
                />
                <label className="block mb-2 mt-4 dark:text-white">
                  User Name
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="user Name"
                  defaultValue={user.displayName}
                  name="userName"
                  required
                />

                <label className="block mt-4 mb-2 dark:text-white">
                  total Visitors PerYear
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="total Visitors PerYear"
                  name="totaVisitorsPerYear"
                  required
                />
                <label className="block mt-4 mb-2 dark:text-white">
                  travel_time
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="text"
                  placeholder="travel_time"
                  name="travel_time"
                  required
                />
                <label className="block mt-4 mb-2 dark:text-white">
                  average_cost
                </label>
                <input
                  className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                  type="number"
                  placeholder="average_cost"
                  name="average_cost"
                  required
                />
              </div>
            </div>
            <label className="block mt-4 mb-2 dark:text-white">
              short description
            </label>
            <input
              className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
              type="text"
              placeholder="description"
              name="description"
              required
            />
            <input
              className="px-4 w-full py-4 mt-4 rounded hover:bg-[#ec0a4a]  bg-purple-600 duration-200 text-white cursor-pointer font-semibold"
              type="submit"
              value="Add Tourists Sport"
            />
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTouristSport;
