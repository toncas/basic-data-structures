describe(`Queue`, () => {
  let queue;

  beforeEach(() => queue = new Queue());

  it(`should have a 'enqueue' function`, () => {
    expect(queue.enqueue).to.be.a('function');
  });

  it(`should have a 'dequeue' function`, () => {
    expect(queue.dequeue).to.be.a('function');
  });

  it(`should have a 'size' function`, () => {
    expect(queue.size).to.be.a('function');
  });

  it(`should have intial size of 0`, () => {
    expect(queue.size()).to.equal(0);
  });
});