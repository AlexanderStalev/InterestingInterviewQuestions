function normalizePath(path) {
    /**
     * Возвращает массив с частями пути.
     */
    function getParts(path) {
        var parts = [];
        var startIndex;

        for (var i = 0; i < path.length; i++) {
            if (i === 0 && startIndex === 0 && path[0] === '/') {
                startIndex = 1;
                continue;
            }

            if (path[i] !== '/') {
                continue;
            } else {
                var part = path.substring(startIndex, i);
                parts.push(part);
                startIndex = i + 1;
            }
        }

        if (startIndex < path.length) {
            var part = path.substring(startIndex, path.length);
            parts.push(part);
        }

        return parts;
    }

    var parts = getParts(path);
    var resultPath = '';

    while (parts.length) {
        var part = parts.pop();

        var skip = false;
        while (part === '..') {
            part = parts.pop();
            skip = true;
        }
        if (skip) {
            continue;
        }

        resultPath = resultPath 
                    ? part + '/' + resultPath
                    : part;
    }

    return resultPath;
}