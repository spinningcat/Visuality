$(function() {
      var $container = $('.container');
      var projectInfo = [{
        "title" : "Canvas Bouncing Balls",
        "URL": "https://spinningcat.github.io/canvas-bouncing-balls/",
        "Link1": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/script/bouncing.js",
        "Link2": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/README.md",
        "Link3": "https://spinningcat.github.io/canvas-boucing-balls/",
        "Link4": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/index.html",
        "Link5": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/style/style.css"
      },{
        "title" : "Document Base and Code Base",
        "URL": "https://spinningcat.github.io/document-base-and-code-base/",
        "Link1": "",
        "Link2": "",
        "Link3": "",
        "Link4": "",
        "Link5": "",
        "Link13" : "https://spinningcat.github.io/some-sources/"
      },{
        "title" : "Person On Duty",
        "URL": "https://spinningcat.github.io/Person-On-Duty/",
        "Link1": "https://github.com/spinningcat/Person-On-Duty/blob/master/js/PersonOnDuty.js",
        "Link2": "https://github.com/spinningcat/Person-On-Duty/blob/master/README.md",
        "Link3": "https://spinningcat.github.io/canvas-boucing-balls/",
        "Link4": "https://github.com/spinningcat/Person-On-Duty/blob/master/PersonOnDuty.html",
        "Link5": "https://github.com/spinningcat/Person-On-Duty/blob/master/css/style.css"
      },{
        "title" : "Animated Table and Buttons",
        "URL": "https://spinningcat.github.io/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/",
        "Link1": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/docs/js/animated.js",
        "Link2": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/README.md",
        "Link3": "https://spinningcat.github.io/canvas-boucing-balls/",
        "Link4": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/docs/index.html",
        "Link5": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/docs/style/style.css"
      },{
        "title" : "Collision",
        "URL": "https://spinningcat.github.io/Collision/",
        "Link1": "https://github.com/spinningcat/Collision/blob/master/docs/js/collisionotherway.js",
        "Link2": "",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/Collision/blob/master/docs/index.html",
        "Link5": ""
      },{
        "title" : "Local Storage",
        "URL": "https://spinningcat.github.io/input-box-and-local-storage/",
        "Link1": "https://github.com/spinningcat/input-box-and-local-storage/blob/master/docs/js/local.js",
        "Link2": "",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/input-box-and-local-storage/blob/master/docs/index.html",
        "Link5": ""
      }, {
        "title" : "Detecting Lasy Day of The Month",
        "URL": "https://spinningcat.github.io/Check-Last-day-of-The-month/",
        "Link1": "https://github.com/spinningcat/Check-Last-day-of-The-month/blob/master/docs/day.js",
        "Link2": "",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/Check-Last-day-of-The-month/blob/master/docs/index.html",
        "Link5": ""
      }, {
        "title" : "Filtering Buttons with Colors",
        "URL": "https://spinningcat.github.io/illustration-for-filtering-dom-elements---2/",
        "Link1": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/docs/js/filtering.js",
        "Link2": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/README.md",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/docs/index.html",
        "Link5": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/docs/css/style.css"
      }, {
        "title" : "Filtering Table with Colors",
        "URL": "https://spinningcat.github.io/illustration-for-filtering-dom-elements---1/",
        "Link1": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/docs/js/filtering.js",
        "Link2": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/README.md",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/docs/index.html",
        "Link5": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/docs/css/style.css"
      }, {
        "title" : "Time Difference",
        "URL": "https://spinningcat.github.io/Time-Difference-between-Events/",
        "Link1": "https://github.com/spinningcat/Time-Difference-between-Events/blob/master/docs/js/script.js",
        "Link2": "https://github.com/spinningcat/Time-Difference-between-Events/blob/master/README.md",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/Time-Difference-between-Events/blob/master/docs/index.html",
        "Link5": ""
      }, {
        "title" : "Canvas Game",
        "URL": "https://spinningcat.github.io/canvas-2d-web-game/",
        "Link1": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/docs/script/function.js",
        "Link2": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/README.md",
        "Link3": "",
        "Link4": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/docs/index.html",
        "Link5": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/docs/style/style.css"
      }];
     
      $.each(projectInfo, function(i, item) {
        var $subContainer = $('<div>');
        $subContainer.attr('class', 'subContainer');
        var $titleBox = $('<div>');
        $titleBox.attr('class', 'titleBox');
         var $infoBox = $('<div>');
        $infoBox.attr('class', 'infoBox');
         var $mainTitle = $('<span>');
        $mainTitle.attr('class', 'mainTitle');
        $mainTitle.appendTo($titleBox);
       
        var $title = $('<span>');
        $title.attr('class', 'title');
        $title.appendTo($infoBox);
        $titleBox.appendTo($subContainer);
        var $link1 = $('<span>');
        $link1.attr('class', 'link1');
        var $link2 = $('<span>');
        $link2.attr('class', 'link2');
        var $link3 = $('<span>');
        $link3.attr('class', 'link3');
        var $link4 = $('<span>');
        $link4.attr('class', 'link4');
        var $link5 = $('<span>');
        $link5.attr('class', 'link5');
        var $button = $('<button>');
        $button.attr('class', 'info');
        $button.text('i');
        $link1.appendTo($infoBox);
        $link2.appendTo($infoBox);
        $link3.appendTo($infoBox);
        $link4.appendTo($infoBox);
        $link5.appendTo($infoBox);
        $button.appendTo($infoBox);
        $infoBox.appendTo($subContainer);
        $subContainer.appendTo($container);
      });

      counter = 1;


     
        $container.find('.subContainer').each(function(index, ele) {
          //$.each(projectInfo, function(i, item) {

            //console.log("Here's a hint: " + counter++);
            $(ele).find('.mainTitle').html(projectInfo[index].title);
           $(ele).find('.title').html('<a href="' + projectInfo[index].URL + '" target="_blank"> Result: '  + projectInfo[index].title + '</a>');
           if(projectInfo[index].Link1 === ""){
          	$(ele).find('.link1').html(""); 
           }
           else{
          $(ele).find('.link1').html('<a href="' + projectInfo[index].Link1 + '" target="_blank">JavaScript Source '  +'</a>');
          }
           if(projectInfo[index].Link2 === ""){
           	$(ele).find('.link2').html("");
           }
           else
           {
            $(ele).find('.link2').html('<a href="' + projectInfo[index].Link2 + '" target="_blank">Report '  +'</a>');
            }
             if(projectInfo[index].Link4 === ""){
								$(ele).find('.link4').html("");           
           }
           else{
                 $(ele).find('.link4').html('<a href="' + projectInfo[index].Link4 + '" target="_blank">HTML Source  '  +'</a>');
                 }
               if(projectInfo[index].Link5 === ""){
           			$(ele).find('.link5').html("");
           }   
           else{
               $(ele).find('.link5').html('<a href="' + projectInfo[index].Link5 + '" target="_blank">CSS Source  '  +'</a>');
          }
          });
          
        //});

      //});
      });
