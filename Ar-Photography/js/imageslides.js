(function(){
        var imgLen = document.getElementById('imgGallary');
        var images = imgLen.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length){
            setInterval(function(){
                images[0].src = images[counter].src;
               /*  console.log(images[counter].src); */
                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },4000);
        }
})(); 

(function(){
        var imgLen = document.getElementById('imgGallary2');//change the id
        var images = imgLen.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length){
            setInterval(function(){
                images[0].src = images[counter].src;
               /*  console.log(images[counter].src); */
                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },5000);
        }
})(); 
(function(){
        var imgLen = document.getElementById('imgGallary3');//change the id
        var images = imgLen.getElementsByTagName('img');
        var counter = 1;

        if(counter <= images.length){
            setInterval(function(){
                images[0].src = images[counter].src;
               /*  console.log(images[counter].src); */
                counter++;

                if(counter === images.length){
                    counter = 1;
                }
            },6000);
        }
})(); 