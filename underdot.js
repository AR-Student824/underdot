console.log('ehhlo')
function _() {
    return {
        "_copy(data)": "copies data to clipboard",
        "_removeFromArray(array, data)" : "removes from an array if the element matches the second argument"
    }
}
var _copy = function(text) {
    if (!typeof text == 'string') {
        console.error('underdot >> error parsing data in _copy()')
    } else {
            var element = document.createElement("INPUT");
            element.setAttribute("value", text)
            document.body.appendChild(element);
            element.select();
            document.execCommand("copy");
            element.remove();
            return text;
    }
}

var _remove = function(array, data) {
    if (!typeof array == 'array') {
        console.error('underdot >> error parsing array')
    } else {
        return array.filter(i => i != data)
    }
}

var _logArial = function(data) {
    console.log(`%c${data}`, 'font-family:Arial;')
}