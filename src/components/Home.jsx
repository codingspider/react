import React, {Component} from 'react';

class Home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <section id="hero">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                        <div>
                            <h1>We design digital products that help grow businesses</h1>
                            <h2>We are team of talented designers making websites with Bootstrap</h2>
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                        </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left">
                        <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
                        </div>
                    </div>
                    </div>

                </section>

                <main id="main">
                    
                    <section id="features" className="features">
                    <div className="container">

                        <div className="row">
                        <div className="col-lg-6 mt-2 mb-tg-0 order-2 order-lg-1">
                            <ul className="nav nav-tabs flex-column">
                            <li className="nav-item" data-aos="fade-up">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">
                                <h4>Modi sit est</h4>
                                <p>Quis excepturi porro totam sint earum quo nulla perspiciatis eius.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="100">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                                <h4>Unde praesentium sed</h4>
                                <p>Voluptas vel esse repudiandae quo excepturi.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="200">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                                <h4>Pariatur explicabo vel</h4>
                                <p>Velit veniam ipsa sit nihil blanditiis mollitia natus.</p>
                                </a>
                            </li>
                            <li className="nav-item mt-2" data-aos="fade-up" data-aos-delay="300">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                                <h4>Nostrum qui quasi</h4>
                                <p>Ratione hic sapiente nostrum doloremque illum nulla praesentium id</p>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in">
                            <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <figure>
                                <img src="assets/img/features-1.png" alt="" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="tab-pane" id="tab-2">
                                <figure>
                                <img src="assets/img/features-2.png" alt="" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="tab-pane" id="tab-3">
                                <figure>
                                <img src="assets/img/features-3.png" alt="" className="img-fluid" />
                                </figure>
                            </div>
                            <div className="tab-pane" id="tab-4">
                                <figure>
                                <img src="assets/img/features-4.png" alt="" className="img-fluid" />
                                </figure>
                            </div>
                            </div>
                        </div>
                        </div>

                    </div>
                    </section>
                    
                   
                    <section id="cta" className="cta">
                    <div className="container">

                        <div className="row" data-aos="zoom-in">
                        <div className="col-lg-9 text-center text-lg-start">
                            <h3>Call To Action</h3>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className="col-lg-3 cta-btn-container text-center">
                            <a className="cta-btn align-middle" href="#">Call To Action</a>
                        </div>
                        </div>

                    </div>
                    </section>
                    <section id="testimonials" className="testimonials">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                <h3>Saul Goodman</h3>
                                <h4>Ceo &amp; Founder</h4>
                            </div>
                            </div>

                            <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                <h3>Sara Wilsson</h3>
                                <h4>Designer</h4>
                            </div>
                            </div>

                            <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                <h3>Jena Karlis</h3>
                                <h4>Store Owner</h4>
                            </div>
                            </div>

                            <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                <h3>Matt Brandon</h3>
                                <h4>Freelancer</h4>
                            </div>
                            </div>

                            <div className="swiper-slide">
                            <div className="testimonial-item">
                                <p>
                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                </p>
                                <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                <h3>John Larson</h3>
                                <h4>Entrepreneur</h4>
                            </div>
                            </div>

                        </div>
                        <div className="swiper-pagination"></div>
                        </div>

                    </div>
                    </section>
                    <section id="team" className="team">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in">
                            <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                                <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                                <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="member" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                                <div className="social">
                                <a href=""><i className="bi bi-twitter"></i></a>
                                <a href=""><i className="bi bi-facebook"></i></a>
                                <a href=""><i className="bi bi-instagram"></i></a>
                                <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            </div>
                        </div>

                        </div>

                    </div>
                    </section>
                    <section id="clients" className="clients">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                        <h2>Clients</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row no-gutters clients-wrap clearfix wow fadeInUp">

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in">
                            <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in" data-aos-delay="100">
                            <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in" data-aos-delay="150">
                            <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in" data-aos-delay="200">
                            <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in" data-aos-delay="250">
                            <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in" data-aos-delay="300">
                            <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="client-logo" data-aos="zoom-in" data-aos-delay="350">
                            <img src="assets/img/clients/client-7.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4 col-xs-6" data-aos="zoom-in" data-aos-delay="400">
                            <div className="client-logo">
                            <img src="assets/img/clients/client-8.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                        </div>
                    </div>
                    </section>
                    
                    <section id="faq" className="faq">
                    <div className="container">

                        <div className="section-title" data-aos="fade-up">
                        <h2>Frequently Asked Questions</h2>
                        </div>

                        <ul className="faq-list">

                        <li>
                            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                            <p>
                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                            <p>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                            <p>
                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                            <p>
                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                            <p>
                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                            </p>
                            </div>
                        </li>

                        <li>
                            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
                            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                            <p>
                                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
                            </p>
                            </div>
                        </li>

                        </ul>

                    </div>
                    </section>
                    

                </main>

            </div>
        );
    }
}
 
export default Home;