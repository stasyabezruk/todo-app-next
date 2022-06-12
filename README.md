### Todo app

- This example shows how to integrate **Next.js** with [Redux Toolkit](https://redux-toolkit.js.org).
- Typescript
- styled-components
- redux-persist (for saving in local storage)
- custom hooks (*useInput, useTodoActions*)

#### What the application does
- The task list can be fetched from: https://jsonplaceholder.typicode.com/todos
- application’s URL a **userId** query param will be present with which the task list will be filtered by. Example: *localhost:3000/?userId=2* will only display tasks for userId=2.
- For each task there is **DONE** button (circle checkbox) that will change styles.
- For each task there is **REMOVE** button that will appear on hover effect.
- There is a button **PLUS** that will show the field for adding new task. You can type and press ENTER to add it to the begining of the list. When you press **CROSS** button - the field section will be hidden
____
- Button **Save tasks** saves tasks list to localStorage
- Button **Remove tasks list** - resets tasks list from localStorage
- By default the todos are fecthed from api. But if you have saved tasks in localStorage, they will be taken from it.
- When you add new task, remove or mark task as done, and then you want to save the task list -> press **Save tasks** button.

#### How to use
```bash
npm install
npm run dev -> http://localhost:3000/
```

https://user-images.githubusercontent.com/10813820/173241065-0b9434ed-151a-4186-926d-5118c492352e.mp4
