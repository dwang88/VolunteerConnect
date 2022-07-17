import Card from '../components/Card';

export default function Internships() {
    return(
    <div>
    <h1>Internship Opportunities</h1>
    <Card
    component="img" 
    height="365" 
    image='https://cdn.mos.cms.futurecdn.net/BQwukuZwwwXrg27B9Le2Q6.png'
    alt="image" 
    title="Tesla International Internship Program" 
    body="Experience one-on-one mentorship, interactive networking events and weekly seminars within our exceptional community of experts. The Tesla Internship Program 2022-2023 gives students the opportunity to work and collaborate with Tesla employees of various fields. Interns are recruited regardless of their nationality, gender, race, religious affiliation, age, or background. Interns are selected on an equal basis based on their abilities. "
    button="Learn More"
    buttonlink="https://www.tesla.com/careers/search/?query=internship&country=US"
    tags={["paid", "online", "inperson", "stem"]}>
    </Card>

    <Card
    component="img" 
    height="365" 
    image='https://media.discordapp.net/attachments/717217667500736534/997769462151401472/unknown.png'
    alt="image" 
    title="Stack Cryptocurrency Summer Internship" 
    body="Join a community of more than 100 ambitious teen entrepreneurs & leaders. You decide how involved you want to be. Our teen entrepreneur community works directly with the Stack executive team at least 2-4 hours per month. It's the first step to becoming a future world leader. Get a chance to work with our team on finance, marketing, product, tech or business development."
    button="Learn More"
    buttonlink="https://trystack.io"
    tags={["paid", "online"]} >
    </Card>

    <Card
    component="img" 
    height="365" 
    image='https://www.pentacle.org/wp-content/themes/sherman/static/img/pentacle-logo.svg'
    alt="image" 
    title="Pentacle Business Internship" 
    body="Are you interested in an exciting internship program by gaining hands-on work experience, career development, and mentorship? Pentacle high school internship program offers you to develop real-life business skills throughout an 8-week program session. If you want to start your career early, apply now!"
    button="Learn More"
    buttonlink="https://www.pentacle.org"
    tags={["online"]}>
    </Card>

    <Card
    component="img" 
    height="365" 
    image='https://mlt2dl5fwpdw.i.optimole.com/Ln8cuDo-a1kVIwTi/w:342/h:342/q:auto/https://building-u.com/wp-content/uploads/2018/10/cropped-BUlogo.png'
    alt="image" 
    title="Building-U High School Internship" 
    body="We at building-u are always looking for high school students to join our crew in collecting some of the awesome programs, opportunities, and scholarships out there and organizing them in an easy-to-search database that can spark ideas and motivate plans. As an R & D intern, you’ll get experience and guidance doing compressed writing within a time-frame, meet weekly with our R&D staff ninja’s to practice and hone your research and oral communication skills, and along the way you’ll be exposed to all sorts of one-of-a-kind programs that may just give you some direction as you map out your own future."
    button="Learn More"
    buttonlink="https://building-u.com/"
    tags={["online"]}>
    </Card>

    </div>
    )
 }