import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Clock from "../../components/Clock";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
import Loader from "../../components/Loader";
import { deleteTask, getTasks, postTask, putTask } from "../../api/task";
import { useContext } from "react";
import { AuthentificationContext } from "../../contexts/AuthentificationContext";
import { useHistory } from "react-router-dom";

export default function HomePage() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const authentification = useContext(AuthentificationContext);
  const token = authentification.token;

  const history = useHistory();

  useEffect(() => {
    if (token === "") {
      history.push("/login");
    }
    getTasks(token)
      .then((tasks) => {
        setTodoList(tasks);
        setLoading(false);
      })
      .catch((res) => {
        setLoading(false);
        setError(true);
        setErrorMessage("Impossible de charger votre todo list !");
      });
  }, [authentification]);

  const handleAddItem = (newItem) => {
    const currentState = [...todoList];
    setTodoList([...currentState, newItem]);

    postTask(token, newItem)
      .then((res) => {
        setTodoList([...currentState, res]);
      })
      .catch((error) => {
        setTodoList(currentState);
        setError(true);
        setErrorMessage("Impossible d'ajouter un item pour le moment !");
      });
  };

  const handleDrop = (reorderedList) => {
    setTodoList(reorderedList);
  };

  const handleDelete = (id) => {
    const currentState = [...todoList];
    setTodoList([...todoList].filter((item) => item.id !== id));

    deleteTask(token, id).catch(() => {
      setTodoList(currentState);
      setError(true);
      setErrorMessage("Impossible de supprimer l'item !");
    });
  };

  const handleCheck = (id) => {
    const currentState = [...todoList];
    const elementToUpdate = todoList.find((element) => element.id === id);

    setTodoList(
      [...todoList].map((element) =>
        element.id === id ? { ...element, check: !element.check } : element
      )
    );

    putTask(token, id, { check: !elementToUpdate.check }).catch(() => {
      setTodoList(currentState);
      setError(true);
      setErrorMessage("Impossible de checker l'item pour le moment !");
    });
  };

  return (
    <Layout openError={error} errorMessage={errorMessage}>
      <Clock />
      <TodoForm onAddItem={handleAddItem} />
      {loading ? (
        <Loader />
      ) : (
        <TodoList
          list={todoList}
          onDrop={handleDrop}
          onDelete={handleDelete}
          onCheck={handleCheck}
        />
      )}
    </Layout>
  );
}
