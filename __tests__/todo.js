/* globals describe, expect, it, beforeAll, test */

const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

const today = new Date();
const oneDay = 60 * 60 * 24 * 1000;
const tomorrow = new Date(today.getTime() + 1 * oneDay);
const yesterday = new Date(today.getTime() - 1 * oneDay);

describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: today.toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const totalItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: today.toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(totalItemsCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should retrieve a overdue items", () => {
    const overdueItemsCount = overdue().length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: yesterday.toLocaleDateString("en-CA"),
    });
    expect(overdue().length).toBe(overdueItemsCount + 1);
  });
  test("Should retrieve a due today items", () => {
    const dueTodayItemsCount = dueToday().length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: today.toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toBe(dueTodayItemsCount + 1);
  });
  test("Should retrieve a due later items", () => {
    const dueLaterItemsCount = dueLater().length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: tomorrow.toLocaleDateString("en-CA"),
    });
    expect(dueLater().length).toBe(dueLaterItemsCount + 1);
  });
});
