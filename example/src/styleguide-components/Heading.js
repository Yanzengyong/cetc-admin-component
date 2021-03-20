import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Styled from 'rsg-components/Styled';

const styles = ({ color, fontSize }) => ({
  heading: {
    color: '#414142',
    fontWeight: 900,
  },
  heading1: {
    fontSize: fontSize.h1,
    margin: '15px 0',
    color: '#06c1b1'
  },
  heading2: {
    fontSize: fontSize.h2,
    marginBottom: '10px',
  },
  heading3: {
    fontSize: fontSize.h3,
  },
  heading4: {
    fontSize: fontSize.h4,
  },
  heading5: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
  },
  heading6: {
    fontSize: fontSize.h6,
    fontStyle: 'italic',
  },
});

function HeadingRenderer({ classes, level, children, ...props }) {
  const Tag = `h${level}`;
  const headingClasses = cx(classes.heading, classes[`heading${level}`]);
  return (
    <Tag {...props} className={headingClasses}>
      {children}
    </Tag>
  );
}

HeadingRenderer.propTypes = {
  classes: PropTypes.object.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  children: PropTypes.node,
};

export default Styled(styles)(HeadingRenderer);
