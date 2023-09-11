import Link from "../link"
import ArrowTopSvg from "../../svg/arrowTopSvg"

const ToTopButtonContainer = () => {
  return (
    <div className="toTop_help-button-container">
        <Link toId="top">
          <ArrowTopSvg />
        </Link>
      </div>
  )
}

export default ToTopButtonContainer