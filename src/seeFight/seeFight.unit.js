describe('seeFight.', function () {
    it('1 корабль на поле 1x1.', function () {
        // Arrange.
        var battlefield = [
            1
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(1);
    });

    it('0 кораблей на поле 1x1.', function () {
        // Arrange.
        var battlefield = [
            0
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(0);
    });

    it('1 корабль на поле 2x2.', function () {
        // Arrange.
        var battlefield = [
            1, 0,
            0, 0
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(1);
    });

    it('1 корабль на поле 2x2 (в правом нижнем углу).', function () {
        // Arrange.
        var battlefield = [
            0, 0,
            0, 1
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(1);
    });

    it('2 корабля на поле 2x2.', function () {
        // Arrange.
        var battlefield = [
            1, 0,
            0, 1
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(2);
    });

    it('2 корабля на поле 2x2.', function () {
        // Arrange.
        var battlefield = [
            0, 1,
            1, 0
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(2);
    });


    it('3 корабля.', function () {
        // Arrange.
        var battlefield = [
            0, 1, 1, 0,
            0, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 1
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(3);
    });

    it('4 корабля.', function () {
        // Arrange.
        var battlefield = [
            1, 1, 1, 1,
            0, 0, 0, 0,
            1, 0, 1, 0,
            1, 0, 0, 1
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(4);
    });

    it('4 корабля однопалубных.', function () {
        // Arrange.
        var battlefield = [
            1, 0, 1, 0,
            0, 0, 0, 0,
            0, 1, 0, 1,
            0, 0, 0, 0
        ];
        
        // Act!
        var count = shipCount(battlefield);
        
        // Assert.    
        expect(count).toBe(4);
    });
});