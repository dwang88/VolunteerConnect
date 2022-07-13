import React from 'react';
import Card from './components/Card';

export default function App() {
  return (
    <div>
    <Card
    component="img" 
    height="365" 
    image='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
    alt="image" 
    title="Google Internship" 
    body="When you think about our country’s future leaders, you envision strength, resilience, intelligence, determination, and the desire to make a difference. Here at Bayha Group, we’re very fortunate to be part of a movement encouraging high school students to have those skills and qualities."
    button="Learn More"></Card>

    <Card
    component="img" 
    height="365" 
    image='https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/amazon_a_black_noto_email_v2016_us-main._CB624175556_.png'
    alt="image" 
    title="Amazon Internship" 
    body="When you think about our country’s future leaders, you envision strength, resilience, intelligence, determination, and the desire to make a difference. Here at Bayha Group, we’re very fortunate to be part of a movement encouraging high school students to have those skills and qualities."
    button="Learn More"></Card>

    <Card
    component="img" 
    height="365" 
    image='https://cdn.shopify.com/app-store/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/CJnzrtj0lu8CEAE=.jpg'
    alt="image" 
    title="Facebook Internship" 
    body="When you think about our country’s future leaders, you envision strength, resilience, intelligence, determination, and the desire to make a difference. Here at Bayha Group, we’re very fortunate to be part of a movement encouraging high school students to have those skills and qualities."
    button="Learn More"></Card>

    <Card
    component="img" 
    height="400" 
    image='https://cdn.shopify.com/app-store/listing_images/21d07b9a03ab6e538a053381def7b15d/icon/CJnzrtj0lu8CEAE=.jpg'
    alt="image" 
    title="hi" 
    body="When you think about our country’s future leaders, you envision strength, resilience, intelligence, determination, and the desire to make a difference. Here at Bayha Group, we’re very fortunate to be part of a movement encouraging high school students to have those skills and qualities."
    button="Learn More"
    className="card5"></Card>
    </div>
    
  );
}
