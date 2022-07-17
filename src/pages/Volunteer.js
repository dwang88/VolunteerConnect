import Card from '../components/Card';

export default function Volunteer() {
    return(
    <div>
    <h1>Volunteer Opportunities</h1>

    <Card
    component="img" 
    height="300" 
    image='https://www.roboticsforall.us/_next/static/media/logo.17967680.png'
    alt="image" 
    title="Robotics For All Student Teacher" 
    body="Robotics for All is a 501(c)(3) non-profit organization that is dedicated to spread STEAM and Robotics education across the world! We target underprivileged communities that don't get equal access to Robotics and STEAM as other communities. Our team helps kids learn STEAM and Robotics globally while having funn! If you are interested in volunteer roles available in the field of STEAM and Robotics, you will be a perfect fit."
    button="Learn More"
    buttonlink="www.roboticsforall.us"
    tags={["online", "stem"]}>
    </Card>

    <Card
    component="img" 
    height="365" 
    image='https://media.discordapp.net/attachments/717217667500736534/997765125387849788/unknown.png'
    alt="image" 
    title="Astroteens Research Team" 
    body="A student-led 501(c)(3) non profit organization, Astroteens is started to create a community of like minded people who share a common interest in astronomy and its related discipline to learn and explore the universe beyond the Earth’s atmosphere. We at Astroteens give the future a voice. We give students passionate about astronomy and its related discipline an opportunity to express their creativity, ideas and issues that are important to them. In our community all astrophiles can participate in some way or another, be it research or guidance from our mentors."
    button="Learn More"
    buttonlink="https://www.astroteens259.com/"
    tags={["online", "stem"]}>
    </Card>

    <Card
    component="img" 
    height="365" 
    image='https://images-ext-2.discordapp.net/external/2jT88Gcgp1_FiU8_yuuAhqWebUk0ZYVILEZuYaK9hQY/https/static.wixstatic.com/media/90fe7e_c7b0e0172e584aea9f9026096f2af42f~mv2.png/v1/fill/w_140%2Ch_133%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01%2Cenc_auto/Circle%2520Logo.png'
    alt="image" 
    title="Medvocate Volunteer" 
    body="Members of Medvocate have a plethora of enriching programs to choose from and can delve right into leadership, mentorship, and community service on day one. Our growing online community is a way for members to network with one another, and is a place for stimulating conversations in regards to advancements in healthcare. 
    At Medvocate, we are providing the necessary resources for pre-health students to succeed in competitive professional programs. Now is your chance to become a leader and create a change in your community so what are you waiting for? Join today!"
    button="Learn More"
    buttonlink="https://www.imedvocate.org/"
    tags={["online", "stem"]}>
    </Card>
    </div>
    )
 }