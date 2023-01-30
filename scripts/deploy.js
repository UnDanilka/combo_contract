const main = async () => {


  const Todo = await hre.ethers.getContractFactory("Todo")
  const todo = await Todo.deploy()
  await todo.deployed()
  console.log(`Todo deployed to`, todo.address)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

runMain()
