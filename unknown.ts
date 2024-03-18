const a = {
  b: 1,
};

function unKnown(a: unknown) {
  return a; //.b()
}
//remove the commented backticks to see expected behaviour of type unknown
