main()

function * createGenerator () {
  yield Promise.resolve(3)
  yield Promise.resolve(2)
  yield Promise.resolve(1)
  return 42
}

async function coroutine (createGenerator) {
  const generator = createGenerator()
  let next = generator.next()
  // for-of drops the return value
  // so we use a while loop
  while (!next.done) {
    // await next promise
    await next.value
    // update next
    next = generator.next()
  }
  return next.value
}

async function main () {
  const result = await coroutine(createGenerator)
  console.log({ result })
}

