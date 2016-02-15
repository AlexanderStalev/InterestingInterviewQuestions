function normalizePath(path) {
    /**
     * Возвращает массив с частями пути.
     */
    function getParts(path) {
        var parts = [];
        var startIndex = 0;

        var allDots = true;
        for (var i = 0; i < path.length; i++) {
            if (i === 0 && startIndex === 0 && path[0] === '/') {
                startIndex = 1;
                continue;
            }

            if (path[i] !== '/') {
                if (path[i] !== '.') {
                    allDots = false;
                }
                continue;

            } else {
                var part = path.substring(startIndex, i);
                if (allDots && part.length > 2) {
                    throw new Error('error');
                }
                allDots = true;
                parts.push(part);
                startIndex = i + 1;
            }
        }

        if (startIndex < path.length) {
            // Дублирование кода из тела цикла.
            var part = path.substring(startIndex, path.length);
            if (allDots && part.lenght > 2) {
                throw new Error('error');
            }
            allDots = true;
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

        if (part === '.') {
            part = parts.pop();
            //BUG: если дальше будут /../ - алгоритм не сработает, поскольку обработка данного случая выше. 
        }

        resultPath = resultPath
            ? part + '/' + resultPath
            : part;
    }

    resultPath = '/' + resultPath
           
    return resultPath;
}