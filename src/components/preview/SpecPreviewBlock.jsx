import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { getAllPreviews } from '../../selector'
import { connect } from 'react-redux'
import * as R from 'ramda'
import SpecPreview from './SpecPreview'

class SpecPreviewBlock extends Component {
  render() {
    const columns = this.columns

    return (
      <Fragment>
        <div className="container">
          <div className="columns">
            {columns.map((rows, i) => (
              <div key={i} className="column">
                {rows.map((spec, j) => <SpecPreview key={`${i}-${j}`} content={spec.preview} />)}
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }

  get columns() {
    const { previews } = this.props

    const length = previews.length
    const ITEMS_IN_ROW = 3
    const itemsInLastRow = length % ITEMS_IN_ROW
    const rowsCount = (length - itemsInLastRow) / ITEMS_IN_ROW + (itemsInLastRow ? 1 : 0)

    return R.range(1, rowsCount + 1).reduce(
      (memo, rowIndex) => {
        let previewChunkStartIndex = rowIndex > 0 ? (rowIndex - 1) * ITEMS_IN_ROW : 0
        let previewChunkEndRowIndex = rowIndex > 0 ? rowIndex * ITEMS_IN_ROW : ITEMS_IN_ROW
        if (rowIndex === rowsCount) {
          previewChunkEndRowIndex += itemsInLastRow
        }
        let chunk = previews.slice(previewChunkStartIndex, previewChunkEndRowIndex)

        if (chunk.length > 0) {
          memo[0].push(chunk[0])
        }
        if (chunk.length > 1) {
          memo[1].push(chunk[1])
        }
        if (chunk.length > 2) {
          memo[2].push(chunk[2])
        }

        return memo
      },
      [[], [], []]
    )
  }
}

SpecPreviewBlock.propTypes = {
  previews: PropTypes.array.isRequired
}

SpecPreviewBlock.defaultProps = {
  previews: []
}

const mapStateToProps = (state) => ({
  previews: getAllPreviews(state)
})

export default connect(mapStateToProps)(SpecPreviewBlock)
