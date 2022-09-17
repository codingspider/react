import React, {Component} from 'react';
class Contact extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <section id="contact" className="contact section-bg">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                        <h2>Contact Us</h2>
                        </div>

                        <div className="row">

                        <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-right">
                            <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>
                            </div>

                        </div>

                        <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left">
                            <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="form-group col-md-6">
                                <label>Your Name</label>
                                <input type="text" name="name" className="form-control" id="name" required></input>
                                </div>
                                <div className="form-group col-md-6 mt-3 mt-md-0">
                                <label>Your Email</label>
                                <input type="email" className="form-control" name="email" id="email" required></input>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label>Subject</label>
                                <input type="text" className="form-control" name="subject" id="subject" required></input>
                            </div>
                            <div className="form-group mt-3">
                                <label>Message</label>
                                <textarea className="form-control" name="message" rows="10" required></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Send Message</button></div>
                            </form>
                        </div>

                        </div>

                    </div>
                    </section>
            </div>
        );
    }
}
 
export default Contact;
