describe('normalizePath.', function () {
    it('/a/b/c', function () {
        expect(normalizePath('/a/b/c')).toBe('/a/b/c');
    });

    xit('/a/b/../c', function () {
        expect(normalizePath('/a/b/../c')).toBe('/a/c');
    });

    xit('/a/b/../c/.', function () {
        expect(normalizePath('/a/b/../c/.')).toBe('/a/c');
    });

    xit('/a/b/.../c', function () {
        expect(normalizePath('/a/b/.../c')).toThrowError('error');
    });
});