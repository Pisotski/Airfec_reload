const cssCarouselStyles = {};

cssCarouselStyles.FlexCol = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  cursor: 'pointer',
};
cssCarouselStyles.FlexRow = {
  display: 'flex',
  flexWrap: 'nowrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer',
};
cssCarouselStyles.CrossButtonStyles = {
  alignSelf: 'flex-end',
  cursor: 'pointer',
};
cssCarouselStyles.LeftArrowButtonStyles = {
  alignContent: 'center',
  justifyContent: 'center',
  order: 1,
};
cssCarouselStyles.RightArrowButtonStyles = {
  justifyContent: 'center',
  order: 3,
};
cssCarouselStyles.MainSlide = {
  maxWidth: '650px',
  maxHeight: '480px',
  minWidth: '650px',
  minHeight: '480px',
};
cssCarouselStyles.ImageSlidePosition = {
  alignSelf: 'center',
  alignContent: 'center',
  order: 2,
};
cssCarouselStyles.DescriptionPosition = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'nowrap',
  order: 4,
};
cssCarouselStyles.DescriptionStyles = {
  display: 'inlineFlex',
  color: 'white',
  fontFamily: 'Circular,"Helvetica Neue",Helvetica,Arial,sans-serif',
  fontSize: '14px',
  lineHeight: '1.43',
};
cssCarouselStyles.DescriptionButton = {
  display: 'inlineFlex',
  background: 'none',
  outline: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer',
};
cssCarouselStyles.SlideShowFlexBox = {
  alignSelf: 'center',
  order: 5,
};
cssCarouselStyles.SmallSlideStyles = {
  width: '100px',
  height: '67px',
};

export default cssCarouselStyles;
