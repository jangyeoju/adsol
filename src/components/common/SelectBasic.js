'use client';

import * as React from 'react';
import styled from '@emotion/styled';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SelectBasic({
  placeholder,
  options,
  large,
  value,
  onChange,
}) {
  return (
    <>
      <StyledSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className={large ? 'large' : ''}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      >
        {options.map((option) => (
          <StyledMenuItem key={option.key} value={option.key}>
            {option.value}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </>
  );
}

const StyledFormControl = styled(FormControl)`
  outline: none;
  .large {
    padding: 0.6rem 0;
  }
`;

const StyledSelect = styled(Select)`
  font-size: 1.4rem;
  outline: none;
  background-color: #fff;
  & > div {
    padding: 0.5rem 1.2rem;
    min-width: 8rem;
  }
  fieldset {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  svg {
    width: 2rem;
    height: 2rem;
    top: auto !important;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1.4rem;
`;
