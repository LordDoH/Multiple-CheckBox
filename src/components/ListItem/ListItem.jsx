import React from 'react';
import styled from 'styled-components';
import Unchecked from '../../assets/images/checkbox--unchecked.svg';
import Checked from '../../assets/images/checkbox--checked.svg';

const Item = styled.li`
  margin-bottom: 24px;
  font-size: 1rem;
`;

const Label = styled.label`
  cursor: pointer;
  background-image: url(${Checked});
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  min-height: 20px;
  padding-left: 30px;
`;

const Label2 = styled.label`
  cursor: pointer;
  background-image: url(${Unchecked})};
  background-position: left top;
  background-repeat: no-repeat;
  background-size: 20px 20px;
  min-height: 20px;
  padding-left: 30px;
`;

const Input = styled.input`
  display: none;
`;

const Name2 = styled.span`
  text-decoration: none;
  color: #4e4e4e;
`;

const Name = styled.span`
  text-decoration: line-through;
  color: #c9cdd1;
`;

function ListItem({ id, name, state, onClick }) {
  // eslint-disable-next-line
    (state);

  return (
    <div>
      {state ? (
        <Item>
          <Label htmlFor={`episode-${id}`} onClick={onClick}>
            <Input
              type="checkbox"
              name={`episode-${id}`}
              id={`episode-${id}`}
            />
            <Name>{`${id} || ${name}`}</Name>
          </Label>
        </Item>
      ) : (
        <Item>
          <Label2 htmlFor={`episode-${id}`} onClick={onClick}>
            <Input
              type="checkbox"
              name={`episode-${id}`}
              id={`episode-${id}`}
            />
            <Name2>{`${id} || ${name}`}</Name2>
          </Label2>
        </Item>
      )}
    </div>
  );
}

export default ListItem;
