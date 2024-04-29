import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import AddTouristSport from "../pages/AddTouristSport/AddTouristSport";
import MyList from "../pages/MyLIst/MyList";
import PrivetRoute from "../pages/PrivetRoute/PrivetRoute";
import ViewDetails from "../Components/ViewDetails/ViewDetails";
import UpdatedPage from "../Components/UpdatedPage/UpdatedPage";
import Optional from "../Components/UpdatedPage/Optional/Optional";
import OptionalCard from "../Components/UpdatedPage/Optional/OptionalCard";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/tourist"),
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <ViewDetails></ViewDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/newtourist/${params.id}`),
      },
      {
        path: "/allTourists",
        element: <AllTouristsSpot></AllTouristsSpot>,
        loader: () => fetch("http://localhost:5000/tourist"),
      },
      {
        path: "/addTourists",
        element: (
          <PrivetRoute>
            <AddTouristSport></AddTouristSport>
          </PrivetRoute>
        ),
      },
      {
        path: "/myList",
        element: (
          <PrivetRoute>
            <MyList></MyList>
          </PrivetRoute>
        ),
       
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updated/:id",
        element: (
          <PrivetRoute>
            <UpdatedPage></UpdatedPage>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/tourist/${params.id}`),
      },
      {
        path: "/optional",
        element: (
         <PrivetRoute><Optional/></PrivetRoute>
        ),
        
      },
      {
        path: '/optionalCard',
        element: <OptionalCard></OptionalCard>,
        // loader: ()=> fetch('http://localhost:5000/comment')

      }
    ],
  },
]);
export default Route;
