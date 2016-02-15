describe('carriedSum.', function () {
    it('sum()', function () {
        expect(sum()).toBe(0);
    });

    it('sum(1)', function () {
        expect(sum(1)()).toBe(1);
    });

    it('1+1', function () {
       expect(sum(1)(1)()).toBe(2);
    });
});