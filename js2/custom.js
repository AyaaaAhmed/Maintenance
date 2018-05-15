/*global $, alert, console*/

$(function () {
    "use strict";
    var winHeight = $(window).height();
    
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
            $(".scrollUp .up").fadeIn();
        } else {
            $(".scrollUp .up").fadeOut();
        }
    });
    
    $(".scrollUp .up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    $(".loading .spinner").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
        $(this).parent().fadeOut(1000);
    });
    
    $(".companyBTN").click(function () {

        $("html, body").animate({

            scrollTop : $("#company").offset().top - 80

        }, 1000);
    });
    $(".customerBTN").click(function () {

        $("html, body").animate({

            scrollTop : $("#customer").offset().top - 80

        }, 1000);
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
            'footerHead' : 'Find Us In',
            'aceHead' : 'Powered By',
            'copyRight' : 'Copyright © 2018 Maintenance. All rights reserved',
            'headPorto' : 'Our Portfolio',
            'portHead1' : 'Mickey ToonTown',
            'port1Maint' : 'Maintenance scope: HVAC Service.',
            'port1Cap' : 'Total Capacity: 1200 Ton Refrigerant/Hour',
            'port1Dur' : 'Duration: Four Years',
            
            'portHead2' : 'Rabonzole Waterful',
            'port2Maint' : 'Maintenance scope: HVAC Service.',
            'port2Cap' : 'Total Capacity: 2200 Ton Refrigerant/Hour.',
            'port2Dur' : 'Duration: Five Years',
            'port2Zam' : '-Zamil Reciprocating System',
            
            'portHead3' : 'New Orleans Square',
            'port3Maint' : 'Maintenance scope: Facility Management',
            'port3Area' : 'Total Area: 45000  Square meters',
            'port3Cap' : 'Total HVAC Capacity: 1500 Ton Refrigerant/Hour.',
            'port3Dur' : 'Duration: Three Years',
            'port3Zam' : '-Carrier Water Cooled Centrifugal Chiller I9XR.',
            
            'portHead4' : '-300 Ice-Cream',
            'port4Maint' : 'Maintenance scope: Create Refrigerators.',
            'port4Area' : '-The Main Kitchen is Created and Fully implemented.',
            'port4Cap' : '-works of electrification, plumbing and decoration.',
            
            'portHead5' : 'Disney Center',
            'port5Maint' : 'Maintenance scope: Facility Management',
            'port5Area' : 'Works: -Interior Design Total Finished with M.E.B.',
            'port5Cap' : 'Total HVAC Capacity: 10000 Ton Refrigerant/Hour.',
            'port5suit1' : '-The Presidential',
            'port5suit2' : '-The Main Kitchen.',
            
            'portHead6' : 'Castle Culture',
            'port6Maint' : 'Maintenance scope: Facility Maintenance.',
            'port6Area' : 'Total Area: 25000 Square meters',
            'port6Cap' : 'Total HVAC Capacity: 400 Ton Refrigerant/Hour.',
            'port6DWork' : 'Works: Interior Design and total finishing with M.E.B.',
            'port6Trane' : '-Trane Screw Chillers',
            
            'portHead7' : 'Billy Beez',
            'port7Maint' : 'Maintenance scope: Facility',
            'port7Area' : 'Total Area: 14000  Square meters',
            'port7Cap' : 'Total HVAC Capacity: 600 Ton Refrigerant/Hour.',
            'port7Dur' : 'Duration: Four Years',
            'port7Zam' : '-York Screw Chiller YVAA.',
            'port7Zam2' : '-Zamil Reciprocating system.',
            
            'portHead8' : '-300 Ice-Cream',
            'port8Maint' : 'Maintenance scope: Facility',
            'port8Area' : 'Total Area: 1800  Square meters',
            'port8Cap' : 'Duration: Four Years.',
            
            'portHead9' : 'Good Wood',
            'port9Maint' : 'Maintenance scope: works of electrification,plumbing and decoration.',
            
            'portHead10' : 'Dar ElDeyafa',
            'port10Maint' : 'Maintenance scope: Facility',
            'port10Dur' : 'Duration: One Year.',
            
            'portHead11' : 'El Zohor Club',
            'port11Maint' : 'Maintenance scope: HVAC Maintenance',
            'port11Dur' : 'Duration: One Year.',
            'port11Cap' : 'Total HVAC Capacity: 1000 Ton Refrigerant/Hour',
            'port11works' : 'Carrier water cooler centrifugal chiller',
            
            'portHead10' : 'Al AFANDI',
            'port10Maint' : 'Design and implementation of three refrigerators',
            'port10Dur' : 'refrigeration and freezing rooms.',
            'whyMK' : 'Why Mechanology Company?',
            'why1' : 'Our technicians are factory trained and certified.',
            'why2' : 'We are fully licensed and insured and back our work.',
            'why3' : 'Our customers get the best service possible.',
            'why4' : 'We have a fleet of fully stocked and equipped service vehicles.',
            'why5' : 'Our business is family owned and operated.'

        },

        'arabic' : {
            'Home' : 'الرئيسيه',
            'About' : 'من نحن',
            'Portfolilo' : 'اعمالنا',
            'offers' : 'العروض',
            'Contact' : 'تواصل',
            'footerHead' : 'تابعنا علي',
            'aceHead' : 'برمجة وتصميم',
            'copyRight' : 'جميع الحقوق محفوظة وحقوق النشر © Maintenance لعام 2018',
            'headPorto' : 'سابقة اعمالنا',
            'portHead1' : 'Micky ToonTown',
            'port1Maint' : 'نطاق الصيانة : خدمات التدفئة والتهوية والتكيفات',
            'port1Cap' : 'السعة الاجمالية: 1200 طن من التبريد.',
            'port1Dur' : 'المدة: 4 سنوات.',
            'portHead2' : 'Rabonzole Waterful',
            'port2Maint' : 'نطاق الصيانة : خدمات التدفئة والتهوية والتكيفات',
            'port2Cap' : 'السعة الاجمالية: 2200 طن من التبريد.',
            'port2Dur' : 'المدة: 5 سنوات.',
            'port2Zam' : '-Zamil Reciprocating System',
            'portHead3' : 'New Orleans Square',
            'port3Maint' : 'نطاق الصيانة: ادارة المرافق.',
            'port3Area' : 'المساحة الاجمالية: 45000 متر مربع',
            'port3Cap' : 'السعة الاجمالية: 1500 طن من التبريد.',
            'port3Dur' : 'المدة: 3 سنوات.',
            'port3Zam' : '-Carrier Water Cooled Centrifugal Chiller I9XR.',
            'portHead4' : '-300 ايس كريم',
            'port4Maint' : 'نطاق الصيانة: إنشاء ثلاجات.',
            'port4Area' : '- تم إنشاء "المطبخ الرئيسي" وتنفيذه كاملا.',
            'port4Cap' : '- تم أعمال الكهرباء والسباكة والديكور.',
            
            'portHead5' : 'Disney Center',
            'port5Maint' : 'نطاق الصيانة: ادارة المرافق.',
            'port5Area' : 'الاعمال: التصميم الداخلي باستخدام ال(M.E.B)',
            'port5Cap' : 'اجمالي اعمال التبريد: 10000 طن من التبريد',
            'port5suit1' : '-الحقبة الرئاسية.',
            'port5suit2' : '-المطبخ الرئيسي.',
            
            'portHead6' : 'قلعه الثقافة',
            'port6Maint' : 'نطاق الصيانة: صيانة المرافق.',
            'port6Area' : 'المساحة الاجمالية: 25000 متر مربع',
            'port6Cap' : 'اجمالي اعمال التبريد: 400 طن من التبريد',
            'port6DWork' : 'الاعمال: التصميم الداخلي باستخدام ال(M.E.B)',
            'port6Trane' : '-Trane Screw Chillers',
            
            'portHead7' : 'بيلي بيز',
            'port7Maint' : 'نطاق الصيانة: المرافق.',
            'port7Area' : 'المساحة الاجمالية: 14000 متر مربع.',
            'port7Cap' : 'اجمالي اعمال التبريد: 600 طن من التبريد',
            'port7Dur' : 'المدة: 4 سنوات.',
            'port7Zam' : '-York Screw Chiller YVAA.',
            'port7Zam2' : '-Zamil Reciprocating system.',
            
            'portHead8' : 'Sparky`s Park',
            'port8Maint' : 'نطاق الصيانة : المرافق.',
            'port8Area' : 'المساحة الاجمالية: 1800 متر مربع.',
            'port8Cap' : 'المدة : 4 سنوات.',
            
            'portHead9' : 'Good Wood',
            'port9Maint' : ' ونطاق الصيانة : أعمال الكهرباء',
            'port9Maint2' : 'السباكة والديكور.',
            
            'portHead10' : 'دار الضيافة',
            'port10Maint' : 'نطاق الصيانة: المرافق',
            'port10Dur' : 'المدة: 1 سنة.',
            
            'portHead11' : 'نادي الزهور',
            'port11Maint' : 'نطاق الصيانة: خدمات التدفئة والتهوية والتكيفات',
            'port11Dur' : 'المدة : 1 سنة.',
            'port11Cap' : 'اجمالي اعمال التبريد: 1000 طن من التبريد.',
            'port11works' : 'Carrier water cooler centrifugal chiller',
            
            'portHead10' : 'الافندي',
            'port10Maint' : 'تصميم وتنفيذ ثلاث ثلاجات',
            'port10Dur' : 'غرف التبريد والتجميد',
            
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
            
            $('.content .lang').css("float", "right");
            $('.content .lang').css("marginBottom", "25px");
        }
        if(lang == "english") {
            $(".arabicSt").remove();
        }
        

    });
    
    
    
});
