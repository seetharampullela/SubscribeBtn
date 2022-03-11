// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscription: 'Subscribe'}

  onSubscription = () => {
    this.setState(prevState => {
      if (prevState.subscription === 'Subscribe') {
        return {subscription: 'Subscribed'}
      }
      return {subscription: 'Subscribe'}
    })
  }

  render() {
    const {subscription} = this.state
    return (
      <div className="container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onSubscription}>
          {subscription}
        </button>
      </div>
    )
  }
}
export default Welcome
