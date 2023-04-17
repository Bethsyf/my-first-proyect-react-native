import React from 'react'
import {View, Text} from 'react-native'
import PropTypes from 'prop-types'

const Saludo = ({ firstname, lastname }) => {

  return (
    <View>
        <Text>hola {firstname} {lastname} ¿como estas?</Text>
    </View>
  )
}

Saludo.defaultProps = {
  firstname: "bethsy",
  lastname: "falcon",
}

Saludo.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired
}


export default Saludo
