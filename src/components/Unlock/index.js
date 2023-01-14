import {useState} from 'react'

import {
  Container,
  Image,
  Para1,
  ButtonContainer,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlock, setLock] = useState(false)
  const displayImage = isUnlock
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const buttonText = isUnlock ? 'lock' : 'unlock'
  const paraText = isUnlock
    ? 'Your Device is Unlocked'
    : 'Your Device is Locked'
  const altText = isUnlock ? 'unlock' : 'lock'

  const toUnlock = () => setLock(prevStatus => !prevStatus)

  return (
    <Container>
      <Image src={displayImage} alt={altText} />
      <Para1>{paraText}</Para1>
      <ButtonContainer>
        <Button onClick={toUnlock}>{buttonText}</Button>
      </ButtonContainer>
    </Container>
  )
}

export default Unlock
