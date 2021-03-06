import React from 'react'
import {Row, Col} from 'reactstrap'
import {useHistory} from 'react-router-dom'
import CommonButton from 'routes/components/CommonButton'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
  title: {
    fontSize: '32px',
    color: '#403839',
    fontFamily: 'DINCondensed-Bold',
  },
})

export const SearchCriteria = () => {
  const classes = useStyles()
  const history = useHistory()
  const routeChange = () => {
    let path = '/order-center/create-new-order'
    history.push(path)
  }

  return (
    <div>
      <Row className="d-flex justify-content-between">
        <Col lg={{size: 6}} className="d-flex align-items-center">
          <p className={classes.title}>Order center</p>
        </Col>
        <Col lg="6" className="d-flex justify-content-end mb-2">
          <CommonButton onClick={routeChange} title="Add New Customer" buttonType="addItemButton" />
        </Col>
      </Row>
    </div>
  )
}

export default SearchCriteria
