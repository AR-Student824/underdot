console.log('ehhlo')
function _copy(text) {
    if (!typeof data == 'string') {
        console.error('underdot >> error parsing data in _copy()')
    } else {
            var element = document.createElement("INPUT");
            element.setAttribute("value", text)
            document.body.appendChild(element);
            element.select();
            document.execCommand("copy");
            element.remove();
    }
}

function _removeFromArray(array, data) {
    if (!typeof array == 'array') {
        console.error('underdot >> error parsing array')
    } else {
        return array.filter(i => i == data)
    }
}