import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../../services/todoManager";

export default function TodoList(props) {
  const { list, onDrop, onDelete } = props;

  const handleDragEnd = (result) => {
    if (!result.destination) {
      if (onDelete) {
        onDelete(result.draggableId);
      }
      return;
    }

    const reorderedList = reorder(
      props.list,
      result.source.index,
      result.destination.index
    );

    if (onDrop) {
      onDrop(reorderedList);
    }
  };

  if (list.length === 0) {
    return <p className={styles.empty_text}>Rien à faire aujourd'hui</p>;
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={styles.container}
          >
            {list.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TodoItem
                      key={item.title}
                      title={item.title}
                      datetime={item.datetime}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

TodoList.propTypes = {
  list: PropTypes.array.isRequired,
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
};
