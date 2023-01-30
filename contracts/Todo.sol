// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Todo {
  struct todoStruct {
    string id;
    bool done;
    string value;
  }

  mapping(address => todoStruct[]) public todos;
  todoStruct[] updatedTodosList;

  event TodosUpdate(todoStruct[] currentTodos);

  function addTodo(string memory _id, string memory _title) public {
    delete updatedTodosList;

    updatedTodosList.push(todoStruct(_id, false, _title));

    for (uint i = 0; i < todos[msg.sender].length; i++) {
      updatedTodosList.push(todos[msg.sender][i]);
    }

    todos[msg.sender] = updatedTodosList;

    emit TodosUpdate(todos[msg.sender]);
  }

  function getTodos() public view returns (todoStruct[] memory) {
    return todos[msg.sender];
  }

  function deleteTodo(string memory _id) public {
    uint idx;

    for (uint i = 0; i < todos[msg.sender].length; i++) {
      if (keccak256(bytes(todos[msg.sender][i].id)) == keccak256(bytes(_id))) {
        idx = i;
        break;
      }
    }

    for (uint i = idx; i < todos[msg.sender].length - 1; i++) {
      todos[msg.sender][i] = todos[msg.sender][i + 1];
    }
    todos[msg.sender].pop();

    emit TodosUpdate(todos[msg.sender]);
  }

  function updateTodo(string memory _id) public {
    uint idx;

    for (uint i = 0; i < todos[msg.sender].length; i++) {
      if (keccak256(bytes(todos[msg.sender][i].id)) == keccak256(bytes(_id))) {
        idx = i;
        break;
      }
    }

    todos[msg.sender][idx].done = true;

    emit TodosUpdate(todos[msg.sender]);
  }
}
