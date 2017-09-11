$(function() {
  var $container = $('.container');
  
  var $subContainer = $('.subContainer');
  var $contentContainer = $('.contentContainer');
  var box= [];
  var $menuDiv = $('#menuDiv');
  var objExplain = {
  	'div0': 'This is just an canvas example for getting used to. It is also a try for using prototype and object in javascript for using object oriented style in javascript.',
    'div1': 'This is the work for collection all my reading, code experience and more. That also includes my personal notes.',
    'div2': 'This project is quiet involved. Code is like 1000-1500 lines including html, css, javascript and jquery. Also jquery ui datepicker and jqx widget calendar were used. Take a look at the report to have better grasp on that.',
     'div3': 'Monitoring Software  is broad subject. What i mean is monitoring things like services is really important in terms of guaranteing stability and sustainability. Therefore those facts make monitoring software frontend development really crucial. You can check report to comprehend what it is done in the code more closely.',
      'div4': 'i am developing canvas game it will look like slither.io game. When two objects collides, there is a need to detect this collision immediately. So this is the just illustration for finding collisiont.',
       'div5': "it's a local storage that is local, that is, on the browser's side.  And you can read from, and write to it. You will see that yuo type in input box after refreshing the page.",
       'div6': "You will detect if it is the last day of the month. It can be beneficial if you warn the user like sending email or sending sms. You can juse use that to make some operations. ",
       'div7': "Here in this work you filter buttons with radioboxes according to color.  This is the part of monitoring software development. For more info, you can take a look at report..",
       'div8': "It is filtering table with buttons for getting better visual result. This is also monitoring software development. You will see records with some colors. Red colors mean there is a big problem and you may get only records with red color. You can examine the report.",
       'div9': "It is measuring the time between two events. Nothing fancy. In search engine you will type something and you see the result. So next java script call can wait you as long as time difference..",
         'div10': "slither.io game clone. Still in development"
       
    };
  var projectInfo = [{
    "title": "Canvas Bouncing Balls",
    "URL": "https://spinningcat.github.io/canvas-bouncing-balls/",
    "Link1": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/script/bouncing.js",
    "Link2": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/README.md",
    "Link3": "https://spinningcat.github.io/canvas-boucing-balls/",
    "Link4": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/index.html",
    "Link5": "https://github.com/spinningcat/canvas-boucing-balls/blob/master/style/style.css"
  }, {
    "title": "Document Base and Code Base",
    "URL": "https://spinningcat.github.io/document-base-and-code-base/",
    "Link1": "",
    "Link2": "",
    "Link3": "",
    "Link4": "",
    "Link5": "",
    "Link13": "https://spinningcat.github.io/some-sources/"
  }, {
    "title": "Person On Duty",
    "URL": "https://spinningcat.github.io/Person-On-Duty/",
    "Link1": "https://github.com/spinningcat/Person-On-Duty/blob/master/js/PersonOnDuty.js",
    "Link2": "https://github.com/spinningcat/Person-On-Duty/blob/master/README.md",
    "Link3": "https://spinningcat.github.io/canvas-boucing-balls/",
    "Link4": "https://github.com/spinningcat/Person-On-Duty/blob/master/PersonOnDuty.html",
    "Link5": "https://github.com/spinningcat/Person-On-Duty/blob/master/css/style.css"
  }, {
    "title": "Animated Table and Buttons",
    "URL": "https://spinningcat.github.io/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/",
    "Link1": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/docs/js/animated.js",
    "Link2": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/README.md",
    "Link3": "https://spinningcat.github.io/canvas-boucing-balls/",
    "Link4": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/docs/index.html",
    "Link5": "https://github.com/spinningcat/Animated-table-and-Button-with-jQuery-UI-dialog-and-Local-Storage-animation/blob/master/docs/style/style.css"
  }, {
    "title": "Collision",
    "URL": "https://spinningcat.github.io/Collision/",
    "Link1": "https://github.com/spinningcat/Collision/blob/master/docs/js/collisionotherway.js",
    "Link2": "",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/Collision/blob/master/docs/index.html",
    "Link5": ""
  }, {
    "title": "Local Storage",
    "URL": "https://spinningcat.github.io/input-box-and-local-storage/",
    "Link1": "https://github.com/spinningcat/input-box-and-local-storage/blob/master/docs/js/local.js",
    "Link2": "",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/input-box-and-local-storage/blob/master/docs/index.html",
    "Link5": ""
  }, {
    "title": "Detecting Last Day of The Month",
    "URL": "https://spinningcat.github.io/Check-Last-day-of-The-month/",
    "Link1": "https://github.com/spinningcat/Check-Last-day-of-The-month/blob/master/docs/day.js",
    "Link2": "",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/Check-Last-day-of-The-month/blob/master/docs/index.html",
    "Link5": ""
  }, {
    "title": "Filtering Buttons with Colors",
    "URL": "https://spinningcat.github.io/illustration-for-filtering-dom-elements---2/",
    "Link1": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/docs/js/filtering.js",
    "Link2": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/README.md",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/docs/index.html",
    "Link5": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---2/blob/master/docs/css/style.css"
  }, {
    "title": "Filtering Table with Colors",
    "URL": "https://spinningcat.github.io/illustration-for-filtering-dom-elements---1/",
    "Link1": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/docs/js/filtering.js",
    "Link2": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/README.md",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/docs/index.html",
    "Link5": "https://github.com/spinningcat/illustration-for-filtering-dom-elements---1/blob/master/docs/css/style.css"
  }, {
    "title": "Time Difference",
    "URL": "https://spinningcat.github.io/Time-Difference-between-Events/",
    "Link1": "https://github.com/spinningcat/Time-Difference-between-Events/blob/master/docs/js/script.js",
    "Link2": "https://github.com/spinningcat/Time-Difference-between-Events/blob/master/README.md",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/Time-Difference-between-Events/blob/master/docs/index.html",
    "Link5": ""
  }, {
    "title": "Canvas Game",
    "URL": "https://spinningcat.github.io/canvas-2d-web-game/",
    "Link1": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/docs/script/function.js",
    "Link2": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/README.md",
    "Link3": "",
    "Link4": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/docs/index.html",
    "Link5": "https://github.com/spinningcat/canvas-2d-web-game/blob/master/docs/style/style.css"
  }];
/*$( window ).on('load',function() {
	alert('sss');
});*/
function insertProcess(){
  var count = 0;

  $.each(projectInfo, function(i, item) {
  
    var $boxContent = $('<div>');
    $boxContent.attr('class', 'boxContent')
    var $titleBox = $('<div>');
    $titleBox.attr('class', 'titleBox');
    var $infoBox = $('<div>');
    $infoBox.attr('class', 'infoBox');
    var $mainTitle = $('<span>');
    $mainTitle.attr('class', 'mainTitle');
    $mainTitle.appendTo($titleBox);

    var $title = $('<span>');
    $title.attr('class', 'title');
    $titleBox.appendTo($boxContent);
    $title.appendTo($infoBox);
    
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
    $button.attr('id', 'div' + count);
    $button.text('i');
    $button.prependTo($infoBox);
    $link1.appendTo($infoBox);
    $link2.appendTo($infoBox);
    $link3.appendTo($infoBox);
    $link4.appendTo($infoBox);
    $link5.appendTo($infoBox);
   
    $infoBox.appendTo($boxContent)    
    box.push($boxContent);

    count++;

  });
}
insertProcess();

box.forEach(function(element,index){
   
    element.appendTo($contentContainer);
   
});


   $('.boxContent').each(function(index, ele) {
    //$.each(projectInfo, function(i, item) {
   
    $(ele).find('.mainTitle').html(projectInfo[index].title);
    $(ele).find('.title').html('<a href="' + projectInfo[index].URL + '" target="_blank"> Result: ' + projectInfo[index].title + '</a>');
    if (projectInfo[index].Link1 === "") {
      $(ele).find('.link1').html("");
    } else {
      $(ele).find('.link1').html('<a href="' + projectInfo[index].Link1 + '" target="_blank">JavaScript Source ' + '</a>');
    }
    if (projectInfo[index].Link2 === "") {
      $(ele).find('.link2').html("");
    } else {
      $(ele).find('.link2').html('<a href="' + projectInfo[index].Link2 + '" target="_blank">Report ' + '</a>');
    }
    if (projectInfo[index].Link4 === "") {
      $(ele).find('.link4').html("");
    } else {
      $(ele).find('.link4').html('<a href="' + projectInfo[index].Link4 + '" target="_blank">HTML Source  ' + '</a>');
    }
    if (projectInfo[index].Link5 === "") {
      $(ele).find('.link5').html("");
    } else {
      $(ele).find('.link5').html('<a href="' + projectInfo[index].Link5 + '" target="_blank">CSS Source  ' + '</a>');
    }
  });{
  
 }
$('.info').on('click', function(){
   // console.log($(this).attr('id'));
    
    var objExplainKeyPart = $(this).attr('id');
    //var index = $(this).attr('id')
    //console.log(objExplainKeyPart);
    //console.log(objExplain[objExplainKeyPart]);
    $('.dialog').dialog().dialog('option', 'title',objExplain[objExplainKeyPart]);
    jQuery(".dialog").text(objExplain[objExplainKeyPart]);
});
/*$('#email').on('click',function(){
   window.location.href = "mailto:mail@example.org";
})*/
});
