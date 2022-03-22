import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  //text-align: center;
  animation: animateWrapper 0.5s;

  @keyframes animateWrapper {
    from {
      opacity: 0;

    } to {
      opacity: 1;

    }
  }

  #settingsIcon {
    position: absolute;
    right: 1.5%;
    width: 15%;
    align: right;
    margin: 3%;
    height: 40px;
  }

  #profileIcon {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
  
  h1 {
    color: var(--greyText);
    margin-bottom: 0;
    font-weight: 500;
  }
  
  h2 {
    color: #b5b5b5;
    margin-top: 0;
    font-weight: 500;
  }
  
`;

export const Image = styled.div`
  margin-top: 10%;
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightGrey);
  border-radius: 100%;

`;

export const Button = styled.button`
  width: 50%;
  height: 60px;
  color: var(--lightGrey);
  border: 0;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  background: var(--dirtyBlue);
  font-size: 1.2rem;

`;

export const Tabb = styled.div`
#main{
  background-color: #fff;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 30px 20px;
  overflow: hidden;
}
#tabs{
  position: relative;
}

span.diana {
  position: fixed;
  display: none;
}

.diana + a {
  display: block;
  float: left;
  height: 82px;
  width: 80px;
  line-height: 32px;
  padding: 0 10px;
  border: 1px solid #ddd;
  background-color: #eee;
  margin-bottom: -1px;
  border-radius: 8px 8px 0 0;
  margin-right: 10px;
  text-decoration:none;
}

.diana:target + a {
  background-color: #fff;
  border-bottom-color: #fff; 
}

#pnl_1, #pnl_2, #pnl_3{
  position: absolute;
  top: 31px;
  left: 0;
  border: none;
  clear: both;
  overflow: hidden;
}

  #pnl_1 > div, #pnl_2 > div, #pnl_3 > div{
    opacity: 0;
    transition: all 0.1s ease;
    padding: 30px;
  }

#uno:target ~ #pnl_1, #dos:target ~ #pnl_2, #tres:target ~ #pnl_3{
  position: static;
  border: 1px solid #ddd;
}

#uno:target ~ #pnl_1 > div, #dos:target ~ #pnl_2 > div, #tres:target ~ #pnl_3 > div{
  opacity: 1;
  transition: all 1s ease;
}

#hole{
  width:10%;
  margin-right: 20px;
  margin-bottom: 20px;
}

.button {
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04AA6D;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
}

.button:hover {background-color: #3e8e41}

.button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

`