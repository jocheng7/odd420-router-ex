import styled from 'styled-components';

export const Row=styled.div`
    padding:0;
    display: flex;
`

export const Column = styled.div`
    padding:0;
    display: flex;
`


export const FlexSpan =styled.span`
    flex:2;
`


const PRIMARYCOLOR = {
  COLOR: '#ffab40',
  OFFLINECOLOR: 'red',
  TEXTCOLOR: '#000000',
  TEXTALPHAMIN:'.59',
  TEXTALPHAMAX:'1'
};
const HEADING = {
  VSPACE: '10'
}
const SPACEONE = '.5';

const Row = styled.div`
  padding: 0 ${props => props.space ? props.space : '0'};
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: ${props => props.rowJustify ? props.rowJustify: "center"};

  @media (max-width: 700px) {
		flex-direction: ${props => props.stack ? 'column' : 'row'};
	}
`

const Column = styled.div`
  padding: ${props => props.space ? props.space : '0'} 0;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Container = Column.extend`
  justify-content: center;
  width:100%;
  align-items: center;
`
const Paper = Column.extend`
  box-shadow:  0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  justify-content: center;
  align-items: center;
  margin: 20px;
  padding: ${props => props.paperPadding ? props.paperPadding: "20px"};
  margin-top: 50px;
`
const MenuBar = styled.section`
  background: ${props => props.connected ? PRIMARYCOLOR.COLOR : PRIMARYCOLOR.OFFLINECOLOR };
  width: 100%;
`
const FlexSpan = styled.span`
  flex:2;
`
const H4=styled.h4`
  padding: ${HEADING.VSPACE}px 0px;
`
const H5=styled.h5`
  padding: ${HEADING.VSPACE}px 0px;
`

const HeaderContainer = styled.div`
  width: 100%;
  height: 200px;
box-shadow:  0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);

`

const HeroHeaderImg = styled.div`
  height: 200px;
  width: 100%;
  background: ${PRIMARYCOLOR.COLOR};
  background-image: url(${props => props.background ? props.background: "none"});
  background-position: center;
  background-size: cover;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 500px) {

}
`

const HeaderOverlay = styled.div`
  height: 200px;
  width: 100%;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 44px;
  display: ${props => props.headerOverlay ? "block":"none"};
`

const HeaderText = styled.h2`
  color: ${props => props.headerTextColour ? props.headerTextColour: "white"};
  text-align: center;
  position: relative;
  z-index: 10;
  width: ${props => props.headerTextWidth ? props.headerTextwidth: "70%"};
@media (max-width: 500px) {
  
  width: 70%;
}
`

const Button=styled.button`
  width: 95%;
  max-width: 120px;
  border: none;
  padding: 8px;
  border-radius: 2px; 
  background: ${PRIMARYCOLOR.COLOR};
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  
  :hover {
    background-color: gold;
  }
`
const MenuIcon = styled.a`
  color: ${PRIMARYCOLOR.TEXTCOLOR};
  opacity: ${PRIMARYCOLOR.TEXTALPHAMIN};
  padding: ${SPACEONE}em;
  cursor: pointer;
  &:hover {
    opacity: ${PRIMARYCOLOR.TEXTALPHAMAX};
	}
`

const MenuText = styled.h4`
  padding: 12px;
  font-weight: 500;
`

const Form = styled.form`
display: flex;
flex-direction: column;
width: 300px;
`
const SubmitButton = styled.input`
width: 46%;
max-width: 100px;
background: #efefef;
border: none;
padding: 8px;
border-radius: 2px; 
color: ${PRIMARYCOLOR.TEXTCOLOR};
text-transform: uppercase;
font-size: 12px;
outline: none;
cursor: pointer;
  
  :hover {
    background-color: ${PRIMARYCOLOR.COLOR};
    color: white;
  }
`
const InputField = styled.input`
width: 90%;
margin-bottom: 1em;
border: none;
border-bottom: 1px solid #d2d0d0;
border-radius: 0px;
:focus{
  border: none;
  outline: none;
  border-bottom: 2px solid ${PRIMARYCOLOR.COLOR};
}
`
const TextAreaField = styled.textarea`
width: 100%;
`
const FormLabel = styled.h4`
margin-top: 10px;
text-align: left;
padding: 15px;
`

const SideNav = styled.div`
  width: 200px;
  height: 100%;
  background: white;
  position: absolute;
  left: ${props => props.open ? 0: "-100%"};
  top: 0;
  z-index: 40;
`

const NavOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  position: absolute;
  left: 0;
  top: 0;
  display: ${props => props.open ? "block": "none"} ;
`

const QuoteBlock = styled.div`
  width: 100%;
  padding: 10px;
  color: rgba(0,0,0,0.3);
  position: relative;
  bottom: 0px;
  text-align: center;
  display: flex;
  justify-content: center;
`
const Quote = styled.div`
`

const Quotation = styled.span`
  font-size: 32px;
  font-weight: 800;
  text-align: left;
  margin-right: 20px;
`



