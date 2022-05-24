import React from 'react';
import ButtonStyled from '@material-ui/core/Button';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';



/** * Botão do MaterialUI com pequenos incrementos. * * * 
 * Lista de props completa: [Button](https://mui.com/pt/components/buttons/) */

const StyledButton = styled(ButtonStyled)` 
 width: 9.75rem; 
 height: 2.5rem; 
 box-shadow: 1px 2px 5px #00000029; 
 border-radius: 1.25rem !important; 
 font-weight: bold !important; 
 background: #fff;
  
 `;



export const Button = ({
  variant = 'contained',
  children,
  isLoading = false,
  color = 'primary',
  type = 'button',
  onClick,
  disabled = false,
}) => {

  return (
    <StyledButton
      color={color}
      variant={variant}
      type={type}
      onClick={onClick}
      disabled={disabled} >
      {isLoading ? (
        <CircularProgress
          style={{ color: '#FFF' }}
          size={25}
        />)
        : (children)}
    </StyledButton>);
};


