/*global $, alert, console*/

$(function () {
    "use strict";
    var winHeight = $(window).height(),
        containerWidth = $(".container").width(),
        userError = true,
        emailError = true,
        messageError = true,
        companyNameError = true,
        companyEmailError = true,
        companyMessageError = true,
        companyCommercialError = true;
    
    $(".image").height(winHeight);
    $('header .content').css("marginTop", (winHeight - $('header .content').innerHeight()) / 2);

    
    $(".dropdown").hover(function(){
        $(".dropdown").addClass("show");
        }, function(){
        $(".dropdown").removeClass("show");
    });
    
    $(".dropdown-menu").hover(function() {
        $(".dropdown .nav-link").css("backgroundColor","#0c59a9");
        $(".dropdown .nav-link").css("color","#fff");
        
    }, function() {
        $(".dropdown .nav-link").css("backgroundColor","#ebebeb");
        $(".dropdown .nav-link").css("color","#0c59a9");
        
    });
    
    
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1000) {
            $(".scrollUp").fadeIn();
        } else {
            $(".scrollUp").fadeOut();
        }
    });
    
    $(".scrollUp").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    $(".loading .spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1000);
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 30) {
            $('.navbar-light ul li a').removeClass('navbarHeight');
            $('.navbar .navbar-brand img').css("width", "25%");
            $('.navbar').css("opacity", "1");
        }
        
        if ($(this).scrollTop() < 30) {
            $('.navbar-light ul li a').addClass('navbarHeight');
            $('.navbar .navbar-brand img').css("width", "30%");
            $('.navbar').css("opacity", "0.85");
        }
    });
    
    
    
    $('.carousel').carousel({
        interval: 2000
    });
    
    $('.carousel-inner').css("paddingLeft", ($(window).width() - $('.carousel').width()) / 2);
    
    $('.company').click(function () {
        $('.buttons').fadeOut(500);
        $('.companyForm').delay(500).fadeIn(1000);
    });
    
    $('.customer').click(function () {
        $('.buttons').fadeOut(500);
        $('.customerForm').delay(500).fadeIn(1000);
    });
    
    $('.customerForm span').click(function () {
        $('.customerForm').fadeOut(500);
        $('.buttons').delay(500).fadeIn(1000);
    });
    
    $('.companyForm span').click(function () {
        $('.companyForm').fadeOut(500);
        $('.buttons').delay(500).fadeIn(1000);
    });
    
    
    
    //Customer Form validation
    function checkErrors() {
        if (userError === true || emailError === true || messageError === true) {
            return true;
        } else {
            return false;
        }
    }
    
    $('.username').blur(function () {
        if ($(this).val().length <= 3) {
            $(this).css("border", "2px solid #ff0000");
            userError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            userError = false;
        }
    });
    
    $('.email').blur(function () {
        if ($(this).val().length === 0) {
            $(this).css("border", "2px solid #ff0000");
            emailError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            emailError = false;
        }
    });
    $('.message').blur(function () {
        if ($(this).val().length < 10) {
            $(this).css("border", "2px solid #ff0000");
            messageError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            messageError = false;
        }
    });
    
    $(".customerForm form").submit(function (e) {
		if (checkErrors() === true) {
			e.preventDefault();
			$(".username, .email, .message").blur();
		}
	});
    
    
    //Company Form validation
    function checkErrorsCompany() {
        if (companyNameError === true || companyEmailError === true || companyMessageError === true || companyCommercialError === true) {
            return true;
        } else {
            return false;
        }
    }
    
    $('.companyName').blur(function () {
        if ($(this).val().length <= 3) {
            $(this).css("border", "2px solid #ff0000");
            companyNameError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            companyNameError = false;
        }
    });
    
    $('.companyEmail').blur(function () {
        if ($(this).val().length === 0) {
            $(this).css("border", "2px solid #ff0000");
            companyEmailError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            companyEmailError = false;
        }
    });
    $('.companyMessage').blur(function () {
        if ($(this).val().length < 10) {
            $(this).css("border", "2px solid #ff0000");
            companyMessageError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            companyMessageError = false;
        }
    });
    
    $('.commercial').blur(function () {
        if ($(this).val().length < 10) {
            $(this).css("border", "2px solid #ff0000");
            companyCommercialError = true;
        } else {
            $(this).css("border", "2px solid #7fba00");
            companyCommercialError = false;
        }
    });
    
    
    $(".companyForm form").submit(function (e) {
		if (checkErrorsCompany() === true) {
			e.preventDefault();
			$(".companyName, .companyEmail, .companyMessage, .commercial").blur();
		}
	});
    
    if ($(window).width() <= 768) {
        $(".initial").remove();
        $(".wo").remove();
        $(".css").remove();
    }
    
    
    
    
    
    
    function createCookie(name, value, days) {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                var expires = "; expires=" + date.toGMTString();
            }
            else var expires = "";               

            document.cookie = name + "=" + value + expires + "; path=/";
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }
    
    var arrLang = {
        'english' : {
            'Home' : 'Home',
            'About' : 'About',
            'Portfolilo' : 'Portfolio',
            'offers' : 'Offers',
            'Contact' : 'Contact',
            'servsHead' : 'Services',
            'serv1Head' : 'HVAC Services',
            'serv2Head' : 'ELectrical Services',
            'serv3Head' : 'Plumbing Services',
            'serv4Head' : 'Civil Work',
            'serv1Content' : 'Maintenance perceived that and offers you experts in the field of AC repair and support.',
            'serv2Content' : 'Our mission is to offer our customers the highest-quality electrical services by check-up and fix all kinds of circuits.',
            'serv3Content' : 'Maintenance offers you a gathering of profoundly prepared and experienced callings in the field of plumbing.',
            'serv4Content' : 'Maintenance provides any service in civil fields.',
            'teamHead' : 'Our Team',
            'footerHead' : 'Find Us In',
            'aceHead' : 'Powered By',
            'copyRight' : 'Copyright © 2018 Maintenance. All rights reserved',
            'aboutHead' : 'About Us',
            'vissionHead' : 'Vission',
            'vissionContent' : 'To be The Leader of the home maintenance market with highest market share.',
            'adv1' : 'Successfull Job',
            'adv2' : 'Services Center',
            'adv3' : 'Satisfied Client',
            'missionHead' : 'Mission',
            'missionCustHead' : 'To Our Customers',
            'missionCommunityHead' : 'To Our Community',
            'missionPartnersHead' : 'To Our Partners',
            'missionCustContent' : 'We build long lasting relationships with all our customers,through providing “the best service quality” with suitable prices to satisfy our customers’ needs.',
            'missionCommunityContent' : 'We focus on enhancing the community we work in through our solid values of integrity, simplicity, fairness, effective communication and being socially responsible.',
            'missionPartnersContent' : 'We are committed to further strengthen the lasting relationships with our partners through the most effective use of the resources and enhancing the capabilities and skills of our trusted and reliable team.',
            'aboutUsHead' : 'About Us',
            'aboutContent1' : 'We are the only Full-Service, Fully licensed company east of the cooper to serve all your needs.We offer a wide variety of services.',
            'aboutContent2' : 'We are state and locally licensed, bonded and insured for your protection.',
            'aboutContent3' : 'Our best source of business has always been the large percentage of repeat customers who have come to know us as honest, professional and dedicated to serving our client`s every need.',
            'aboutContent4' : 'We provide Top-Notch, High quality service, along with great customer support.',
            'aboutContent5' : 'A combination that can`t be BEAT! We strive hard to make our customers happy, and Are not afraid to do what it takes to make everyone 100% satisfied.Through our commitment, Experience and expertise, We at resort maintenance continue to establish strong relationships with our customers that will last a lifetime.',
            'oneCall' : 'ONE CALL',
            'solveProblem' : ' Can Solve All Your House Problems',
            'mkHome' : 'Maintenance is a company working in maintenance industry.',
            'headContact' : 'Contact US',
            'location' : 'Our Location',
            'contactInfo' : 'Contact Information',
            'officeHourse' : 'Office Hours',
            'days' : '8 am - 5 pm',
            'hours' : 'Monday - Friday',
            'days2' : 'Closed',
            'hours2' : 'Saturday - Sunday',
            'days3' : 'Closed',
            'hours3' : 'Holidays',
            'email' : 'Email : ',
            'domain' : 'support@Maintenance-eg.com',
            'primaryPhone' : 'Primary Phone: ',
            'primaryNumber' : '1 (306) 249 - 9609',
            'mobilePhone' : 'Alternate Phone: ',
            'primaryNumber' : '1 (306) 249 - 9612',
            'address1' : '#9 - 3815 Thatcher Avenue',
            'address2' : 'Saskatoon, Saskatchewan',
            'formContactHead' : 'Contact With Us',
            'corporate' : 'Corporate',
            'customerForms' : 'Customer'
            
        },

        'arabic' : {
            'Home' : 'الرئيسيه',
            'About' : 'من نحن',
            'Portfolilo' : 'اعمالنا',
            'offers' : 'العروض',
            'Contact' : 'تواصل',
            'servsHead' : 'الخدمات',
            'serv1Head' : 'خدمات التدفئة والتهوية والتكيفات',
            'serv2Head' : 'خدمات الكهرباء',
            'serv3Head' : 'خدمات السباكة',
            'serv4Head' : 'خدمات التشطيبات',
            'serv1Content' : ' Maintenance تقدم لك خبراء في مجال إصلاح جميع انواع انظمة التكييف و التبريد و التهوية.',
            'serv2Content' : '  Maintenance تقدم عاملين من ذوي الخبرة والمؤهلين في مجال حل المشاكل الكهربائية لمساعدتك.',
            'serv3Content' : 'Maintenance نقدم لعملائنا حلول لجميع انواع السباكة و خدمات التنظيف.',
            'serv4Content' : 'Maintenance تقدم جميع الخدمات في المجالات المدنية مثل طلاء منزلك وتوفير الصيانة الدورية .',
            'teamHead' : 'شركاء النجاح',
            'footerHead' : 'تابعنا علي',
            'aceHead' : 'برمجة وتصميم',
            'copyRight' : 'جميع الحقوق محفوظة وحقوق النشر © Maintenance لعام 2018',
            'aboutHead' : 'عن Maintenance',
            'vissionHead' : 'رؤيتنا',
            'vissionContent' : 'أن نكون رواد السوق في الصيانة المنزلية بأعلى حصة من السوق',
            'adv1' : 'عمل ناجح',
            'adv2' : 'مركز خدمات',
            'adv3' : 'عميل راضي',
            'missionHead' : 'مهمتنا',
            'missionCustHead' : 'لعملائنا',
            'missionCommunityHead' : 'لمجتمعنا',
            'missionPartnersHead' : 'لشركائنا',
            'missionCustContent' : 'ان نبني علاقات طويلة الأمد مع جميع عملائنا، من خلال توفير "أفضل خدمة" بأسعار مناسبة لتلبية احتياجات عملائنا.',
            'missionCommunityContent' : ' نحن نركز على تعزيز المجتمع نعمل من خلال قيمنا الصلبة و هي النزاهة والبساطة،     والإنصاف، والاتصال الفعال بمجتمعنا.',
            'missionPartnersContent' : 'ونحن ملتزمون بزيادة تعزيز علاقات دائمة مع شركائنا من خلال الاستخدام الأكثر فعالية للموارد، وتعزيز قدرات ومهارات فريقنا موثوق بها ويمكن الاعتماد عليها.',
            'aboutUsHead' : 'حول الشركة',
            'aboutContent1' : 'نحن شركة مرخصة بشكل كامل، و تقدم خدمة كاملة تلبية كافة احتياجاتك. نحن نقدم مجموعة متنوعة من الخدمات في مجالات الصيانة.',
            'aboutContent2' : 'نحن مرخصين دوليا و محليا، ونقدم الضمان والأمان الكامل للحماية الخاصة بك.',
            'aboutContent3' : 'ان الاهمية الاكبر في عملنا نحن في ميكانولوجي هو ان نسبة كبيرة من تكرار العملاء الذين جاءوا لنا كصادقة ومهنية مكرسة لخدمة جميع احتياجات العملاء.',
            'aboutContent4' : 'نحن نقدم خدمة عالية الجودة، جنبا إلى جنب مع خدمة عملاء ممتازة.',
            'aboutContent5' : 'مجموعة لا يمكن هزيمتها !  أننا نسعى جاهدين لإرضاء عملائنا، ولسنا خائفين من القيام بما يلزم لجعل الجميع راض 100%. من خلال التزامنا، والتجربة والخبرة، ونحن في مجال الصيانة نقوم بالاستمرار في إقامة علاقات قوية مع عملائنا تستمر مدى حياة',
            'oneCall' : 'مكالمه واحدة',
            'solveProblem' : 'تستطيع حل بها جميع مشاكل بيتك',
            'mkHome' : 'Maintenance هي شركه متخصصه في مجال الصيانات  ',
            'headContact' : 'تواصل معنا',
            'location' : 'العنوان',
            'contactInfo' : 'معلومات الاتصال',
            'officeHourse' : 'ساعات العمل',
            'hours' : 'الجمعه-الاتنين',
            'days' : '8صباحا -5مسائا.',
            'days2' : 'مغلق',
            'hours2' : 'الاحد-السبت',
            'days3' : 'مغلق',
            'hours3' : 'الاجازات الرسميه',
            'email' : 'الايميل:',
            'domain' : 'support@Maintenance-eg.com',
            'primaryPhone' : 'التليفون الارضي: ',
            'primaryNumber' : '1 (306) 249 - 9609',
            'mobilePhone' : 'الموبيل: ',
            'primaryNumber' : '1 (306) 249 - 9612',
            'address1' : '#9 - 3815 ميدان التحرير',
            'address2' : 'طلعت حرب, يوليو',
            'formContactHead' : 'تواصل معنا',
            'corporate' : 'شركه',
            'customerForms' : 'عميل'
        }
    };
            
    $(function () {
        $('.translate').click(function () {
            var lang = $(this).attr('id');

            createCookie("lang",lang,30);

            $('.lang').each(function(index, element) {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            });
        });
    }); 
    
    
    $(function () {
            $('.translate').click(function () {
                var lang = $(this).attr('id');

                createCookie("lang",lang,30);

                $('.lang').each(function(index, element) {
                    $(this).text(arrLang[lang][$(this).attr('key')]);
                });
            });
        });
    
    
    $(document).ready(function () {
        
        var lang = readCookie("lang");
        if(lang == "arabic" || lang == "english") {
            $('.lang').each(function(index, element) {
                    $(this).text(arrLang[lang][$(this).attr('key')]);
                });
        }
        
        if(lang == "arabic") {
            var link = document.createElement('link');
            link.id = 'id2';
            link.className = 'arabicSt';
            link.rel = 'stylesheet';
            link.href = 'css/arabicStyle.css';
            document.head.appendChild(link);
            $(".dropdown-toggle").html("ِعربي<img width='30px' height='16px' src='images/arabia.png'>");
            
            $(".companyName").attr("placeholder", "اسم الشركة");
            $(".companyPhoneNumber").attr("placeholder", "رقم التليفون");
            $(".companyEmail").attr("placeholder", "البريد الالكتروني");
            $(".commercial").attr("placeholder", "السجل التجاري");
            $(".companyMessage").attr("placeholder", "رسالتك");
            
            
            $(".username").attr("placeholder", "اسم المستخدم");
            $(".customerPhone").attr("placeholder", "رقم التليفون");
            $(".email").attr("placeholder", "البريد الالكتروني");
            $(".message").attr("placeholder", "رسالتك");
            
            $(".send").attr("value", "ارسال");
        }
        if(lang == "english") {
            $(".arabicSt").remove();
        }
        

    });
    
    
    
    
});