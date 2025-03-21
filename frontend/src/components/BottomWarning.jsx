import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export function BottomWarning({ label, buttonText }) {
    return <div>
        <div>
            {label}
        </div>
        <Link className="pointer underline pl-1 cursor-pointer">{buttonText}</Link>
    </div>
}

BottomWarning.propTypes = {
    label: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
}

