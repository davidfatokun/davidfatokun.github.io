import MyPic from '../../../assets/images/MyPic.png'
import './index.scss'

const Logo = () => {

  return (
    <div className="logo-container" >
      <img
        className="solid-logo"
        alt= "My Picture"
        src={MyPic}
      />

    </div>
  )
}

export default Logo
