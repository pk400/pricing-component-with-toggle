import React, {useState} from 'react'
import Switch from 'react-input-switch'

const PricingToggle = ({
  pricingToggle,
  setPricingToggle
}) => {
  return (
    <div className="pricing_toggle_container">
      <div>Monthly</div>
      <div className='toggle_switch'>
        <Switch
          styles={{
            track: {
              backgroundColor: 'hsl(236, 72%, 79%)',
            },
            trackChecked: {
              backgroundColor: 'hsl(236, 72%, 79%)',
            },
            button: {
              backgroundColor: '#ffffff',
            },
            buttonChecked: {
              backgroundColor: '#ffffff'
            }
          }}
          value={pricingToggle}
          onChange={setPricingToggle} />
      </div>
      <div>Annually</div>
    </div>
  )
}

export default PricingToggle
