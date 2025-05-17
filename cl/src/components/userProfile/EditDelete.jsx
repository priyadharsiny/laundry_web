import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmModal from "../modals/ConfirmModal";
import Error from "../toasts/Error";
import Success from "../toasts/Success";
import axios from "axios";
import img from "../../assets/images/UserprofileAvatar2.png";

const EditDelete = () => {
    const navigate = useNavigate(); // Updated hook
    const [userDetail, setUserDetail] = useState({});
    const [useId, setUserId] = useState("");
    const [Popup, setPopup] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [buttonStatus, setButtonStatus] = useState(false);
    const [updateUser, setUpdatUser] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        updatedAt: "",
    });

    const getUserprofileDetails = async () => {
        try {
            const res = await axios.get("/customers/userProfile");
            setUpdatUser(res.data.customer);
        } catch (err) {
            console.error(err.message);
        }
    };

    const saveUpdatedUser = async (e) => {
        e.preventDefault();
        setButtonStatus(true);
        try {
            updateUser.updatedAt = new Date();
            const res = await axios.put(`/customers/updateUserProfile`, updateUser);
            setButtonStatus(false);
            setUpdatUser({
                name: "",
                email: "",
                password: "",
                mobile: "",
            });
            setSuccess("User updated successfully.");
            getUserprofileDetails();
            setTimeout(() => navigate("/auth/user/profile"), 2000); // Updated navigation method
        } catch (err) {
            setError(err.response);
            console.log(err.response);
            setButtonStatus(false);
        }
    };

    useEffect(() => {
        getUserprofileDetails();
    }, []);

    const deleteprofile = async (id) => {
        try {
            const res = await axios.delete("/customers/deleteProfile");
            if (res.status === 200) {
                setPopup(false);
                const logout = async () => {
                    await axios.get("/users/logout");
                    navigate("/"); // Updated navigation method
                };
                logout();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            {Popup && (
                <ConfirmModal
                    setShowModal={setPopup}
                    showModal={Popup}
                    execute={deleteprofile}
                    id={useId}
                />
            )}
            <div className="w-full text-center flex justify-center">
                {error && <Error error={error} top="-top-2" />}
                {success && <Success success={success} top="-top-2" />}
            </div>
            <div className="absolute mx-auto bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2 ml-96 my-8 w-full max-w-xl rounded-lg px-4 pt-2 items-center justify-end">
                <h1 className="text-5xl font-extrabold pb-10 text-center">
                    Edit profile
                </h1>
                <div className="relative w-24 h-24 mb-8 object-center">
                    <img
                        className="rounded-full border border-gray-100 shadow-sm object-center "
                        src={img}
                        alt="user image"
                    />
                </div>
                <form
                    className="w-2/4 text-gray-800 font-semibold relative"
                    onSubmit={saveUpdatedUser}
                    encType="multipart/form-data"
                >
                    <div className="mb-4">
                        <label className="font-semibold text-24px" htmlFor="username">
                            User Name
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="User Name"
                                className="w-full border-gray-500 border-2 rounded-md px-4 py-2"
                                value={updateUser.name}
                                onChange={(e) => setUpdatUser({ ...updateUser, name: e.target.value })}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="font-semibold text-24px" htmlFor="email">
                            Email
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full border-gray-500 border-2 rounded-md px-4 py-2"
                                value={updateUser.email}
                                onChange={(e) => setUpdatUser({ ...updateUser, email: e.target.value })}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="font-semibold text-24px" htmlFor="mobile">
                            Mobile Number
                            <input
                                type="text"
                                name="mobile"
                                id="mobile"
                                placeholder="Mobile"
                                className="w-full border-gray-500 border-2 rounded-md px-4 py-2"
                                value={updateUser.mobile}
                                onChange={(e) => setUpdatUser({ ...updateUser, mobile: e.target.value })}
                                required
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="font-semibold text-24px" htmlFor="password">
                            Password
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                className="w-full border-gray-500 border-2 rounded-md px-4 py-2"
                                value={updateUser.password}
                                onChange={(e) => setUpdatUser({ ...updateUser, password: e.target.value })}
                                required
                            />
                        </label>
                    </div>
                    <div className="flex justify-end mt-4 space-x-4">
                        <button
                            className="bg-black hover:bg-light-blue text-white font-semibold py-2 px-4 rounded-lg"
                            type="submit"
                        >
                            {buttonStatus ? "Saving" : "Save"}
                        </button>
                        <button
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
                            type="button"
                            onClick={() => setPopup(true)}
                        >
                            Delete
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDelete;
