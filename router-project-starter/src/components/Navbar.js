import React from 'react'
import logo from "../assets/logo.png"
import {Link} from "react-router-dom"
import {toast} from "react-hot-toast"


const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div>

        <Link to="/"> 
            <img src={logo} alt="Logo"/>
        </Link>

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div >
            { !isLoggedIn &&
                <Link to="/">
                    <button>
                        Log in
                    </button>
                </Link>
            }
            { !isLoggedIn &&
                <Link to="/">
                    <button>
                        Sign up
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button onClick={() => {
                        setIsLoggedIn(false);
                        toast.error("Logged Out");
                    }}
                    >
                        Log Out
                    </button>
                </Link>
            }
            { isLoggedIn &&
                <Link to="/">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>
    </div>
  )
}

export default Navbar