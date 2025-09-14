// function Avatar({ person, size = 100 }) {
//   return (
//     <img
//       src={`https://i.imgur.com/1bX5QH6.jpg`}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   );
// }
//
// Avatar({person: {id: '1234', name: 'tutor'}}) // <Avatar person={id: '1234', name: 'tutor'} size={400} />
// declare the usage or the declaration
//

// function Avatar({ name, id, size = 100 }) {
//   return (
//     <img
//       src={`https://i.imgur.com/${id}.jpg`}
//       alt={name}
//       width={size}
//       height={size}
//     />
//   );
// }
//
//
// Avatar({id: '1234', name: 'tutor', size: 700})

// function Avatar(props) {
//   return (
//     <img
//       src={`https://i.imgur.com/${props.id}.jpg`}
//       alt={props.name}
//       width={props.size}
//       height={props.size}
//     />
//   );
// }

// function Avatar({size = 200, ...props}) {
//   // let person = {id: props.id, name: props.name};
//   let size = props.size || 200; // size  must null or undefined || && - (truthy  or falsy)
//   let id = props.id;
//   let name = props.name;

//   return (
//     <img
//       src={`https://i.imgur.com/${id}.jpg`}
//       alt={name}
//       width={size}
//       height={size}
//     />
//   )
// }

// object and array destructuring
// const [count, setCount] = [1, 2, 3];
// let count = state[0];
// let setCount = state[1];

// function Avatar(props) {
//   // destructuring, | : - renaming, = default value
//   let { id: renamedId, size = 200, name } = props;

//   return (
//     <img
//       src={`https://i.imgur.com/${renamedId}.jpg`}
//       alt={name}
//       width={size}
//       height={size}
//     />
//   )
// }

// function Avatar(props) {
//   let { person, size } = props;

//   return (
//     <img
//       src={`https://i.imgur.com/${person.id}.jpg`}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   )
// }

// = default value
// : rename
// function Avatar({ person: { id: renamedId, name: renamedName }, size = 100 }) {
//   return (
//     <img
//       style={{ borderRadius: '50%', border: '1px solid #ccc' }}
//       src={`https://i.imgur.com/${id}.jpg`}
//       alt={name}
//       width={size}
//       height={size}
//     />
//   )
// }

function Avatar({ id, name, size = 100 }) {
  return (
    <img
      style={{ borderRadius: "50%", border: "1px solid #ccc" }}
      src={`https://i.imgur.com/${id}.jpg`}
      alt={name}
      width={size}
      height={size}
    />
  );
}

// Avatar({ person: { id: 1, name: 'John Doe' }, size: 50  })
// Avatar({ person: { id: 1, name: 'John Doe' } })

export default Avatar;
