let currentIndex = 0;  
        const images = ["assets/image/pineapple1.jpg", "assets/image/pineapple2.jpg", "assets/image/pineapple3.jpg"];  
        
        function changeSlideTo(index) {
            currentIndex = index;
            updateSliderImage();
        }
        function changeSlide(direction) {
            currentIndex += direction;
        
           
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            } else if (currentIndex >= images.length) {
                currentIndex = 0;
            }
        
            updateSliderImage();
        }
        
        function updateSliderImage() {
            const sliderImage = document.getElementById("sliderImage");
            sliderImage.src = images[currentIndex];
        }
        
        document.addEventListener('DOMContentLoaded', function () {
            const leftButton = document.getElementById("leftbutton");
            const rightButton = document.getElementById("rightbutton");
        
            leftButton.addEventListener('click', function () {
                changeSlide(-1);
            });
        
            rightButton.addEventListener('click', function () {
                changeSlide(1);
            });
        });