import React, { useState } from 'react';
import styled from 'styled-components';

function getOperatingSystem(window) {
  let operatingSystem = 'Not known';
  if (window.navigator.appVersion.indexOf('Win') !== -1) { operatingSystem = 'Windows OS'; }
  if (window.navigator.appVersion.indexOf('Mac') !== -1) { operatingSystem = 'MacOS'; }
  if (window.navigator.appVersion.indexOf('X11') !== -1) { operatingSystem = 'UNIX OS'; }
  if (window.navigator.appVersion.indexOf('Linux') !== -1) { operatingSystem = 'Linux OS'; }
  return operatingSystem;
}

const CommandListItem = (props) => {
  const OS = getOperatingSystem(window)

  let command = props.command
  if (OS !== 'MacOS') {
    command = props.command.replace("CMD", "Alt");
  }

  const CommandListItemContainer = styled.div`
    position: relative;
  `

  const CommandLabel = styled.label`
    position: absolute;
    left: 10px;
  `

  const CommandDescription = styled.p`
    position: absolute;
    right: 10px;
  `

  return (
    <div>
      <CommandListItemContainer>
        <CommandLabel>{command}</CommandLabel>
        <CommandDescription>{props.description}</CommandDescription>
      </CommandListItemContainer>
    </div>
  )
}

export default CommandListItem 