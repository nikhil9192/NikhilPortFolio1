document.addEventListener('DOMContentLoaded', function () {
   
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark');
    }); 
    

    document.getElementById("DownloadCV").addEventListener("click", function() {
    
        var link = document.createElement("a");
      
        link.href = "Nikhil's Resume (6) (2).pdf";
      
        link.download = "Nikhil's Resume (6) (2).pdf";
      
        link.click();
    });
    
    document.getElementById("liveProjectBtn4").addEventListener("click", function() {
        var videoUrl = "./images/ProjRecGrc.mp4";
        window.open(videoUrl, "_blank");
    });

    document.getElementById("githubLinkBtn4").addEventListener("click", function() {
        var githubUrl = "https://github.com/nikhil9192/GorceryDeliveryApplication.git";
        window.open(githubUrl, "_blank");
    });

    document.getElementById("liveProjectBtn1").addEventListener("click", function() {
        var videoUrl = "./images/Recording 2024-06-02 180323.mp4";
        window.open(videoUrl, "_blank");
    });

    document.getElementById("githubLinkBtn1").addEventListener("click", function() {
        var githubUrl = "https://github.com/nikhil9192/3D_Calculator.git";
        window.open(githubUrl, "_blank");
    });

    document.getElementById("liveProjectBtn2").addEventListener("click", function() {
        var videoUrl = "./images/flipcartvid.mp4";
        window.open(videoUrl, "_blank");
    });

    document.getElementById("githubLinkBtn2").addEventListener("click", function() {
        var githubUrl = "https://github.com/nikhil9192/flipcart.git";
        window.open(githubUrl, "_blank");
    });

    // document.getElementById("liveProjectBtn4").addEventListener("click", function() {
    //     var videoUrl = "./images/ProjRecGrc.mp4";
    //     window.open(videoUrl, "_blank");
    // });

    // document.getElementById("githubLinkBtn4").addEventListener("click", function() {
    //     var githubUrl = "https://github.com/nikhil9192/GorceryDeliveryApplication.git";
    //     window.open(githubUrl, "_blank");
    // });




/*  menu close and toggle **/
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-toggle svg');

function closeMenu() {
    menu.classList.remove('active');
    menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>`;
}


menuToggle.addEventListener('click', function () {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`;
    } else {
        closeMenu();
    }
});


// document.querySelector('a[href="#closeBar"]').addEventListener('click', function(event) {
//     event.preventDefault(); 
//     closeMenu();
// });


//    document.getElementById("liveProjectBtn4").addEventListener("click", function() {
    
//     var videoUrl = "./images/ProjRecGrc.mp4";
   
//     window.open(videoUrl, "_blank");
// });

// document.getElementById("githubLinkBtn4").addEventListener("click", function() {
    
//     var githubUrl = "https://github.com/nikhil9192/GorceryDeliveryApplication.git";
   
//     window.open(githubUrl, "_blank");
// });

//    document.getElementById("liveProjectBtn5").addEventListener("click", function() {
    
//     var videoUrl = "./images/Recording 2024-06-02 180323.mp4";
   
//     window.open(videoUrl, "_blank");
// });

// document.getElementById("githubLinkBtn5").addEventListener("click", function() {
    
//     var githubUrl = "https://github.com/nikhil9192/3D_Calculator";
   
//     window.open(githubUrl, "_blank");
// });

   



    




});