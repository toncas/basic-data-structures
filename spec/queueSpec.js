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

  it(`should increment in size when adding an element on to the queue`, () => {
    queue.enqueue(1);
    expect(queue.size()).to.equal(1);
    queue.enqueue(2);
    expect(queue.size()).to.equal(2);
  });

  it(`should decrement in size when dequeueing an element from the queue`, () => {
    queue.enqueue(1);;
    queue.enqueue(2);

    queue.dequeue();
    expect(queue.size()).to.equal(1);

    queue.dequeue();
    expect(queue.size()).to.equal(0);
    
  });

  it('should handle dequeue of an empty queue', () => {
    expect(queue.size()).to.equal(0);
    expect(queue.dequeue()).to.equal(undefined);
    expect(queue.size()).to.equal(0);
    expect(queue.dequeue()).to.equal(undefined);
    expect(queue.size()).to.equal(0);
    expect(queue.dequeue()).to.equal(undefined);
    expect(queue.size()).to.equal(0);
  });

  it('should return first element when calling dequeue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    expect(queue.dequeue()).to.equal(1);
    expect(queue.dequeue()).to.equal(2);
    expect(queue.dequeue()).to.equal(3);
    expect(queue.dequeue()).to.equal(4);
    expect(queue.dequeue()).to.equal(5);
  });


});