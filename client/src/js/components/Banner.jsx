import React from 'react';
import '../../css/banner.css';

const Banner = (props) => {
  const styles = {
    backgroundImage: `url(${props.room.url})`,
  };
  return (
    <div className="slide" style={styles} onClick={props.clickFunction}>
    </div>
  );
};

export default Banner;
