console.log('ehhlo')
function _() {
    return {
        "_copy(data)": "copies data to clipboard",
        "_removeFromArray(array, data)" : "removes from an array if the element matches the second argument"
    }
}
String.prototype.copy = function() {
    if (!typeof this == 'string') {
        console.error('underdot >> error parsing data in _copy()')
    } else {
            var element = document.createElement("INPUT");
            element.setAttribute("value", this)
            document.body.appendChild(element);
            element.select();
            document.execCommand("copy");
            element.remove();
    }
}

Array.prototype.remove = function(data) {
    if (!typeof this == 'array') {
        console.error('underdot >> error parsing array')
    } else {
        return this.filter(i => i == data)
    }
}

console.arial = function(data) {
    console.log(`%c${data}`, 'font-family:Arial;')
}