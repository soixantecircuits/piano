import piano from '../../src/piano';

describe('piano', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(piano, 'greet');
      piano.greet();
    });

    it('should have been run once', () => {
      expect(piano.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(piano.greet).to.have.always.returned('hello');
    });
  });
});
