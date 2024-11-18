class ToDoList:
    def __init__(self):
        self.tasks = []

    def add_task(self, task):
        self.tasks.append({'task': task, 'completed': False})
        print(f"Task '{task}' added.")

    def mark_completed(self, index):
        if 0 <= index < len(self.tasks):
            self.tasks[index]['completed'] = True
            print(f"Task '{self.tasks[index]['task']}' marked as completed.")
        else:
            print("Invalid task index.")

    def remove_task(self, index):
        if 0 <= index < len(self.tasks):
            removed_task = self.tasks.pop(index)
            print(f"Task '{removed_task['task']}' removed.")
        else:
            print("Invalid task index.")

    def show_tasks(self):
        if not self.tasks:
            print("No tasks in the list.")
        else:
            for i, task in enumerate(self.tasks):
                status = "[x]" if task['completed'] else "[ ]"
                print(f"{i}. {status} {task['task']}")


def main():
    todo_list = ToDoList()

    while True:
        print("\nTo-Do List Manager")
        print("1. Add Task")
        print("2. Mark Task as Completed")
        print("3. Remove Task")
        print("4. Show Tasks")
        print("5. Exit")

        choice = input("Enter your choice: ")

        if choice == '1':
            task = input("Enter the task: ")
            todo_list.add_task(task)
        elif choice == '2':
            try:
                index = int(input("Enter the task index to mark as completed: "))
                todo_list.mark_completed(index)
            except ValueError:
                print("Please enter a valid number.")
        elif choice == '3':
            try:
                index = int(input("Enter the task index to remove: "))
                todo_list.remove_task(index)
            except ValueError:
                print("Please enter a valid number.")
        elif choice == '4':
            todo_list.show_tasks()
        elif choice == '5':
            print("Exiting To-Do List Manager. Goodbye!")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
