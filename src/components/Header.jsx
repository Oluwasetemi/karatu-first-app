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

{/* <Header>
  Hello <span>World</span>
</Header> */}

{/* <Header /> div, p{Header} */}

export default Header;
