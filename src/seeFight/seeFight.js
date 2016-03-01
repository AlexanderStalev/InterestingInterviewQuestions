/**
 * Считаем поле квадратным.
 */
function shipCount(battlefield) {
    var size = Math.sqrt(battlefield.length),
        count = 0;

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            // Если встретили единичку, то увеличиваем кол-во кораблей.
            if (battlefield[i * size + j]) {
                ++count;
                
                // Стираем корабль по вертикали.
                var ii = i + 1;
                while (ii < size && battlefield[ii * size + j]) {
                    battlefield[ii * size + j] = 0;
                    ++ii;
                }
                
                // Стираем корабль по горизонтали.
                while (j < size && battlefield[i * size + j]) {
                    battlefield[i * size + j] = 0;
                    ++j;
                }                               
            }            
        }
    }
    
    return count;
}