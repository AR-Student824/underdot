_.copy() = function(text) {
    if (!typeof data == 'string') {
        console.error('underdot >> error parsing data in _.copy()')
    } else {
            var element = document.createElement("INPUT");
            element.setAttribute("value", text)
            document.body.appendChild(element);
            element.select();
            //element.setSelectionRange(0, 99999);
            document.execCommand("copy");
            element.remove();
    }
}