import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import _ from "lodash";

import { SectionHeader, Spinner } from "../components";
import { addFruit, switchFruits, fetchFruits } from "../store/actions";
import numWithCommas from "../shared/numWithCommas";

import w13 from "../assets/wallpaper/wallpaper13.jpg";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity:1;
  }
`;

const Fruit = styled.div`
  /* position: relative; */
  width: 100vw;
  max-width: 100vw;
  height: 100%;
  min-height: 94vh;
  padding: 40px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  /* background: #2a2a2a; */
  z-index: -50;
`;

const BackgroundImage = styled.img.attrs(props => ({
  src: props.src || ""
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -100;
`;

const Container = styled.div`
  position: relative;
  width: 70%;
  background: #fefefe;
  padding: 20px 50px;
  padding-top: 40px;
  border-radius: 10px;
  box-sizing: border-box;

  opacity: 0;
  animation: ${fadeIn} 1s 1s forwards;
`;

const ErrorContainer = styled.div`
  position: relative;
  width: 70%;
  background: #fefefe;
  padding: 20px 50px;
  border-radius: 10px;
  box-sizing: border-box;

  opacity: 0;
  animation: ${fadeIn} 1s 1s forwards;
`;

const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Name = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 2.5rem;
  margin: 0;
  margin-right: 20px;
`;

const Type = styled.h1`
  font-weight: 600;
  font-size: 2rem;
  margin: 0;
  text-transform: uppercase;
`;

const Price = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
  transform: translateX(20px);
`;

const Button = styled.button`
  outline: none;
  text-transform: uppercase;
  background: none;
  width: 170px;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 7px 15px;
  border: ${props =>
    props.inCart ? "3px solid #ff4000" : "3px solid #f50000"};
  cursor: pointer;
  border-radius: 20px;
  box-sizing: border-box;
  transform: translateX(-20px);
  color: ${props => (props.inCart ? "#ff4000" : "#f50000")};
  letter-spacing: 2px;

  transition: 0.3s;
  :hover {
    background: ${props => (props.inCart ? "#ff4000" : "#f50000")};
    color: white;
  }
`;

const Hr = styled.hr`
  overflow: visible; /* For IE */
  width: 75%;
  border: none;
  border-top: medium double rgba(0, 0, 0, 0.8);
  margin: 20px auto;
  margin-top: 40px;
  text-align: center;

  :after {
    content: "$$$";
    display: inline-block;
    position: relative;
    top: -0.7em;
    font-size: 1.5em;
    padding: 0 0.25em;
    background: rgb(249, 249, 249);
  }
`;

const InfoImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const InfoContent = styled.div`
  width: 50%;
  padding-left: 50px;
  box-sizing: border-box;
`;

const Info = styled.p`
  font-size: 1.3rem;
  letter-spacing: 0px;
  margin: 0;
  margin-bottom: 20px;
  line-height: 2.1rem;
  text-align: justify;
  box-sizing: border-box;
`;

const Image = styled.img.attrs(props => ({
  src: props.src || ""
}))`
  width: 100%;
  height: 100%;
  min-height: 35vh;
  background: #ddd;
  margin-bottom: 20px;
`;

const ErrorMsg = styled.p`
  text-align: center;
  letter-spacing: 0px;
  line-height: 1.5rem;
`;

const fruit = props => {
  const fruits = props.fruits;

  useEffect(() => {
    props.switchFruits();
    if (_.isEmpty(fruits)) {
      props.fetchFruits();
    }
  }, []);

  const findFruit = id => {
    let fruit = null;

    if (props.error) return null;

    for (var fruitType in fruits) {
      if (fruit != null) break;

      for (let i = 0; i < fruits[fruitType].length; i++) {
        const fruitInArr = fruits[fruitType][i];

        if (fruitInArr.id == id) {
          fruit = fruitInArr;
          break;
        }
      }
    }

    return fruit != null ? fruit : null;
  };

  const renderEnglishName = fruit => {
    if (fruit.english_name == "None" || fruit.english_name.length < 1) {
      return <Info>No Information Available</Info>;
    }

    return <Info>{fruit.english_name}</Info>;
  };

  const renderInfo = fruit => {
    if (fruit.info.length < 1) {
      return <Info>No Information Available</Info>;
    }

    return fruit.info.split("\\n").map((info, id) => {
      return <Info key={id}>{info}</Info>;
    });
  };

  const renderButton = fruit => {
    let button = (
      <Button onClick={() => props.addFruit(fruit.id)}>Add to cart</Button>
    );

    if (props.isLogged == false) {
      return (
        <Link to="/login">
          <Button inCart={true}>Add to cart</Button>
        </Link>
      );
    }

    props.cart.forEach(fruitInArr => {
      if (fruitInArr.id == fruit.id) {
        button = (
          <Link to="/cart">
            <Button inCart={true}>In cart</Button>
          </Link>
        );
      }
    });

    return button;
  };

  const renderContent = () => {
    const fruit = findFruit(props.match.params.id);

    if (props.error != null || fruit == null) {
      return (
        <ErrorContainer>
          <ErrorMsg>
            Could not fetch data. Please try again at a later time.
          </ErrorMsg>
        </ErrorContainer>
      );
    }

    return (
      <Container>
        <Separator>
          <Name>{fruit.name}</Name>
          <Type>{fruit.type}</Type>
        </Separator>
        <Separator>
          <Price>PRICE: {`$${numWithCommas(fruit.price)}`}</Price>
          {renderButton(fruit)}
        </Separator>
        <Hr />
        <InfoImage>
          <InfoContent>
            <Image src={fruit.imagelink} />
          </InfoContent>
          <InfoContent>
            <SectionHeader name="english name" />
            {renderEnglishName(fruit)}
            <SectionHeader name="meaning" />
            <Info>{fruit.meaning}</Info>
            <SectionHeader name="Info" />
            {renderInfo(fruit)}
          </InfoContent>
        </InfoImage>
      </Container>
    );
  };

  return (
    <Fruit>
      <BackgroundImage src={w13} />
      <Background />
      {props.loading ? <Spinner /> : renderContent()}
    </Fruit>
  );
};

const mapStateToProps = state => {
  return {
    fruits: state.fruits.fruits,
    loading: state.fruits.loading,
    cart: state.cart.cart,
    isLogged: state.auth.isLogged,
    error: state.fruits.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchFruits: () => dispatch(fetchFruits()),
    switchFruits: () => dispatch(switchFruits()),
    addFruit: id => dispatch(addFruit(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(fruit);
