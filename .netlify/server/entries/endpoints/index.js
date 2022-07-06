const name = await Promise.resolve("world");
function get() {
  return {
    status: 200,
    body: {
      message: `Hello, ${name}!`
    }
  };
}
export { get };
