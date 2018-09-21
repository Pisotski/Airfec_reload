import React from 'react';

const Banner = (props) => {
  const styles = {
    backgroundImage: `url(${props.room.url})`,
    height: 325,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };
  return (
    <div className="slide" style={styles} onClick={props.clickFunction}>
    </div>
  );
};

export default Banner;
