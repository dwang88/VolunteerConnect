import Card from '../components/Card';

export default function Events() {
    return(
    <div>
    <h1>Events & Workshops</h1>
    <Card
    component="img" 
    height="365" 
    image='https://climatescience.org/_next/image?url=%2Fimg%2Fcs-logo-2021-light.png&w=640&q=75'
    alt="image" 
    title="Climate Science Olympiad" 
    body="ClimateScience is a global charity led by hundreds of driven volunteers from 30 countries and a small team of staff. The 2022 Climate Science Olympiad is a student competition to find solutions to climate change. Already in over 100 countries.
    Participate on your own or in a team of two, and compete against youths from around the world to find solutions to climate change. The top 10 teams will win a share of the $15,000 prize pool."
    button="Learn More">
    </Card>
    <Card
    component="img" 
    height="365" 
    image='https://media.discordapp.net/attachments/717217667500736534/997766332806332548/unknown.png'
    alt="image" 
    title="Inspire2Dev Hackathon" 
    body="Our free, one-day Hackathon is a great opportunity for all 6th-9th grade students to collaborate with their peers and put their creative brains together to develop cool projects! Everyone will have access to our helpful STEM mentors and will meet wonderful speakers in the STEM Field! Keep it cool, have fun!"
    button="Learn More">
    </Card>

    </div>
    )
 }