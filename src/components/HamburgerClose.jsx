function HamburgerClose() {

    const HamburgerStyle = {
        fontSize: '35px',
        color: 'black',
        margin: '6px 0',
    }

  return (
    <>
        {/* // Making a close menu with CSS ONLY */}
        <div style={HamburgerStyle} className="hover:cursor-pointer">X</div>
    </>
  )
}

export default HamburgerClose