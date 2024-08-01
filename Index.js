let result = document.getElementById("GFG");

    function changeColor(color) {
        document.body.style.background = color;
        document.getElementsByClassName('topNav').style.background = color;
    }

    function myFunc() {
    changeColor('white');
    }
    function myFunc2() {
        changeColor('black');
    }
    
    
    function show() {
        /* Access image by id and change 
        the display property to block*/
        document.getElementById('image')
            .style.display = "block";
        document.getElementById('btnID')
            .style.display = "none";
    }