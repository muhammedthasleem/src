import design from "./nav.module.css"
const Nav=()=>{
    return(
        <div id={design.nav}>
            <div className={design.logo}><img src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg" alt="" /></div>
            <div className={design.list}><ul>
                
                <li><a href="#INDIVIDUAL"role="button">INDIVIDUAL</a></li>
                <li><a href="">BUSINESS</a></li>
                <li><a href="">PARTNERS</a></li>
                <li><a href="">USEFUL INFO</a></li>
                
                </ul></div>
            <div className={design.button}>
                <div>
                <button> Log In</button>
                <button>Sign Up</button>
                </div>
            </div>

            
        
        </div>
        
    )
}
export default Nav;