const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Todo", function () {
  let acc1;

  beforeEach(async function () {
    [acc1, acc2] = await ethers.getSigners();
    const Todo = await ethers.getContractFactory("Todo", acc1);
    todo = await Todo.deploy();
    await todo.deployed();
  });

  it("should be deployed", async function () {
    expect(todo.address).to.be.properAddress;
  });

  it("should has length 0 by default", async function () {
    const todos = await todo.getTodos();
    expect(todos.length).to.equal(0)
  });

  it("adding todo in the list", async function () {
    await todo.addTodo('0', 'first');
    const todos = await todo.getTodos();
    expect(todos.length).to.equal(1)
  });

  it("set todo done", async function () {
    await todo.addTodo('0', 'first');
    const todosAfterAdding = await todo.getTodos();
    expect(todosAfterAdding.length).to.equal(1)
    expect(todosAfterAdding[0].done).to.equal(false)
    await todo.updateTodo('0');
    const todosAfterUpdating = await todo.getTodos();
    expect(todosAfterUpdating[0].done).to.equal(true)

  });



  it("removing todo from the list", async function () {
    await todo.addTodo('0', 'first');
    const todosAfterAdding = await todo.getTodos();
    expect(todosAfterAdding.length).to.equal(1)
    await todo.deleteTodo('0');
    const todosAfterRemoving = await todo.getTodos();
    expect(todosAfterRemoving.length).to.equal(0)
  });

});
