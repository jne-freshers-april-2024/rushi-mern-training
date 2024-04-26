import '../components/ContactUs.css'

const ContactUs = ()=>{
    return(
        <>
        <div className="container">
            <div className="contact-form"> 
                <h2>Sign In</h2> 
                <form>
                <div className="form-group">
                    <label for="username">Enter Username</label> 
                    <input type="text" className="form-control" id="username" placeholder="Enter Username"/>
                </div>

                <div className="form-group"> 
                    <label for="password">Password:</label> 
                    <input type="password" className="form-control" id="password" placeholder="Enter Password"/> 
                </div>


                <div className="form-group text-center"> 
                    <button type="submit" className="btn btn-primary">Submit</button> 
                </div>
                </form>
            </div>
        </div>
        </>
    );
}


export default ContactUs;