import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import _ from "lodash";

import { SectionHeader } from "../components";
import { switchCart, addFruit } from "../store/actions";
import numWithCommas from "../shared/numWithCommas";
import authReducer from "../store/reducers/auth";

const Fruit = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100vw;
  min-height: 94vh;
  padding: 40px 0;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.4); */
  background: #2a2a2a;
  z-index: -100;
`;

const Container = styled.div`
  position: relative;
  width: 70%;
  min-height: 94vh;
  margin: auto;
  padding-bottom: 20px;
  box-sizing: border-box;
  background: #fefefe;
  padding: 20px 50px;
  padding-top: 70px;
  border-radius: 10px;
`;

const Separator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Name = styled.h1`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  margin: 0;
  margin-right: 20px;
`;

const Type = styled.h1`
  font-weight: 600;
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
  margin: 30px auto;
  margin-top: 50px;
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
  margin-bottom: 20px;
`;

const InfoContent = styled.div`
  width: 50%;
  padding-left: ${props => props.padding};
`;

const Info = styled.p`
  font-size: 1.5rem;
  letter-spacing: 0px;
  margin: 0;
  margin-bottom: 20px;
  line-height: 2.1rem;
  text-align: justify;
`;

const Image = styled.div`
  width: 100%;
  height: 250px;
  height: 30vh;
  background: #ddd;
  margin-bottom: 20px;
`;

const fruit = props => {
  const findFruit = id => {
    let fruit = null;
    if (_.isEmpty(props.fruits)) {
      console.log(props.fruits);
      renderRedirect = true;
      return null;
    }

    for (var fruitType in props.fruits) {
      if (fruit != null) break;

      for (let i = 0; i < props.fruits[fruitType].length; i++) {
        const fruitInArr = props.fruits[fruitType][i];

        if (fruitInArr.id == id) {
          fruit = fruitInArr;
          break;
        }
      }
    }

    return fruit != null ? fruit : null;
  };

  let renderRedirect = false;
  const fruit = findFruit(props.match.params.id);

  const renderInfo = () => {
    // console.log(fruit.info.split("\\n"));
    return fruit.info.split("\\n").map((info, id) => {
      return <Info key={id}>{info}</Info>;
    });
  };

  const renderButton = () => {
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
    if (renderRedirect) {
      return <Redirect to="/fruits" />;
    }

    return (
      <Fruit>
        <Background />
        <Container>
          <Separator>
            <Name>{fruit.name}</Name>
            <Type>{fruit.type}</Type>
          </Separator>
          <Separator>
            <Price>PRICE: {`$${numWithCommas(fruit.price)}`}</Price>
            {renderButton()}
          </Separator>
          <Hr />
          <InfoImage>
            <InfoContent>
              <Image />
              <SectionHeader name="english name" />
              <Info>{fruit.english_name}</Info>
              <SectionHeader name="meaning" />
              <Info>{fruit.meaning}</Info>
            </InfoContent>
            <InfoContent padding="50px">
              <SectionHeader name="Info" />
              {renderInfo()}
            </InfoContent>
          </InfoImage>
        </Container>
      </Fruit>
    );
  };

  return renderContent();
};

const mapStateToProps = state => {
  return {
    fruits: state.fruits.fruits,
    cart: state.cart.cart,
    isLogged: state.auth.isLogged
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFruit: id => dispatch(addFruit(id)),
    switchFruits: () => dispatch(switchFruits()),
    switchCart: () => dispatch(switchCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(fruit);
