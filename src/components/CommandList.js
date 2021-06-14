import React, { useState } from 'react';
import CommandListItem from './CommandListItem';
import styled from 'styled-components'

const CommandList = (props) => {
  const listContent = props.commands.map((item) => {
    return <CommandListItem 
      key={item.id}
      description={item.description}
      command={item.command}
    />
  })

  const ListContainer = styled.div`
    position: absolute;
    width: 450px;
    height: 163px;
    
    background: #F6F6F6;
    border: 1px solid #ECEDF2;
    box-sizing: border-box;
    border-radius: 3px;
  `

  return (
    <div>
      <ListContainer>
        {listContent}
      </ListContainer>
    </div>
  )
}

export default CommandList 