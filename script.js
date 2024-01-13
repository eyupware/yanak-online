document.addEventListener("DOMContentLoaded", function() {
    var text = "developed by eyupxrq";
    var textElement = document.getElementById("typing-text");

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            textElement.innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 150);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 2000);
        }
    }

    // Start the typing animation after a delay
    setTimeout(function() {
        typeWriter(text, 0, function() {
            // You can add additional actions after the typing animation is complete
        });
    }, 2000); // 1000 milliseconds = 1 second
});

document.addEventListener("DOMContentLoaded", function() {
    var cursor = document.createElement("div");
    cursor.className = "cursor";
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(e) {
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
    });
});