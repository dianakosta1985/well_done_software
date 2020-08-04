import styled from 'styled-components';
import { Typography } from '@material-ui/core';


export const StyledInput = styled.input`
  border: 1px solid #cccccc;
  border-radius: 4px; 
  padding: 0 10px;
  height: 20px;
  margin-left: 10px;
  width: 200px;
`;

export const StyledInputCordinate = styled.input`
  width: 84px;
  border: 1px solid #cccccc;
  border-radius: 4px; 
  padding: 0 10px;
  height: 20px;
  margin-left: 10px;
`;

export const Button = styled.input`
 display: flex;
 border-radius: 20px;
 border-color: transparent;
 padding: 0 20px;
 color: #ffffff;
 cursor: pointer;
 width: fit-content;
 height: 35px;
 background-color: #3f51b5;
`;

export const StyledLabel = styled.label`
  font-family:Arial; 
  font-size:14px; 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: right;
  width: 150px;
  line-height: 26px;
  margin-bottom: 10px;
`;

export const Container = styled.form`
  display: flex;
  max-width: 1000px;
`;

export const StyledTypography = styled(Typography)`
  flex-grow: 1;
  float: 'left';
  font-size:20px;
  padding-left:10px;
`;

