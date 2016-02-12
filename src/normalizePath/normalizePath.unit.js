describe('normalizePath.', function () {
    it('/a/b/c', function () {
        expect(normalizePath('/a/b/c')).toBe('/a/b/c');
    });

    it('/a/b/../c', function () {
        expect(normalizePath('/a/b/../c')).toBe('/a/c');
    });

    it('/a/b/../c/.', function () {
        expect(normalizePath('/a/b/../c/.')).toBe('/a/c');
    });

    it('/a/b/.../c', function () {
        expect(normalizePath.bind(null, '/a/b/.../c')).toThrowError('error');
    });
});