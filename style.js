
Chart.defaults.global.defaultFontFamily = "Heebo";

// Get Vertical bar chart canvas element
var bar_ctx_v = document.getElementById('vertical-chart-f').getContext('2d');

// Vertical grtadient one
var gradientColorV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientColorV.addColorStop(0, '#e79aaf');
gradientColorV.addColorStop(1, '#e9198e');

// Vertical grtadient two
var gradientHoverV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientHoverV.addColorStop(0, '#e9198e');
gradientHoverV.addColorStop(1, '#e79aaf');

// Vertical bar chart options
var bar_chart_v = new Chart(bar_ctx_v, {
    type: 'bar',
    data: {
        labels: ["H T M L 5", "C S S 3", "J A V A S C R I P T", "S A S S", "M A T E R I A L I Z E  C S S", "A J A X" , "J Q U E R Y" , "A N G U L A R  J S", "B O O T S T R A P"],
        datasets: [{
            label: "S K I L L  S C O R E",
            data: [99, 99, 80, 90, 80, 70, 65, 85, 85],
            backgroundColor: gradientColorV,
            hoverBackgroundColor: gradientHoverV,
            hoverBorderWidth: 2,
            hoverBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
	      maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        animation: {
            duration: 1000,
            easing: 'easeInBounce'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    lineWidth: 1,
                    color: '#313154'
                },
                ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10,
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "#FFFFFF",
                    padding: 10
                },
                barPercentage: 0.4
            }],
        },
      	tooltips: {
          backgroundColor: '#282843',
          titleFontFamily: 'Heebo',
          titleFontColor: '#e79aaf',
          titleFontSize: 10,
          titleMarginBottom: 4,
          bodyFontFamily: 'Heebo',
          bodyFontSize: 10,
          bodyFontColor: '#ffffff',
          multiKeyBackground: '#e9198e',
          borderColor: '#e9198e',
          borderWidth: 1,
          caretSize: 3,
          cornerRadius: 3,
          xPadding: 10,
          yPadding: 10
        }
    }
});

// Get Horizontal bar chart canvas element
var bar_ctx_h = document.getElementById('horizontal-chart-f').getContext('2d');

// Horizontal grtadient one
var gradientColorH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientColorH.addColorStop(0, '#e79aaf');
gradientColorH.addColorStop(1, '#e9198e');

// Vertical grtadient two
var gradientHoverH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientHoverH.addColorStop(0, '#e9198e');
gradientHoverH.addColorStop(1, '#e79aaf');

// Vertical bar chart options
var bar_chart_h = new Chart(bar_ctx_h, {
    type: 'horizontalBar',
    data: {
        labels: ["H T M L 5", "C S S 3", "J A V A S C R I P T", "S A S S", "M A T E R I A L I Z E  C S S", "A J A X" , "J Q U E R Y" , "A N G U L A R  J S", "B O O T S T R A P"],
        datasets: [{
            label: "S K I L L  S C O R E",
            data: [99, 99, 80, 90, 80, 70, 65, 85, 85],
            backgroundColor: gradientColorH,
            hoverBackgroundColor: gradientHoverH,
            hoverBorderWidth: 1,
            hoverBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
	      maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        animation: {
            duration: 3000,
            easing: 'easeInBounce'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                },
                barPercentage: 1
            }],
            xAxes: [{
                gridLines: {
                    lineWidth: 1,
                    color: '#313154'
                },
                ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10,
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                }
            }],
        },
      	tooltips: {
          backgroundColor: '#282843',
          titleFontFamily: 'Heebo',
          titleFontColor: '#e79aaf',
          titleFontSize: 10,
          titleMarginBottom: 8,
          bodyFontFamily: 'Heebo',
          bodyFontSize: 10,
          bodyFontColor: '#ffffff',
          multiKeyBackground: '#e9198e',
          borderColor: '#e9198e',
          borderWidth: 1,
          caretSize: 3,
          cornerRadius: 3,
          xPadding: 12,
          yPadding: 12
        }
    }
});

//Backend Skills
// Get Vertical bar chart canvas element
var bar_ctx_v = document.getElementById('vertical-chart-b').getContext('2d');

// Vertical grtadient one
var gradientColorV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientColorV.addColorStop(0, '#e79aaf');
gradientColorV.addColorStop(1, '#e9198e');

// Vertical grtadient two
var gradientHoverV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientHoverV.addColorStop(0, '#e9198e');
gradientHoverV.addColorStop(1, '#e79aaf');

// Vertical bar chart options
var bar_chart_v = new Chart(bar_ctx_v, {
    type: 'bar',
    data: {
        labels: ["M Y S Q L", "M O N G O D B", "P H P", "J A V A S C R I P T", "P Y T H O N", "C"],
        datasets: [{
            label: "S K I L L  S C O R E",
            data: [99, 99, 80, 90, 80, 85],
            backgroundColor: gradientColorV,
            hoverBackgroundColor: gradientHoverV,
            hoverBorderWidth: 2,
            hoverBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
	      maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        animation: {
            duration: 3000,
            easing: 'easeInBounce'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    lineWidth: 1,
                    color: '#313154'
                },
                ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10,
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "#FFFFFF",
                    padding: 10
                },
                barPercentage: 0.6
            }],
        },
      	tooltips: {
          backgroundColor: '#282843',
          titleFontFamily: 'Heebo',
          titleFontColor: '#e79aaf',
          titleFontSize: 10,
          titleMarginBottom: 8,
          bodyFontFamily: 'Heebo',
          bodyFontSize: 10,
          bodyFontColor: '#ffffff',
          multiKeyBackground: '#e9198e',
          borderColor: '#e9198e',
          borderWidth: 2,
          caretSize: 3,
          cornerRadius: 3,
          xPadding: 12,
          yPadding: 12
        }
    }
});

// Get Horizontal bar chart canvas element
var bar_ctx_h = document.getElementById('horizontal-chart-b').getContext('2d');

// Horizontal grtadient one
var gradientColorH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientColorH.addColorStop(0, '#e79aaf');
gradientColorH.addColorStop(1, '#e9198e');

// Vertical grtadient two
var gradientHoverH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientHoverH.addColorStop(0, '#e9198e');
gradientHoverH.addColorStop(1, '#e79aaf');

// Vertical bar chart options
var bar_chart_h = new Chart(bar_ctx_h, {
    type: 'horizontalBar',
    data: {
        labels: ["M Y S Q L", "M O N G O D B", "P H P", "J A V A S C R I P T", "P Y T H O N", "C"],
        datasets: [{
            label: "S K I L L  S C O R E",
            data: [99, 99, 80, 90, 80, 85],
            backgroundColor: gradientColorH,
            hoverBackgroundColor: gradientHoverH,
            hoverBorderWidth: 1,
            hoverBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
	      maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        animation: {
            duration: 3000,
            easing: 'easeInBounce'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                },
                barPercentage: 1
            }],
            xAxes: [{
                gridLines: {
                    lineWidth: 1,
                    color: '#313154'
                },
                ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10,
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                }
            }],
        },
      	tooltips: {
          backgroundColor: '#282843',
          titleFontFamily: 'Heebo',
          titleFontColor: '#e79aaf',
          titleFontSize: 10,
          titleMarginBottom: 8,
          bodyFontFamily: 'Heebo',
          bodyFontSize: 10,
          bodyFontColor: '#ffffff',
          multiKeyBackground: '#e9198e',
          borderColor: '#e9198e',
          borderWidth: 2,
          caretSize: 3,
          cornerRadius: 3,
          xPadding: 12,
          yPadding: 12
        }
    }
});



//CMS Skills
// Get Vertical bar chart canvas element
var bar_ctx_v = document.getElementById('vertical-chart-c').getContext('2d');

// Vertical grtadient one
var gradientColorV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientColorV.addColorStop(0, '#e79aaf');
gradientColorV.addColorStop(1, '#e9198e');

// Vertical grtadient two
var gradientHoverV = bar_ctx_v.createLinearGradient(0, 0, 0, 700);
gradientHoverV.addColorStop(0, '#e9198e');
gradientHoverV.addColorStop(1, '#e79aaf');

// Vertical bar chart options
var bar_chart_v = new Chart(bar_ctx_v, {
    type: 'bar',
    data: {
        labels: ["W O R D P R E S S", "B L O G G E R", "S H O P I F Y", "D R U P A L", "M A G E N T O"],
        datasets: [{
            label: "S K I L L  S C O R E",
            data: [70, 70, 60, 60, 60],
            backgroundColor: gradientColorV,
            hoverBackgroundColor: gradientHoverV,
            hoverBorderWidth: 2,
            hoverBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
	      maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        animation: {
            duration: 3000,
            easing: 'easeInBounce'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    lineWidth: 1,
                    color: '#313154'
                },
                ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10,
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "#FFFFFF",
                    padding: 10
                },
                barPercentage: 0.6
            }],
        },
      	tooltips: {
          backgroundColor: '#282843',
          titleFontFamily: 'Heebo',
          titleFontColor: '#e79aaf',
          titleFontSize: 10,
          titleMarginBottom: 8,
          bodyFontFamily: 'Heebo',
          bodyFontSize: 10,
          bodyFontColor: '#ffffff',
          multiKeyBackground: '#e9198e',
          borderColor: '#e9198e',
          borderWidth: 2,
          caretSize: 3,
          cornerRadius: 3,
          xPadding: 12,
          yPadding: 12
        }
    }
});

// Get Horizontal bar chart canvas element
var bar_ctx_h = document.getElementById('horizontal-chart-c').getContext('2d');

// Horizontal grtadient one
var gradientColorH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientColorH.addColorStop(0, '#e79aaf');
gradientColorH.addColorStop(1, '#e9198e');

// Vertical grtadient two
var gradientHoverH = bar_ctx_h.createLinearGradient(300, 0, 0, 0);
gradientHoverH.addColorStop(0, '#e9198e');
gradientHoverH.addColorStop(1, '#e79aaf');

// Vertical bar chart options
var bar_chart_h = new Chart(bar_ctx_h, {
    type: 'horizontalBar',
    data: {
        labels: ["W O R D P R E S S", "B L O G G E R", "S H O P I F Y", "D R U P A L", "M A G E N T O"],
        datasets: [{
            label: "S K I L L  S C O R E",
            data: [70, 70, 60, 60, 60],
            backgroundColor: gradientColorH,
            hoverBackgroundColor: gradientHoverH,
            hoverBorderWidth: 1,
            hoverBorderColor: '#ffffff'
        }]
    },
    options: {
        responsive: true,
	      maintainAspectRatio: true,
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        legend: {
            display: false
        },
        animation: {
            duration: 3000,
            easing: 'easeInBounce'
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                },
                ticks: {
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                },
                barPercentage: 1
            }],
            xAxes: [{
                gridLines: {
                    lineWidth: 1,
                    color: '#313154'
                },
                ticks: {
                    min: 10,
                    max: 100,
                    stepSize: 10,
                    fontSize: 10,
                    fontColor: "#FFFFFF"
                }
            }],
        },
      	tooltips: {
          backgroundColor: '#282843',
          titleFontFamily: 'Heebo',
          titleFontColor: '#e79aaf',
          titleFontSize: 10,
          titleMarginBottom: 8,
          bodyFontFamily: 'Heebo',
          bodyFontSize: 10,
          bodyFontColor: '#ffffff',
          multiKeyBackground: '#e9198e',
          borderColor: '#e9198e',
          borderWidth: 2,
          caretSize: 3,
          cornerRadius: 3,
          xPadding: 12,
          yPadding: 12
        }
    }
});





// The typewriter element
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["$Hey, I'm Web Developer.","$I like to Code."];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,500);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 250 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},500);
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},500);
	} else if(i < textArray[i].length+1) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},500);

  // vars
'use strict'
var	testim = document.getElementById("testim"),
	testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
	touchStartPos,
	touchEndPos,
	touchPosDiff,
	ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}








    