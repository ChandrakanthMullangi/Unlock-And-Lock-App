// Write your code here

import {useState} from 'react'

import {Main, Image, Paragraph, Button} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(false)

  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'

  const imageAlt = isLocked ? 'unlock' : 'lock'

  const onClickLock = () => {
    setLock(prevState => !prevState)
  }

  return (
    <Main>
      <Image src={imageUrl} alt={imageAlt} />
      <Paragraph>
        {isLocked ? 'Your Device is Unlocked' : 'Your Device is Locked'}
      </Paragraph>
      <Button type="button" onClick={onClickLock}>
        {isLocked ? 'Lock' : 'Unlock'}
      </Button>
    </Main>
  )
}

export default Unlock
