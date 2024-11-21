import Avatar from "./Avatar"

// Parent -> Child
// prop forwarding and spreading props
function Profile(props) {
  return (
    <div>
      <Avatar {...props} />
    </div>
  )
}

// Profile({ id: '1bX5QH6', name: 'Khadijah Kabir'})
//
// <Profile id='1bX5QH6' name='Khadijah Kabir' />

export default Profile;
