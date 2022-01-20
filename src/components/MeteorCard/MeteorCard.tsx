import { Meteor } from '../../common/interfaces'
import Content from './Content'
import Title from './Title'
import './style.scss'

const meteorCardData = (meteor: Meteor) => {
  return { 
    TitleComponent: <Title title={meteor.name}/>, 
    ContentComponent: (
      <Content
        year={meteor.name}
        mass={meteor.mass}
        coords={meteor.coords}
      />
    ) 
  }
}

export default meteorCardData
