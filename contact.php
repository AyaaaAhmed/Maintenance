<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        
        <title>Contact</title>
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link rel="stylesheet" href="css/animate.css">
        <script src="js/fontawesome-all.min.js"></script>
        <link rel="stylesheet" href="css/style.css">
        <link rel="shortcut icon" type="image/x-icon" href="images2/favicon.ico"/>
    </head>
    <body class="body">
        
        <!-- Start Navbar -->
        <nav class="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
            <div class="container">
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="images/mech.png" alt="logo"></a>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link navbarHeight lang" key="Home" href="home.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbarHeight lang"  key="About" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbarHeight lang" key="Portfolilo" href="portfolio.html">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link navbarHeight lang" key="offers" href="offers.html">Offers</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link navbarHeight lang"  key="Contact" href="contact.php">Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img width="20"  height="28" src="images/United_Kingdom-512.png" alt="lang">En</a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a id="english" class="translate dropdown-item" href="contact.php"><img width="20"  height="28" src="images/United_Kingdom-512.png" alt="lang-en"> English</a>
                              <a id="arabic" class="translate dropdown-item" href="contact.php"><img width="30"  height="16" src="images/arabia.png" alt="arabic-lang"> العربية</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Start Navbar -->

        
        
        <!-- Start Header -->
        <header class="contactHeader">
            <div class="container">
                <div class="wow fadeIn">
                    <h2 class="h1 lang" key="headContact">Contact US</h2>
                </div>
                
            </div>
        </header>
        <!-- End Header -->
        
        
        <!-- Start Contacts -->
        <section class="contacts">
            <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-3 content wow fadeInLeft" data-wow-offset = "">
                    <div class="location">
                        <h4 class="lang" key="location">Our Location</h4>
                        <p>
                            <span class="lang" key="address1">#9 - 3815 Thatcher Avenue</span>
                            <br>
                            <span class="lang" key="address2">Saskatoon, Saskatchewan</span> 
                        </p>
                    </div>
                    
                    <div class="contact-information">
                        <h4 class="lang" key="contactInfo">Contact Information</h4>
                        <p>
                            <span class="lang" key="email">Email: &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;</span>
                            <span class="lang" key="domain">support@mechanology-eg.com</span><br>
                            
                            <span class="lang" key="primaryPhone">Primary Phone: &nbsp;&nbsp;</span>
                            
                            <span class="lang" key="primaryNumber">1 (306) 249 - 9609</span><br>
                            
                            <span class="lang" key="mobilePhone">Alternate Phone: </span> 
                            <span class="lang" key="primaryNumber">1 (306) 249 - 9612</span><br>
                        </p>
                    </div>
                    
                    <div class="office-hours">
                        <h4 class="lang" key="officeHourse">Office Hours</h4>
                        <p>
                            <span class="lang" key="hours">Monday - Friday</span> 
                            <span class="lang" key="days">8 am - 5 pm</span> <br>
                            
                            <span class="lang" key="hours2">Saturday - Sunday</span> 
                            <span class="lang" key="days2">Closed</span><br>
                            <span class="lang" key="hours3">Holidays</span>
                             &emsp;&nbsp;<span class="lang" key="days3">Closed</span>
                        </p>
                    </div>
                </div>
                <div class="col-lg-7 google-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.1954335810565!2d31.208274515000742!3d30.031250581887104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145846d0b807627d%3A0xb2a6ce4702edc3da!2sFaculty+of+Computers+and+Information+Cairo+University!5e0!3m2!1sen!2seg!4v1519696644871" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
        <!-- End Contacts -->
        
        <div class="clearfix"></div>
        
        <!-- Start Forms -->
        <section class="forms">
            <div class="container">
                <h2 class="text-center lang" key="formContactHead">Contact With Us</h2>
                <div class="buttons wow fadeInUp" data-wow-offset = "150">
                    <ul class="list-unstyled">
                        <li class="company"><span><i class="fas fa-building"></i></span><i class="lang" key="corporate">Corporate</i></li>
                        <li class="customer"><span><i class="fas fa-user"></i></span><i class="lang" key="customerForms">Customer</i></li>
                    </ul>
                </div>
                
                <div class="customerForm">
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <div class="row justify-content-center">
                            <div class="inputs col-md-5">
                                <span><i class="fas fa-times"></i></span>
                                <input type="text" hidden="true" name="check" value="1">
                                <input class="username form-control" type="text" name="name" placeholder="Name"
                                       value="<?php
                                                    if(isset($userName))
                                                    {
                                                        echo $userName;
                                                    }
                                                ?>">
                                <input class="form-control customerPhone" type="text" name="phone" placeholder="Phone Number" 
                                       value="<?php
                                                    if(isset($userPhone))
                                                    {
                                                        echo $userPhone;
                                                    }
                                                ?>">
                                <input class="email form-control" type="email" name="email" placeholder="Email"
                                       value="<?php
                                                    if(isset($userEmail))
                                                    {
                                                        echo $userEmail;
                                                    }
                                                ?>">
                                <textarea class="message form-control" placeholder="Your Message" name="message" 
                                          value="<?php
                                                    if(isset($Message))
                                                    {
                                                        echo $Message;
                                                    }
                                                ?>"></textarea>
                                <input class="form-control send" type="submit" value="Send" name="submit">
                            </div>
                        </div>
                    </form>
                </div>
                
                
                <div class="companyForm">
                    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                        <div class="row justify-content-center">
                            <div class="inputs col-md-5">
                                <span><i class="fas fa-times"></i></span>
                                <input type="text" hidden="true" name="check" value="2">
                                <input class="companyName form-control" type="text" name="name" placeholder="Company Name"
                                       value="<?php
                                                    if(isset($userName))
                                                    {
                                                        echo $companyName;
                                                    }
                                                ?>">
                                <input class="form-control companyPhoneNumber" type="text" name="phone" placeholder="Phone Number" 
                                       value="<?php
                                                    if(isset($userPhone))
                                                    {
                                                        echo $companyPhone;
                                                    }
                                                ?>">
                                <input class="companyEmail form-control" type="email" name="email" placeholder="Email"
                                       value="<?php
                                                    if(isset($userEmail))
                                                    {
                                                        echo $companyEmail;
                                                    }
                                                ?>">
                                
                                <input class="commercial form-control" type="text" name="commercialRegister" placeholder="Commercial Register"
                                       value="<?php
                                                    if(isset($userEmail))
                                                    {
                                                        echo $userEmail;
                                                    }
                                                ?>">
                                
                                <textarea class="companyMessage form-control" placeholder="Your Message" name="message" 
                                          value="<?php
                                                    if(isset($Message))
                                                    {
                                                        echo $Message;
                                                    }
                                                ?>"></textarea>
                                <input class="form-control send" type="submit" value="Send" name="submit">
                            </div>
                        </div>
                    </form>
                </div>
                
                
                
            </div>
        </section>
        <?php
            if($_SERVER['REQUEST_METHOD'] == 'POST') {
                
                if($_POST['name'] == 1)
                {
                    $userName = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
                    $userPhone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
                    $userEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                    $Message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

                    $myEmail = "ebasem65@gmail.com";
                    $subject = "MSP Contact";
                    $headers = 'From: ' . $userEmail . "\r\n";
                    $headers .= 'Name: ' . $userName . "\r\n";
                    $headers .= 'Phone: ' . $userPhone . "\r\n";
                    mail($myEmail, $subject, $Message, $headers);
                }
                
                if($_POST['name'] == 2)
                {
                    $companyName = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
                    $companyPhone = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
                    $companyEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
                    $companyCommercial = filter_var($_POST['commercialRegister'], FILTER_SANITIZE_STRING);
                    $Message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

                    $myEmail = "ebasem65@gmail.com";
                    $subject = "MSP Contact";
                    $headers = 'From: ' . $companyEmail . "\r\n";
                    $headers .= 'Company Name: ' . $companyName . "\r\n";
                    $headers .= 'Phone: ' . $companyPhone . "\r\n";
                    $headers .= 'Commercial Register: ' . $companyCommercial . "\r\n";
                    mail($myEmail, $subject, $Message, $headers);
                }   
            }
        ?>
        <!-- End Forms -->
        
        
        
        
        
        <!-- Start Footer -->
        <footer>
            <div class="container">
                <div class="social-Icons text-center">
                    <h3 class="lang" key="footerHead">Find Us In</h3>
                    <div class="socialMedia">
                        <ul class="social list-unstyled">
                          <li><a href="#" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                          <li><a href="#" target="_blank"><i class="fab fa-twitter"></i></a></li>
                          <li><a href="#" target="_blank"><i class="fab fa-instagram"></i></a></li>
                          <li><a href="#" target="_blank"><i class="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="site-map">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <img class="brand" src="images/mech.png" alt="logo">
                        </div>
                        <div class="col-md-6 map text-center">
                            <ul class="list-unstyled">
                                <li><a class="lang" key="Home" href="home.html">Home</a><span>|</span></li>
                                <li><a class="lang" key="About" href="about.html">About</a><span>|</span></li>
                                <li><a class="lang" key="Portfolilo" href="portfolio.html">Portfolio</a><span>|</span></li>
                                <li><a class="lang" key="offers" href="offers.html">Offers</a><span>|</span></li>
                                <li><a class="lang" key="Contact" href="contact.php">Contact</a></li>
                            </ul>
                            <p class="lang" key="copyRight">Copyright © 2018 Mechanology. All rights reserved</p>
                        </div>
                        <div class="col-md-1"></div>
                    </div>
                </div>        
            </div>
        </footer>
        <!-- End Footer -->
        
        
    
        
        
        <!-- Start Scroll Top -->
        <div class="scrollUp"><span><i class="fas fa-angle-up"></i></span></div>
        <!-- End Scroll Top -->
        
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/propper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/wow.min.js"></script>
        <script>new WOW().init();</script>
        <script src="js/custom.js"></script>
    </body>
</html>






