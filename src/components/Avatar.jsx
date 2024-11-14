// function Avatar({ person, size = 100 }) {
//   return (
//     <img
//       src={`https://i.imgur.com/${person.id}.jpg`}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   )
// }

// function Avatar({ name, id, size = 100 }) {
//   return (
//     <img
//       src={`https://i.imgur.com/${id}.jpg`}
//       alt={name}
//       width={size}
//       height={size}
//     />
//   )
// }

// function Avatar(props) {
//   return (
//     <img
//       src={`https://i.imgur.com/${props.person.id}.jpg`}
//       alt={props.person.name}
//       width={props.size}
//       height={props.size}
//     />
//   )
// }

// function Avatar(props) {
//   let person = props.person;
//   let size = props.size;

//   return (
//     <img
//       src={`https://i.imgur.com/${person.id}.jpg`}
//       alt={person.name}
//       width={size}
//       height={size}
//     />
//   )
// }

// object and array destructuring
// const state = React.useState(0);
// let count = state[0];
// let setCount = state[1];

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
// function Avatar({ person: { id, name }, size = 100 }) {
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

function Avatar({ person: { id, name }, size = 100 }) {
  return (
    <img
      style={{ borderRadius: '50%', border: '1px solid #ccc' }}
      src={`https://i.imgur.com/${id}.jpg`}
      alt={name}
      width={size}
      height={size}
    />
  )
}

// Avatar({ person: { id: 1, name: 'John Doe' }, size: 50  })
// Avatar({ person: { id: 1, name: 'John Doe' } })

export default Avatar;
