import PropTypes from 'prop-types'
import React, { memo } from 'react'

function Publicacion({ autor, contenido }) {
  return (
    <div>
      <p><b>{autor}</b></p>
      <p>{contenido}</p>
    </div>
  );
}

export default Publicacion;