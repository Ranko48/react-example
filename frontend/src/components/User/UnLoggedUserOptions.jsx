import { Link } from "react-router-dom"
import file from '../../services/paths'
import BasicButtons from './BasicButtons'
const UnLoggedUserOptions = () => {
    return (
        <>
            <Link to={`${file.AUTHENTICATE}`} className="link-height">
                <button className="btn-custom btn-custom--green w-100 h-100">
                    Login
                </button>
            </Link>
            <div className="dialog-separator-wrapper">
                <span className="dialog-separator"></span>
            </div>
            < BasicButtons />
        </>
    )
}

export default UnLoggedUserOptions