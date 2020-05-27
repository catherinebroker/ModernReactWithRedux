import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import createBrowserHistory from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button pink">Delete</button>
        <button className="ui button">Cancel</button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => createBrowserHistory.push('/')}
        />
      </div>
    );
  }
}

export default connect(
  null,
  {
    fetchStream,
    deleteStream
  }
)(StreamDelete);