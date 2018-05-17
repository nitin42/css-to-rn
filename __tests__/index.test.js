import cssToRN from '../src';

describe('CSS to React Native', () => {
  it('sanity check', () => {
    expect(typeof cssToRN).toBe('function');
  });

  it('should throw an error when passed an invalid style string', () => {
    expect(() => cssToRN(1234)).toThrow('Expected a valid css string.')
  })

  it('should not throw an error when passed a css string', () => {
    expect(() => cssToRN(``)).not.toThrow();
  });

  it('should create a style object from CSS string', () => {
    const styles = cssToRN(
      `color: red; padding: 50px; justify-content: center;`
    );

    expect(Array.isArray(styles)).toBe(true);
    expect(styles).toEqual([
      {
        color: 'red',
        justifyContent: 'center',
        paddingBottom: 50,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 50
      }
    ]);
  });
});
