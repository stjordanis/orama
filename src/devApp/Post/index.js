
import React, {PropTypes} from 'react'

import {Examples} from '../Post/Examples'
import {FetchTest} from '../Post/FetchTest'
import {Page404} from '../Page404'

export const Post = props => {
  switch (props.routerSubSection) {
    case 'examples':
      return <Examples {...props}/>
    case 'fetch-test':
      return <FetchTest {...props}/>
    default:
      return <Page404/>
  }
}
Post.propTypes = {
  routerSubSection: PropTypes.string,
}

export const postsData = [
  {
    title: 'Examples',
    description: 'Base examples',
    id: 'examples',
  },
  {
    title: 'Fetch test',
    description: 'Change dimensions on a fetched data',
    id: 'fetch-test',
  },
]