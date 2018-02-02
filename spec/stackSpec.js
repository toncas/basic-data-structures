describe('Stack', () => {

  let stack;

  beforeEach(() => stack = new Stack());

  it(`should have a 'push' function`, () => {
    expect(stack.push).to.be.a('function');
  });

  it(`should have a 'pop' function`, () => {
    expect(stack.pop).to.be.a('function');
  });

  it(`should have a 'size' function`, () => {
    expect(stack.size).to.be.a('function');
  });

  it(`should have intial size of 0`, () => {
    expect(stack.size()).to.equal(0);
  });

  it(`should increment in size when you push items on to the stack`, () => {
    stack.push(0);
    expect(stack.size()).to.equal(1);
    stack.push(1);
    expect(stack.size()).to.equal(2);
    stack.push(2);
    expect(stack.size()).to.equal(3);
    stack.push(3);
    expect(stack.size()).to.equal(4);
  });

  it(`should decrement in size when you add items on to the stack`, () => {
    stack.push(0);
    expect(stack.size()).to.equal(1);
    stack.push(1);
    expect(stack.size()).to.equal(2);
    stack.push(2);
    expect(stack.size()).to.equal(3);
    stack.pop();
    expect(stack.size()).to.equal(2);
  });

  it(`should pop the last value`, () => {
    stack.push(0);
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).to.equal(2);
    expect(stack.pop()).to.equal(1);
    expect(stack.pop()).to.equal(0);
  });

  it(`should handle pop of an empty stack`, () => {
    stack.pop();
    expect(stack.size()).to.equal(0);
    expect(stack.pop()).to.equal(undefined);
    stack.pop();
    expect(stack.size()).to.equal(0);
    stack.pop();
    expect(stack.size()).to.equal(0);
    stack.push(3);
    expect(stack.size()).to.equal(1);
  });

  it(`should handle push without value parameter`, () => {
    stack.push();
    expect(stack.size()).to.equal(0);
    stack.push(2);
    expect(stack.size()).to.equal(1);
    stack.push();
    expect(stack.size()).to.equal(1);
    stack.push();
    expect(stack.size()).to.equal(1);
  });

});