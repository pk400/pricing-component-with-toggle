import React, { useEffect, useState } from 'react'

import pricing from './pricing.json'
import PricingLevel from './PricingLevel'

const PricingDetails = ({
  pricingToggle
}) => {
  return(
    <div className='pricing_details'>
      {pricing.map(
        details => <PricingLevel
          details={details}
          pricingToggle={pricingToggle} />)}
    </div>
  )
}

export default PricingDetails
