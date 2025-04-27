import { NavLink } from "react-router-dom";
function About() {
    return (
      <>
        <header>
        <NavLink to="/about">About</NavLink>
          {/* Save space for NavBar */}
        </header>
        <main>
          <h1>This is my about component!</h1>
        </main>
      </>
    );
  };
  
  export default About;