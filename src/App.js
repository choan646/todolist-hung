import MyTodoAdd from "./Layouts/MyTodoAdd";
import MyTodoHeader from "./Components/MyTodoHeader";
import MyTodoFooter from "./Components/MyTodoFooter";
import MyTodoListTask from "./Layouts/MyTodoList";
import MyTodoFilter from "./Layouts/MyTodoFilter";


function App() {
  return (
    <>
    <MyTodoHeader />
      <div className="content__myToDo">
      {/* Chưa có validation ô nhập và nếu nhập task trùng */}
        <MyTodoAdd /> 
        <MyTodoFilter />
        <MyTodoListTask/>
      </div>
      <MyTodoFooter />
    </>
  );
}

export default App;
