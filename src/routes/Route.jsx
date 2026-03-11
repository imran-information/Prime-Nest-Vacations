import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import WaterfrontLiving from "../pages/WaterfrontLiving";

const Router = () => {
    return (
        <Routes>
            {/* Main layout */}
            <Route path="/" element={<MainLayout />} >
                <Route index element={<Home />} />
                <Route path="/waterfront-living" element={<WaterfrontLiving />} />
            </Route>

            {/* SignIn page */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* SignUp page  */}
            {/* <Route path="/signup" element={<Signup />} /> */}

            {/* Dashboard Layout */}
            {/* <Route path="/dashboard" element={<PrivateRoute><DashboardLayout /></PrivateRoute>}> */}
            {/* Admin routes */}
            {/* <Route path="admin-profile" element={<ProtectDashboard><AdminProfile /></ProtectDashboard>} />
                <Route path="user-management" element={<ProtectDashboard><UserManagement /></ProtectDashboard>} />
                <Route path="add-meal" element={<ProtectDashboard><AddMealForm /></ProtectDashboard>} />
                <Route path="all-meals" element={<ProtectDashboard><AllMeals /></ProtectDashboard>} />
                <Route path="updateMeal/:id" element={<ProtectDashboard><UpdateMealPage /></ProtectDashboard>} />
                <Route path="review-management" element={<ProtectDashboard><ReviewManagement /></ProtectDashboard>} />
                <Route path="upcoming-meals" element={<ProtectDashboard><UpcomingMeals /></ProtectDashboard>} />
                <Route path="serve-meals" element={<ProtectDashboard><ServeMeals /></ProtectDashboard>} /> */}
            {/* </Route> */}

        </Routes>
    )

};

export default Router;