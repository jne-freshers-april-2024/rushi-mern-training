import '../components/ContactUs.css'

const ContactUs = ()=>{
    return(
        <>
        <div className="container">
            <div className="contact-form"> 
                <h2>Contact Us</h2> 
                <form>
                <div className="form-group">
                    <label for="name">Name:</label> 
                    <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
                </div>

                <div className="form-group"> 
                    <label for="email">Email:</label> 
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"/> 
                </div>

                <div className="form-group"> 
                    <label for="message">Message:</label> 
                    <textarea className="form-control" id="message" rows="4" placeholder="Write your message"></textarea> 
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