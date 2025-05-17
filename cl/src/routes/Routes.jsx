import React, { useContext } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';


import { AuthContext } from "../contexts/AuthContext";

import AdminCustomer from "../pages/AdminCustomer";
import AdminDashboard from "../pages/AdminDashboard";
import AdminFeedback from "../pages/AdminFeedback";
import ModeratorLogin from "../pages/ModeratorLogin";
import AdminNewPackage from "../pages/AdminNewPackage";
import AdminPackages from "../pages/AdminPackages";
import AdminUpdatePackage from "../pages/AdminUpdatePackage";
import AllOrderHistory from "../pages/AllOrderHistory";
import Blog from "../pages/Blog";
import CreateBlog from "../pages/CreateBlog";
import Deliverer from "../pages/Deliverer";
import DelivererHome from "../pages/Deliverer_home";
import EditBlog from "../pages/EditBlog";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import LaundryBag from "../pages/Laundry_bag";
import Login from "../pages/Login";
import Manager from "../pages/Manager";
import Navbar from "../components/nav/Navbar";
import Packages from "../pages/Packages";
import Payment from "../pages/Payment";
import Register from "../pages/Register";
import SingleBlog from "../pages/SingleBlog";
import UserProfile from "../pages/UserProfile";
import UserProfileDelete from "../pages/UserProfileDelete";
import UserProfileEditDelete from "../pages/UserProfileEditDelete";
import ViewOrder from "../pages/ViewOrder";
import Worker from "../pages/Worker";
import Prices from "../pages/Prices";
import DryCleaningPage from "../components/price/price book"
import About from "../pages/aboutas"
import Footer from "../components/footer/Footer";
import Contact from "../components/contact support/contact";

const AppRoutes = () => {
	const { loggedIn } = useContext(AuthContext);
  
	return (
	  <Routes>
		<Route path="/" element={loggedIn.state && loggedIn.role !== "customer" ? (
		  <Navigate to={`/auth/${loggedIn.role}/dashboard`} />
		) : loggedIn.state && loggedIn.role === "customer" ? (
		  <Navigate to={`/auth/user/packages`} />
		) : (
		  <>
			<Navbar />
			<Home />
		  </>
		)} />
		
		<Route path="/auth/register" element={loggedIn.state && loggedIn.role ? (
		  <Navigate to={`/auth/${loggedIn.role}/dashboard`} />
		) : (
		  <>
			<Navbar />
			<Register />
		  </>
		)} />
  
		<Route path="/auth/login" element={loggedIn.state && loggedIn.role ? (
		  <Navigate to={`/auth/${loggedIn.role}/dashboard`} />
		) : (
		  <>
			<Navbar />
			<Login />
		  </>
		)} />
  
		<Route path="/auth/user/packages" element={loggedIn.state && loggedIn.role ? (
		  <>
			<Navbar />
			<Packages />
		  </>
		) : (
		  <Navigate to="/users/logout" />
		)} />
  
		<Route path="/auth/moderator/login" element={<ModeratorLogin />} />
		
		<Route path="/auth/admin/dashboard" element={loggedIn.state && loggedIn.role === "admin" ? (
		  <AdminDashboard />
		) : (
		  <Navigate to="/" />
		)} />
		
		<Route path="/auth/admin/packages" element={loggedIn.state && loggedIn.role === "admin" ? (
		  <AdminPackages />
		) : (
		  <Navigate to="/" />
		)} />
  
		<Route path="/auth/admin/packages/new" element={loggedIn.state && loggedIn.role === "admin" ? (
		  <AdminNewPackage />
		) : (
		  <Navigate to="/" />
		)} />
  
		<Route path="/auth/admin/packages/update/:id" element={loggedIn.state && loggedIn.role === "admin" ? (
		  <AdminUpdatePackage />
		) : (
		  <Navigate to="/" />
		)} />
  
		<Route path="/auth/admin/customers" element={loggedIn.state && loggedIn.role === "admin" ? (
		  <AdminCustomer />
		) : (
		  <Navigate to="/" />
		)} />
  
		<Route path="/auth/admin/feedbacks" element={loggedIn.state && loggedIn.role === "admin" ? (
		  <AdminFeedback />
		) : (
		  <Navigate to="/" />
		)} />
		
		<Route path="/auth/worker/dashboard" element={
		  <>
			<Navbar />
			<Worker />
		  </>
		} />
		
		<Route path="/createblogs" element={
		  <>
			<Navbar />
			<CreateBlog />
		  </>
		} />
		<Route path="/prices" element={  <>
			<Navbar />
			<Prices />
		  </>} />
		  <Route path="/dry-cleaning" element={<DryCleaningPage />} />

		  <Route path="/aboutas" element={ <>
			<Navbar />
			<About />
			<Footer/>
		  </>} />
		  Contact

		  <Route path="/contact" element={< Contact />} />
		<Route path="/auth/user/blogs" element={<Blog />} />
		
		<Route path="/singleblog/:id" element={<SingleBlog />} />
		
		<Route path="/payment/:id" element={<Payment />} />
		
		<Route path="/auth/manager/dashboard" element={<Manager />} />
		
		<Route path="/auth/user/profile" element={<UserProfile />} />
		
		<Route path="/auth/user/userprofileeditdelete" element={<UserProfileEditDelete />} />
		
		<Route path="/auth/user/allorderhistory" element={<AllOrderHistory />} />
		
		<Route path="/auth/user/vieworder/:id" element={<ViewOrder />} />
		
		<Route path="/auth/user/feedback" element={<Feedback />} />
		
		<Route path="/auth/user/userprofiledelete" element={<UserProfileDelete />} />
		
		<Route path="/auth/deliverer/Deliverer" element={<Deliverer />} />
		
		<Route path="/auth/deliverer/dashboard" element={<DelivererHome />} />
		
		<Route path="/auth/user/cart" element={<LaundryBag />} />
		
		<Route path="/editblogs/:id" element={<EditBlog />} />
		
		<Route path="*" element={loggedIn.state && loggedIn.role !== "customer" ? (
		  <Navigate to={`/auth/${loggedIn.role}/dashboard`} />
		) : loggedIn.state && loggedIn.role === "customer" ? (
		  <Navigate to={`/auth/user/packages`} />
		) : (
		  <Navigate to="/" />
		)} />
	  </Routes>
	);
  };
  
  export default AppRoutes;
  