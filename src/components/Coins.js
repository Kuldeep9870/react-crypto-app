import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { server } from '../index';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';
import { Button, Container, HStack, Radio, RadioGroup} from '@chakra-ui/react';




const Coins = () => {
  const [coins,setCoins]=useState();
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [page,setPage]=useState(1);
  const [currency,setCurrency]=useState("inr");

  const currencySymbol =currency==="inr"?"₹":currency==="eur"?"€":"$";

  const changePage=(page) =>{
    setPage(page);
    setLoading(true);
  }

  const btns=new Array(132).fill(1);


  useEffect(()=>{
    const fetchCoins= async()=>{

      try{
      const  {data} =await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
      setCoins(data);
      setLoading(false);
      /*console.log("Coins")
      console.log(data);*/
      }
      catch(error){
        setLoading(false);
        setError(true);

      }
    }
    fetchCoins();
  },[currency,page]);

  if(error)
  return(<ErrorComponent message={"Error while fetching Coins"}/>);

  return (
    <Container maxW={"container.xl"}>
      {loading ? <Loader/> :(
      <>
      <RadioGroup value={currency} onChange={setCurrency}>
        <HStack spacing={"4"}>
          <Radio value={"inr"}>INR</Radio>
          <Radio value={"usd"}>USD</Radio>
          <Radio value={"eur"}>EUR</Radio>
        </HStack>
      </RadioGroup>
      <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
      {coins.map((i)=>(
            <CoinCard 
                    key={i.id} 
                    id={i.id}
                    price={i.current_price}
                    name={i.name} 
                    img={i.image}
                    symbol={i.symbol}
                    url={i.url}
                    currencySymbol={currencySymbol}
            />
          ))}
      </HStack>
      <HStack w={"full"} overflow={"auto"} p={"8"}>
        {
          btns.map((item,index)=>(
            <Button key={index} bgColor={"black"} color={"white"}
             onClick={()=> changePage(index+1)}>{index+1}</Button>
          ))
        }
      </HStack>


      </>
      )}
    </Container>
  )
}


export default Coins;