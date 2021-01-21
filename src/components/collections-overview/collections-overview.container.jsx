import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { compose } from "redux"

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors"
import WithSpinner from "../with-spinner/with-spinner.component"
import CollectionsOverview from "./collections-overview.component"

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

// compose is something redux offers to make it easier to see what is going on
// it does the exact same thing as the commented out version underneath
// note: compose evaluates from right to left
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview)

// a perfectly fine way to nest the HOC Components -- note: they evaluate from inside out
// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer
