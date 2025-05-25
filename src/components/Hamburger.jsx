function Hamburger() {

  const HamburgerStyle = {
    width: '35px',
    height: '3px',
    backgroundColor: 'black',
    margin: '6px 0',
  }

  return (
    <>
        {/* // Making a hamburger menu with CSS ONLY */}
        <section className="hover:cursor-pointer">
            <div style={HamburgerStyle}></div>
            <div style={HamburgerStyle}></div>
            <div style={HamburgerStyle}></div>
        </section>
    </>
  )
}

export default Hamburger