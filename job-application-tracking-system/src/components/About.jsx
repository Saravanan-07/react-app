import { Link } from "react-router-dom";
const About = () => {
    return (
        <div>
            <h4>Version 1.2.4</h4>
            <p>Application tracker helps to keep record of your job applicants, make sure to add the description, the date and time , role and job type.</p>
            <Link to="/">Go back</Link>
        </div>
    );
};

export default About;