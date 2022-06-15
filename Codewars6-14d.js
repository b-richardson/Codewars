// Validate Pin

function validatePIN (pin) {
    if ((pin.length === 4 || pin.length === 6) && Number.isInteger(+pin)){
      return true
    }else{
      return false
    }
  }