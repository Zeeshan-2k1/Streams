import FlvJs from 'flv.js';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const { id } = this.props.match.params;
    this.player = FlvJs.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <video controls style={{ width: '100%' }} ref={this.videoRef} />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapToStateProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapToStateProps, { fetchStream })(StreamShow);
