import React from 'react'
import Navbar from './navbar'
import { withStyles } from '@material-ui/core'

const styles = {

}

const Media = props => {
    return (
        <div>
            <Navbar />
            <h1>Media Section</h1>
        </div>
    )
}
export default withStyles(styles)(Media)