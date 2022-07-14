import React from 'react';
import Card from './components/Card';
//import firebase from './firebase';
import Navbar from './navbar';
import Internships from "./pages/Internships";
import Volunteer from './pages/Volunteer';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/internships" element={<Internships />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    <Card
    component="img" 
    height="365" 
    image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
    alt="image" 
    title="smth" 
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    button="Learn More">
    </Card>
    <Card
    component="img" 
    height="365" 
    image='https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_a_black_noto_email_v2016_us-main._CB624175556_.png'
    alt="image" 
    title="Aip" 
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    button="Learn More">
    </Card>
    <Card
    component="img" 
    height="365" 
    image='https://cdn.shopify.com/app-store/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/CJnzrtj0lu8CEAE=.jpg'
    alt="image" 
    title="Facebook Internship" 
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    button="Learn More">
    </Card>
    <Card
    component="img" 
    height="365" 
    image='https://cdn.shopify.com/app-store/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/CJnzrtj0lu8CEAE=.jpg'
    alt="image" 
    title="Facebook Internship" 
    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    button="Learn More"
    className="card5">
    </Card>
    </div>
  );
}
