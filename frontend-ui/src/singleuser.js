import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import JsonForm  from './form';
import { Helmet } from 'react-helmet';
import Navbar from './navbar';

function Singleuser()
{
    return(
        <div className='App'>
            <body>
    <div id="parallax-1" class="parallax-window" data-parallax="scroll" data-image-src="img/biz-oriented-header.jpg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="tm-logo">
                        <i class="fas fa-industry fa-5x mr-5"></i>
                        <span class="text-uppercase tm-logo-text">Business Oriented</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="tm-nav-container-outer">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">                    
                    <nav class="navbar navbar-expand-lg" id="tm-main-nav">
                        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse"
                            data-target="#navbar-nav" aria-controls="navbar-nav" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="dark-blue-text"><i class="fas fa-bars"></i></span>
                        </button>                    
                        <div class="collapse navbar-collapse tm-nav" id="navbar-nav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="index.html">Home</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link tm-nav-link" href="#">Services <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="about.html">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link tm-nav-link" href="contact.html">Contact</a>
                                </li>
                            </ul>                        
                        </div>                        
                    </nav>                    
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-7">
        <div class="row mb-6">
            <div class="col-lg-7 mb-lg-0 mb-5 pr-lg-5">
                <section class="mb-10">
                    <div>
                        <h3 class="tm-title-gray mb-4">Our services for your business growth</h3>
                        <hr class="mb-5 tm-hr"/>
                        <p class="mb-5">This is another HTML page for services in Business Oriented Template. You are
                            <span class="tm-text-primary">allowed</span> to use this CSS template for your business or
                            personal website. You are <span class="tm-text-primary">NOT allowed</span> to re-distribute
                            the template ZIP file on any template collection website.
                            <a href="https://templatemo.com/contact" class="tm-text-primary-link">Contact us</a> for
                            more information about this template.
                        </p>
                        <p class="mb-5">Nulla eget ipsum nec augue semper convallis non a lacus. Integer vel condimentum
                            neque. Fusce sollicitudin arcu et tortor lobortis rhoncus. Morbi accumsan efficitur nunc, in
                            faucibus velit pretium quis. Sed elementum auctor felis eu tristique.</p>
                    </div>
                </section>
                <section>
                    <h3 class="tm-title-gray mb-4">Professional Business Services</h3>
                    <hr class="mb-5 tm-hr"/>
                    <div class="tm-services-box mb-60">
                        <img src="img/services-2.jpg" alt="Image" class="img-fluid tm-services-img/"/>
                        <div>
                            <h4 class="tm-text-primary mb-4">Maecenas molestie varius ipsum</h4>
                            <p class="tm-strategy-text">Donec mauris eros, suscipit fermentum faucibus sagittis, dictum
                                eget nulla. Duis maximus porttitor ornare. Maecenas blandit vestibulum massa at
                                accumsan. Duis ultricies mi id justo porttitor, et sollicitudin justo vehicula.</p>
                        </div>
                    </div>
                    <div class="tm-services-box mb-5">
                        <img src="img/services-3.jpg" alt="Image" class="img-fluid tm-services-img"/>
                        <div>
                            <h4 class="tm-text-primary mb-4">Sed elementum justo in pulvinar</h4>
                            <p class="tm-strategy-text">Sed non tellus vestibulum, tincidunt risus a, semper erat.
                                Aliquam porta leo eget faucibus consectetur. Nam mauris felis, consectetur non cursus
                                sit amet, pellentesque ac leo. Aliquam at dolor du velit scelerisque fringilla.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="col-lg-5">
                <img src="img/services-1.jpg" alt="Image" class="img-fluid"/>
                <div class="tm-bg-gray-dark tm-box-2">
                    <h4 class="tm-text-primary tm-h3 mb-4">Fusce sollicitudin arcu et tortor</h4>
                    <p class="mb-5">Cras rhoncus tempor consequat. Donec convallis orci id scelerisque convallis. Suspendisse varius sapien mauris.</p>
                    <p class="mb-5">Quisque accumsan lorem sed bibendum vehicula. Aenean gravida, nunc ac bibendum bibendum.</p>
                    <p>Donec convallis orci id scelerisque convallis. Suspendisse varius sapien mauris. Proin accumsan.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="parallax-3" class="parallax-window parallax-window-2" data-parallax="scroll"
        data-image-src="img/biz-oriented-footer-2.jpg">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <div class="tm-overlay tm-bg-black-transparent p-5 ml-auto mr-0">
                        <p class="mb-0 text-white">This is a parallax image background section. Text section box has 50% alpha on black color. Phasellus interdum lobortis ultrices. Cras nulla nulla, fermentum vel ligula in, mollis imperdiet ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid mt-7 mb-6">
        <div class="row">
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-cloud-sun fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-hiking fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-tree fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
            <div class="col-xl-3 col-lg-6 px-xl-4 px-3">
                <div class="tm-box-3 tm-bg-gray">
                    <div class="text-center"><i class="fas fa-campground fa-3x mb-8 mt-4"></i></div>
                    <p>Nam nulla purus, lobortis ac euismod non, tincidunt eget velit. Nullam bibendum tortor id consectetur auctor.</p>
                </div>
            </div>
        </div>
    </div>

    <footer class="container-fluid">
        <div class="row">
            <p class="col-lg-9 col-md-8 mb-5 mb-md-0">
                Copyright &copy; 2020 <span class="tm-text-primary">Business Oriented</span>
                - designed by <a rel="nofollow" target="_parent" href="https://templatemo.com" class="tm-link-primary">TemplateMo</a>
            </p>
            <div class="col-lg-3 col-md-4 text-right">
                <a rel="nofollow" target="_blank" href="https://fb.com/templatemo" class="tm-social-link">
                    <i class="fab fa-facebook fa-2x tm-social-icon"></i>
                </a>
                <a href="https://twitter.com" class="tm-social-link">
                    <i class="fab fa-twitter fa-2x tm-social-icon"></i>
                </a>
                <a href="https://linkedin.com" class="tm-social-link">
                    <i class="fab fa-linkedin fa-2x tm-social-icon"></i>
                </a>
            </div>
        </div>
    </footer>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/parallax.min.js"></script>
    <script src="js/tooplate-script.js"></script>
    
</body>
        </div>
    )
}
export default Singleuser;