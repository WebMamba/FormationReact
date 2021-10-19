import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";
import PropTypes from "prop-types";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default function TodoList(props) {
  const { list, onDrop, onDelete } = props;

  if (list.length === 0) {
    return <p className={styles.empty_text}>Rien à faire aujourd'hui</p>;
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      if (onDelete) {
        onDelete(result.source.id);
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

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {list.map((item, index) => (
              <Draggable
                key={item.id}
                draggableId={item.id.toString()}
                index={index}
              >
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
