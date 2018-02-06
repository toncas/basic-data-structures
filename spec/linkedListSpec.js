describe(`Linked List`, function() {
  let linkedList;

  beforeEach(() => linkedList = new LinkedList());

  it(`should have a function called addToHead`, () => {
    expect(linkedList.addToHead).to.be.a('function');
  });

  it(`should have a function called addToEnd`, () => {
    expect(linkedList.addToEnd).to.be.a('function');
  });

  it(`should have a function called size`, () => {
    expect(linkedList.size).to.be.a('function');
  });

  it(`should have a function called removeHead`, () => {
    expect(linkedList.removeHead).to.be.a('function');
  });

  it(`should have a function called removeTail`, () => {
    expect(linkedList.removeTail).to.be.a('function');
  });

  it(`should have a function called insertNodeAt`, () => {
    expect(linkedList.insertNodeAt).to.be.a('function');
  });

  it(`should have a function called toArray`, () => {
    expect(linkedList.toArray).to.be.a('function');
  });

  it(`should have a function called reverse`, () => {
    expect(linkedList.reverse).to.be.a('function');
  });

  it(`should have an initial size of 0`, () => {
    expect(linkedList.size()).to.equal(0);
  });


});