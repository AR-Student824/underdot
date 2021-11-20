function _() {
    return Object.keys(this).forEach(e => { console.log(e) })
}

var _c = function (text) {
    return new Promise((resolve, reject) => {
    if (window && document) {
        try {
            var element = document.createElement("INPUT");
            element.setAttribute("value", text)
            document.body.appendChild(element);
            element.select();
            document.execCommand("copy");
            element.remove();
            resolve(text)
        } catch {
            reject('underdot >> failed to copy text')
        }
    } else {
        reject('underdot >> must be run in a browser')
    }
})
}

var _rmv = function (array, data) {
    return new Promise((resolve, reject) => {
        try {
            resolve(array.filter(i => i != data))
        } catch {
            reject('underdot >> failed to remove from array')
        }
    })
}

var _ehtml = function (data) {
    return new Promise((resolve, reject) => {
        try {
            resolve(data.replace(
                /[&<>'"]/g,
                tag =>
                ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;',
                    "'": '&apos;'
                }[tag] || tag)
            ))
        } catch {
            reject('underdot >> failed to escape html')
        }
    })
}

var _fjson = function (data) {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.stringify(data, null, "\t"))
        } catch {
            resolve(console.error('underdot >> failed to format json'))
        }
    })
}

var _l = function (url, code) {
    return new Promise((resolve, reject) => {
        if (typeof url == 'string' && (url.startsWith('https://') || url.startsWith('http://')) && code && typeof code == 'string') {
            try {
                fetch(url).then(response => response.text()).then(response => {
                    resolve(eval(`${response}\n\n${code}`))
                })
            } catch {
                reject('underdot >> failed to load script')
            }
        } else {
            reject('underdot >> not a valid script url or code')
        }
    })
}


var _r = function (url) {
    return new Promise((resolve, reject) => {
        if (typeof url == 'string' && (url.startsWith('https://') || url.startsWith('http://'))) {
            window.location.href = url
            resolve(url)
        } else {
            reject('underdot >> not a valid url')
        }
    })
}

var _t = function (data) {
    return new Promise((resolve, reject) => {
        try {
            document.title = data
            resolve(data)
        } catch (e) {
            reject(e)
        }
    })
}

// ! UNDOCUMENTED EXPERIMENTAL

var _capfirstltr = function (text) {
    return new Promise((resolve, reject) => {
        try {
    resolve(`${text.charAt(0).toUpperCase()}${text.substring(0)}`)
        } catch {
            reject('underdot >> failed to capitalize first letter in string')
        }
    })
}