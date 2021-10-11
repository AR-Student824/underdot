console.log('ehhlo')
function _() {
    return {
        "_copy(data)": "copies data to clipboard",
        "_removeFromArray(array, data)" : "removes from an array if the element matches the second argument"
    }
}
var _copy = function(text) {
    try {
            var element = document.createElement("INPUT");
            element.setAttribute("value", text)
            document.body.appendChild(element);
            element.select();
            document.execCommand("copy");
            element.remove();
            return text;
    } catch {
        console.error('underdot >> failed to copy text')
    }
}

var _remove = function(array, data) {
    try {
        return array.filter(i => i != data)
    } catch {
        console.error('underdot >> failed to remove from array')
    }
}