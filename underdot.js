function _() {
    return Object.keys(this).forEach(e => {console.log(e)})
}

var _c = function(text) {
    if (window && document) {
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
} else {
    console.error('underdot >> must be run in a browser')
}
}

var _r = function(array, data) {
    try {
        return array.filter(i => i != data)
    } catch {
        console.error('underdot >> failed to remove from array')
    }
}

var _ehtml = function(data) {
try {
  return data.replace(
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
  );
    } catch {
        console.error('underdot >> failed to escape html')
    }
}

var _fjson = function(data) {
    try {
        return JSON.stringify(data, null, "\t")
    } catch {
        console.error('underdot >> failed to format json')
    }
}

var _l = function(url, code) {
    if (typeof url == 'string' && (url.startsWith('https://') || url.startsWith('http://')) && code && typeof code == 'string') {
        try {
            fetch(url).then(response => response.text()).then(response => {
                return eval(`${response}\n\n${code}`)
            })
        } catch {
            console.error('underdot >> failed to load script')
        }
    } else {
        console.error('underdot >> not a valid script url or code')
    }   
}

var _prxy = function(url) {
    if (typeof url == 'string' && (url.startsWith('https://') || url.startsWith('http://'))) {
        return 'https://proxy.blobby.me/?reqUrl=' + encodeURIComponent(url)
} else {
    console.error('underdot >> not a valid url')
}   
}

var _r = function(url) {
    if (typeof url == 'string' && (url.startsWith('https://') || url.startsWith('http://'))) {
        return window.location.href=url
} else {
    console.error('underdot >> not a valid url')
}   
}

var _t = function(data) {
    document.title = data
}