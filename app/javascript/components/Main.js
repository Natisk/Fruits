import React from "react"
import PropTypes from "prop-types"

class Main extends React.Component  {
    render() {
        return (
            <div>
                <h1>Fruits are great! : {this.props.about_fruits}</h1>
            </div>
        )
    }
}

Main.propTypes = {
    about_fruits: PropTypes.string
};

export default Main