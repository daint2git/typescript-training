import React from 'react'
import ReactDOM from 'react-dom'
import lodashIsEmpty from 'lodash/isEmpty'
import lodashEsIsEmpty from 'lodash-es/isEmpty'
import lodash2ReduceRight from 'lodash/reduceRight'
import lodashEs2ReduceRight from 'lodash-es/reduceRight'
import lodash3Debounce from 'lodash/debounce'
import lodashEs3Debounce from 'lodash-es/debounce'
import lodash4CloneDeep from 'lodash/cloneDeep'
import lodashEs4CloneDeep from 'lodash-es/cloneDeep'

interface Props {
  message: string
}

function Root({ message }: Props) {
  return <div style={{ color: 'red' }}>{message}</div>
}

ReactDOM.render(<Root message="Hello React" />, document.getElementById('app'))
