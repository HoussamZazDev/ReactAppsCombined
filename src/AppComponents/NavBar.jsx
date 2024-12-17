import { Link } from "react-router-dom";


export default function NavBar(){
    return(
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/todoapp'>TodoApp</Link>
                <Link to='/profileapplication'>profileapplication</Link>
                <Link to='/countriesapi'>countriesapi</Link>
                <Link to='/calculator'>calculator</Link>

            </nav>
        </div>
    )
}