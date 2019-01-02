import React, { Fragment } from 'react';
import ReactToPrint from 'react-to-print';
import { Button } from '@module/look-client-react';
import PropTypes from 'prop-types';

// export default Component => {
//   return class ExportPDF extends React.Component {
//     render() {
//       return (
//         <Fragment>
//           <Component {...this.props} ref={el => (this.componentRef = el)}>
//             {' '}
//           </Component>
//           <ReactToPrint trigger={() => <Button>Print this out!</Button>} content={() => this.componentRef} />
//         </Fragment>
//       );
//     }
//   };
// };

class ExportPDF extends React.Component {
  state = {
    visibly: 'block'
  };
  static propTypes = {
    children: PropTypes.node,
    visibly: PropTypes.bool
  };

  componentDidMount() {
    const { visibly = true } = this.props;
    if (!visibly) {
      this.setState({
        visibly: 'none'
      });
    }
  }

  handlePDF = () => {
    return this.componentRef;
  };

  render() {
    const { children } = this.props;

    return (
      <Fragment>
        <div ref={el => (this.componentRef = el)} style={{ display: this.state.visibly }}>
          {children}
        </div>
        <ReactToPrint trigger={() => <Button>Print this out!</Button>} content={this.handlePDF} />
      </Fragment>
    );
  }
}

export default ExportPDF;