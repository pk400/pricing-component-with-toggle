import React, { useState } from 'react';
import './App.css';

import PricingToggle from './components/PricingToggle'
import PricingDetails from './components/PricingDetails'

function App() {
  const [pricingToggle, setPricingToggle] = useState(0)
  return (
    <div className="component_wrapper">
      <h1 className="title">Our Pricing</h1>
      <PricingToggle pricingToggle={pricingToggle} setPricingToggle={setPricingToggle} />
      <PricingDetails pricingToggle={pricingToggle} />
    </div>
  )
}

export default App;
