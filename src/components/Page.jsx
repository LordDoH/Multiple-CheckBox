import React, { useState } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem/ListItem';
import Cover from '../assets/images/podcast-cover.png';

const Button = styled.button`
  background: #8c59ff;
  border: none;
  border-radius: 24px;
  text-transform: uppercase;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: bold;
  padding: 8px 25px;
  color: white;
  line-height: 1;
  letter-spacing: 2px;
  cursor: pointer;
  :hover {
    background: #543599;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  border-top-right-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 60px 80px;
  height: 450px;
  overflow-y: scroll;
`;

const ImageContainer = styled.div`
  filter: drop-shadow(0px 4px 24px #453f3f);
`;

const MainContainer = styled.div`
  background: #f3f3f3;
  color: #4e4e4e;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  font-family: 'Nunito Sans', sans-serif;
  justify-content: center;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #a7a7a7;
  margin: 0 0 40px 0;
`;

function Page() {
  const episodes = [
    {
      id: 1,
      name: "James Q Quick's Origin Story",
    },
    {
      id: 2,
      name: "Amy Dutton's Origin Story",
    },
    {
      id: 3,
      name: 'The Tech Behind Compressed.fm',
    },
    {
      id: 4,
      name: 'Starting a New Development Project',
    },
    {
      id: 5,
      name: 'How Do you Start a New Design Project?',
    },
    {
      id: 6,
      name: 'Freelancing (Part 1)',
    },
    {
      id: 7,
      name: 'Freelancing (Part 2)',
    },
    {
      id: 8,
      name: 'The Tech Behind jamesqquick.com',
    },
    {
      id: 9,
      name: 'Teh Tech Behind SelfTeach.me',
    },
    {
      id: 10,
      name: 'Design Fundamentals (Part 1)',
    },
  ];

  const [active, setActive] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [shift, setShift] = useState(false);

  const [last, setLast] = useState(0);

  const [del, setDel] = useState(0);

  const onKeyDown = (e) => {
    if (e.keyCode === 16) {
      setShift(true);
    }
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 16) {
      setShift(false);
    }
  };

  const onClick = (pos) => {
    const updator = active.map((e, index) => (index === pos ? !e : e));
    if (shift === true && updator[pos] === true) {
      for (let i = last; i <= pos; i += 1) {
        updator[i] = true;
        setDel(last);
      }
    } else if (shift === true && updator[pos] === false) {
      for (let i = del; i <= pos; i += 1) {
        updator[i] = false;
      }
    }
    setLast(pos);
    setActive(updator);
    // eslint-disable-next-line
    console.log(updator[pos])
  };
  return (
    <MainContainer onKeyDown={onKeyDown} onKeyUp={onKeyUp} tabIndex="0">
      <Card>
        <ImageContainer>
          <img src={Cover} alt="Compressed.fm" />
        </ImageContainer>
        <Content>
          <Title>Listen to all the Compressed.fm Episodes</Title>
          <List>
            {episodes.map((episode, index) => (
              <ListItem
                key={`${episode.name}+${episode.id}`}
                id={episode.id}
                name={episode.name}
                state={active[index]}
                onClick={() => onClick(index)}
              />
            ))}
          </List>
          <Button>Mark As Played</Button>
        </Content>
      </Card>
    </MainContainer>
  );
}

export default Page;
