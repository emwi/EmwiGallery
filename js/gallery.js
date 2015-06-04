/**
 * EmwiGallery jQuery plugin
 *
 * With this plugin you can show your own images with style!
 *
 *
 * @Creator Emma Wiklund
 */
$(document).ready(function () {
    'use strict';

    //Set timeout variable
    var intervalVar;

    (function ($) {

        // function for displaying lightbox with overlay
        $.fn.showLightbox = function () {
            var windowHeight = window.innerHeight || $(window).height(),
            windowWidth = window.innerWidth || $(window).width();

            // Display overlay
            $('<div id="emwi-overlay"></div>')
            .css({ 'opacity': '0.9' })
            .appendTo('body');

            // Create lightbox container
            $('<div id="emwi-lightbox"></div>')
            .hide()
            .appendTo('body');

            // Display image on load
            $('<img>')
            .attr('src', $(this).attr('src'))
            .css({
                'max-height': windowHeight * 0.75,
                'max-width': windowWidth * 0.75
            })
            .load(function () {
                $('#emwi-lightbox')
                .css({
                    'top': (windowHeight - $('#emwi-lightbox').height()) / 2,
                    'left': (windowWidth - $('#emwi-lightbox').width()) / 2,
                })
                .fadeIn()
            })
            .appendTo('#emwi-lightbox');

            // Display title of the image
            $('<div id="emwi-title-wrap"></div>')
            .appendTo('#emwi-lightbox');

            $('<p id="emwi-title"></p>')
            .appendTo('#emwi-title-wrap')
            document.getElementById("emwi-title").innerHTML = $(this).attr('title');

            // Remove Lightbox via click
            $('#emwi-overlay, #emwi-lightbox').click(function () {
                $('#emwi-overlay, #emwi-lightbox').remove();
 
                clearInterval(intervalVar);
                clearTimeout(intervalVar);
                console.log("clicked outside the lightbox, gallery closed")
            });

            return this;
        };


        /**
         * Gallery function for displaying a list of pictures in a gallery
         *
         * @param array params with all Gallery parameters to be replaced with default ones
         */
        $.fn.showGallery = function (params) {


            var imageId;
            // set Gallery classes to all gallery items
            $('#emwi-gallery').children().addClass('thumbHolder');

            // extend default parameters with passed ones
            var options = $.extend({
                'imgCounter': true
            }, params),

            picWidth = options.width, // width of the pictures
            picHeight = options.height, // height of the pictures
            listItems = $(this).children(), // all the li children
            imageItem = listItems.children(), // all the pictures belonging to the listItems
            imgCount = listItems.size(); // total imgCount of listItems

            //Control variable if we are clicking last image
            var lastImage = false;

            //Set timeout variable
            //var intervalVar;

            // set the width and height of the pictures
            imageItem.css({ 'width': picWidth + 'px', 'height': picHeight + 'px' });

            // bind a click event to gallery items
            imageItem.click(function () {

                // index of the clicked item
                imageId = $(this).parent().index();

                // load the selected picuture

                //IF last image clicked set lastimage=true
                if (imageId == imgCount - 1) { lastImage = true; }
                loadImgSlider($(listItems).eq(imageId).children(), imageId);


                showSlider(imageId);
            });



            function loadImgSlider(obj, imgId) {
                if (imageId < imgCount - 1) {
                    $('#emwi-lightbox, #emwi-overlay').remove();

                    // show the lLightbox
                    obj.showLightbox();

                    // show navigation arrows
                    createArrowLinks(imgId);

                }
                else if (imageId == imgCount - 1 && lastImage) {
                    $('#emwi-lightbox, #emwi-overlay').remove();
                    lastImage = false

                    // show the lLightbox
                    obj.showLightbox();

                    // show navigation arrows
                    createArrowLinks(imgId);
                }
                else {
                    clearInterval(intervalVar);
                    clearTimeout(intervalVar);
                    $('#emwi-overlay, #emwi-lightbox').remove();
                }
            };


            function showSlider() {
                var nextImg = $(listItems).eq(imageId + 1).children();

                intervalVar = setInterval(function () {
                    nextImg = $(listItems).eq(imageId + 1).children();

                    $('#emwi-lightbox > li:first-child')
                      .fadeOut(1000)
                      .next(loadImgSlider(nextImg, imageId + 1))
                      .fadeIn(1000)
                      .appendTo('#emwi-lightbox');
                    imageId += 1;
                    console.log("Switched image with slider");
                }, 3000);
            }

            //function killGallery() {
            //    $('#emwi-overlay, #emwi-lightbox').remove();
            //    clearInterval(intervalVar);
            //    clearTimeout(intervalVar);
            //}



            // Remove Lightbox via ESC press
            $(document).keyup(function (event) {
                if (event.which == 27) {
                    $('#emwi-overlay, #emwi-lightbox').remove();
                    clearInterval(intervalVar);
                    clearTimeout(intervalVar);
                    console.log("ESC button clicked, gallery closed")
                }
            });


            /**
             * Function to create the navigation arraws
             *
             * @param integer imageId for the index of the shown picture
             */
            function createArrowLinks(imgId) {

                // establish picture placement coordinates
                var top = ($(window).height() - $('#emwi-lightbox').height()) / 2,
                side = ($(window).width() - $('#emwi-lightbox').width()) / 2,
                middle = $('#emwi-lightbox').height() / 2,

                prevImg, // previous picture
                nextImg; // next picture


                // create left arrow if not the first item in the list
                if (imgId !== 0) {

                    // previous image object
                    prevImg = $(listItems).eq(imgId - 1).children();



                    // create the arrow
                    $('<div id="arrow-left"></div>')
                    .appendTo('#emwi-lightbox')
                    .css({ left: '-80px', top: middle })
                    .click(function () {
                        if (imgId == imgCount - 1) { lastImage = true; }
                        loadImgSlider(prevImg, imgId - 1);
                        imageId -= 1;
                        console.log('Loading previous image in div with button clicked');
                    });


                    $('<div id="arrow-left-icon"></div>')
                    .appendTo('#arrow-left');
                }

                // create right arrow if not the last item in the list
                if (imgId !== imgCount - 1) {

                    // next image object
                    nextImg = $(listItems).eq(imgId + 1).children();


                    // create the arrow
                    $('<div id="arrow-right"></div>')
                    .appendTo('#emwi-lightbox')
                    .css({ right: '-80px', top: middle })
                    .click(function () {
                        loadImgSlider(nextImg, imgId + 1);
                        imageId += 1;
                        console.log('Loading next image in div with button clicked');
                    });

                    $('<div id="arrow-right-icon"></div>')
                    .appendTo('#arrow-right');
                }



                // display image counter if requested
                if (options.imgCounter) {
                    imgCounter(imgId, top, side);
                }



                document.onkeydown = function (e) {
                    e = e || window.event;
                    if (e.keyCode == '37') {
                        if (imgId == imgCount - 1) { lastImage = true; }
                        loadImgSlider(prevImg, imgId - 1); //left <- show Prev image
                        imageId -= 1;
                        console.log('Loading previous image in div with key clicked');
                        if (imgId = 0) {
                            $('#emwi-overlay, #emwi-lightbox').remove();
                            clearInterval(intervalVar);
                            clearTimeout(intervalVar);
                            console.log("Gallery closed")
                        }
                    } else if (e.keyCode == '39') {
                        
                        loadImgSlider(nextImg, imgId + 1); // right -> show next image
                        imageId += 1;
                        console.log('Loading next image in div with key clicked');
                    }
                }

            }



            /**
             * Function to show the picture counter within the gallery
             *
             * @param integer imageId, number of picture currently being shown
             *
             */
            function imgCounter(imgId) {

                // append the counter container
                $('<div id="counter"></div>')
                .appendTo('#emwi-lightbox');

                // append the counter text
                $('<span></span>')
                .appendTo('#counter')
                .text((imgId + 1) + '/' + imgCount);

            }

            return this;


        };



    })(jQuery);

    // bind the click event for displaying lighbox with overlay
    $('.emwi-lightbox').click(function () {
        $(this).showLightbox();
    });

});
