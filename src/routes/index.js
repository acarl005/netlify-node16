const name = await Promise.resolve("world")

export function get() {
  return {
    status: 200,
    body: {
      message: `Hello, ${name}!`
    }
  }
}
