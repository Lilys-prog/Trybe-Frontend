import React from 'react';

class Image extends React.Component {
  render() {
    const { source, alternativeText } = this.props;
    source = 'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg';
    alternativeText = 'cachorro dormindo na cama';
    return <img src={ source } alt={ alternativeText } />;
  }
}

export default Image;