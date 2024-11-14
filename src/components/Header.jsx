function Header({ children }) {
  if (children) {
    return (
      <h1>
        {children}
      </h1>
    )
  }

  return (
    <div>
      <p>Header</p>
    </div>
  )
}

export default Header;
