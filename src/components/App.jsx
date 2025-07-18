import "../App.scss";
import Button from "./Button";
import Search from "./Search";
import FoodItem from "./FoodItem";
import NavBar from "./NavBar";
import Header from "./Header";

import Exercise from "../pages/Exercise";
import Dashboard from "../pages/dashboard";
import Nutrition from "../pages/nutrition";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

const handleClick = () => console.log("Clicked");

function App() {
  return (
    <>
      <Header
        headerNav={
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        }
      />
      <main>
        <div className="container">
          <Search />
          <Button
            onClick={handleClick}
            text="Create a Food"
            className="fullw-btn"
          />
          <h2>Created Foods</h2>
          <FoodItem
            foodName="Apple"
            calorieValue={52}
            fatValue={3}
            carbValue={96}
            proteinValue={1}
            foodMeasurement="Apple"
            foodImgPath="src/assets/apple.webp"
            className="main-img"
          />
          <FoodItem
            foodName="Apple"
            calorieValue={52}
            fatValue={3}
            carbValue={96}
            proteinValue={1}
            foodMeasurement="Apple"
            foodImgPath="src/assets/apple.webp"
            className="main-img"
          />
          <FoodItem
            foodName="Apple"
            calorieValue={52}
            fatValue={3}
            carbValue={96}
            proteinValue={1}
            foodMeasurement="Apple"
            foodImgPath="src/assets/apple.webp"
            className="main-img"
          />
        </div>
      </main>
      <NavBar />
    </>
  );
}

export default App;
