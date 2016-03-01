/**
 * Считаем поле квадратным.
 */
function shipCount(battlefield) {
    var size = Math.sqrt(battlefield.length),
        count = 0;

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            // Подсчитываем только первые элементы кораблей.
            //
            // Если текущий элемент истинный и удовлетворяет шаблону
            // * 0
            // 0 1
            // Т.е. находится в правом нижнем углу 4-ки, то является началом корабля.
            // Данному условию не удовлетворяет ни один элемент корабля, кроме первого, поэтому алгоритм работает.
            
            if (!battlefield[i * size + j]) {
                continue;
            }                       
            
            // Если 1-ая строка и первый столбец.
            if (i === 0 && j === 0) {
                ++count;
            }
            // Если 1-ая строка. 
            else if (i === 0 && !battlefield[i * size + j - 1]) { 
                ++count;
            }            
            // Если 1-ый столбец. 
            else if (j === 0 && !battlefield[(i - 1) * size + j]) { 
                ++count;
            }
            // Если ни 1-ая строка, ни 1-ый столбец.
            else if (!battlefield[i * size + j - 1] && !battlefield[(i - 1) * size + j]) {
                 ++count;
            }
        }
    }

    return count;
}