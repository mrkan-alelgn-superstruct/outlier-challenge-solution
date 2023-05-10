import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 200px;
  padding: 3px;
  border: 1px solid ${(props) => (props.fade ? '#888' : '#333')};
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: ${(props) => (props.selected ? '#ccc' : props.fade ? '#999' : '#222')};
  background-color: ${(props) => (props.selected ? '#222' : '#ccc')};
`

const Index = ({ label, selected, onClick, disabled, fade }) => {
  return (
    <Button
      selected={selected}
      onClick={onClick}
      disabled={disabled}
      fade={fade}
    >
      {window.decodeURIComponent(label)}
    </Button>
  )
}

export default Index
