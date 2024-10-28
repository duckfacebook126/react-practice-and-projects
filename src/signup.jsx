import PropTypes from 'prop-types'
import './signup.css'

function Signup(props)
{

    if(props.isvalid){
return(<>
<div className="signup-form">
    <h2>Signup</h2>
    <form>
        <input type="text" placeholder="Full Name" required/>
        <br/>
        <input type="email" placeholder="Email Address" required/>
        <br/>
        <input type="text" placeholder="Username" required/>
        <br/>
        <input type="password" placeholder="Password" required/>
        <br/>

        <input type="password" placeholder="Confirm Password" required/>
        <br/>

        <input type="text" placeholder="Phone Number" required/>
        <br/>

        <button type="submit">Sign Up</button>
    </form>
</div>




</>);
    }else{
        return(<h2>Signup Failed</h2>)
    }

}
Signup.propTypes={
isvalid: PropTypes.bool

}
export default Signup