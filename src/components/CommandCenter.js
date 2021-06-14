import React, { useState } from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import bxQuestionMark from '@iconify/icons-bx/bx-question-mark';
import styled from 'styled-components'
import CommandList from './CommandList';

const INITIAL_COMMANDS = [
  { id: 1, description: 'Open the command pallete', command: 'CMD + K' },
  { id: 2, description: 'Go up and down the list', command: 'J or K' },
  { id: 3, description: 'When ticket is open, focus the response field', command: 'Enter' },
  { id: 4, description: 'Submit ticket response. (choose status)', command: 'CMD + Enter' },
  { id: 5, description: 'Exit/unfocus', command: 'Esc' },
  { id: 6, description: 'Change ticket', command: 'CMD + Arrow' }
]

const CommandCenter = () => {
  const [commandClicked, setCommandClicked] = useState(false)

  const commandClickHandler = (event) => {
    setCommandClicked((prevState) => { return !prevState })
    console.log(commandClicked)
  }

  const CommandButton = styled.div`
    position: absolute;
    right: 100px;
    bottom: 100px;
  `
  const CommandHolder = styled.div`
    position: relative;
    width: 100%;
    min-height: 600px;
  `

  if (commandClicked) {
    return (
      <div>
        <CommandList commands={INITIAL_COMMANDS} />
        <div onClick={commandClickHandler}>
          <Icon icon={bxQuestionMark} style={{color: '#928a8a', fontSize: '20px'}} />
        </div>
      </div>
    )
  }

  return (
    <CommandHolder> 
      <CommandButton onClick={commandClickHandler}>
        <Icon icon={bxQuestionMark} style={{color: '#928a8a', fontSize: '20px'}} />
      </CommandButton>
    </CommandHolder>
  )
}

export default CommandCenter