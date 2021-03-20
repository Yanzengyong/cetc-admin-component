### 例子:
```jsx
  <AdvanceBtn />
```

```jsx static
import React from 'react'
import { AdvanceBtn } from 'cetc-admin-component'
import 'cetc-admin-component/dist/index.css'
import '@alifd/next/dist/next.css'

export default class Example extends React.Component {

  state = {
    displayAdvance: false
  }

  showAdvance = () => {
    this.setState({ displayAdvance: !this.state.displayAdvance})
  }

  render() {
    const { displayAdvance } = this.state
    return (
      <AdvanceBtn displayAdvance={displayAdvance} showAdvance={this.showAdvance} id="advanceBtn"/>
    )
  }
}

```
