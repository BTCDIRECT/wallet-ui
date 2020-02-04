import { connect } from 'react-redux'
import Pools from '~/components/Pools'

export default connect(state => state)(function(props) {
  const {
    library,
    onProvider,
    supportTokens = [],
    poolNames = [],
    riskFreePools = [],
    riskyPools = [],
  } = props
  const supports = {
    supportTokens,
    poolNames,
    riskFreePools,
    riskyPools,
  }

  return library ? (
    <div style={{ padding: 28 }}>
      <Pools library={library} {...supports} />
    </div>
  ) : (
    <div
      className="loading"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Loading
    </div>
  )
})
