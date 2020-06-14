import React from 'react'

const PricingLevel = ({
  details,
  pricingToggle
}) => {
  return (
    <div className={details.recommended ? 'pricing_level_recommended' : 'pricing_level'}>
      <div className='level_name'>{details.name}</div>
      <div className='level_price'>
        <span className='level_price_unit'>{details.prices.unit}</span>
        {pricingToggle === 0 ?
          <>{details.prices.monthly}</> : <>{details.prices.annually}</>}
      </div>
      <div className='level_section'>{details.storage.size} {details.storage.unit} Storage</div>
      <div className='level_section'>{details.users_allowed} Users Allowed</div>
      <div className='level_section'>Send up to {details.max_upload.size} {details.max_upload.unit}</div>
      <button className='level_button'>Learn More</button>
    </div>
  )
}

export default PricingLevel
