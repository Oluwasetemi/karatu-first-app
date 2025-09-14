import Avatar from "./Avatar";

// Greeting is Parent Component
export function Greeting(props) {
  const styles = {
    border: "1px solid white",
    padding: "6px",
    marginBottom: "4px",
  };

  return (
    <div style={styles}>
      <Avatar person={{ id: "1bX5QH6", name: "Khadijah Kabir" }} />
      <p>Hello, {props.name}.!</p>
      <p>You are welcome here.</p>
      {/* {props.value}
      {props.list.join(", ")}*/}
      {props.children}
    </div>
  );
}

// export default Greeting;
