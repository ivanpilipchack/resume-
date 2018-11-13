$(document).ready(() => {
    //BOTTON FOR SHOW FOTO
    var $clickFirst = $('#first');
    var $clickSecond = $('#second');
    var $clickThird = $('#third');
    //FOTO WHY SHOW 
    var $startsFoto = $('#show_img');
    //DISCRIPTION WORK
    var $discription = $('#discription');
    var $linckGit = $('#work_linck');

    $clickFirst.on('click', () => {
        $startsFoto.attr('src', 'img/foiini.PNG');
        $discription.text('shop on HTML5, CSS3(flexBox), jQuery,(slider, dropDownMenu and form validate)')
        $linckGit.text('https://github.com/ivanpilipchack/ivanpilipchack.github.io');
    });
    $clickSecond.on('click', () => {
        $startsFoto.attr('src', 'img/header.jpg');
        $discription.text('Axid on HTML5, CSS3, JAVAsCRIPT(efects show blocks and scroll NavBar)')
        $linckGit.text('https://github.com/ivanpilipchack/Axid');
    });
    $clickThird.on('click', () => {
        $startsFoto.attr('src', 'img/jquery.png');
        $discription.text('shop from used HTML5 CCS3, JS , Jquery, responsive for tablet and mobile');
        $linckGit.text('https://github.com/ivanpilipchack/to-files');
    });
});
//ajax guestion
(function($) {

    // $(document).ready(function() {

    'use strict';

    // find the desired selectors
    var $btn = $('.info_more');
    var $bio = $('.info_bio');

    // register an event
    $btn.on('click', function() {
        // hide the button
        $(this).hide();
        // send the request and get the response
        $bio.load('bio.txt', completeFunction, function() {
            bio.before('<p class="info_bio">connect</p>')
        });
    });


    // complete function
    function completeFunction(responseText, textStatus, request) {
        // add a border
        $bio.css('border', '1px solid #e8e8e8');
        // uncomment the line below to see the request
        // console.log(request);
        // check if there are any errors
        if (textStatus == 'error') {
            // show a relevant message
            $bio.text('An error occurred during your request: ' + request.status + ' ' + request.statusText);
        }
    }

    // });

})(jQuery);