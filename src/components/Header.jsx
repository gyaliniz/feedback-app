import {Link} from 'react-router-dom'
function Header({text, bgColor, textColor}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }

  return (
    <header style={headerStyle}>
        <div className="container">
          <Link to='/' style={{textDecoration: "none", color:"#fff"}}>{text}</Link>
          </div>
    </header>
  )
}

Header.defaultProps = {
  text: "Feedback App",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#fff"
}

export default Header