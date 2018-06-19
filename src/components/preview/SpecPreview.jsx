import React, {Component} from "react";
import PropTypes from "prop-types";

class SpecPreview extends Component {

    constructor (props) {
        super(props);
        this.svgParent = React.createRef();
    }

    componentDidMount () {
        const nodes = Array.from(this.svgParent.current.children);
        const svgPreview = nodes.pop();
        svgPreview.setAttribute('width', '280');
        svgPreview.setAttribute('height', '158');
    }

    render() {
        const { content } = this.props;

        return (
            <div ref={this.svgParent}
                 dangerouslySetInnerHTML={ {__html: content }}
            />

        );
    }
}

SpecPreview.propTypes = {
    content: PropTypes.string.isRequired,
};

SpecPreview.defaultProps = {
    content: '<svg></svg>'
};
export default SpecPreview;

