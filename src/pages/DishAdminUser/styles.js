import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import  { Link } from 'react-router-dom';



export const Container = styled.div`    
    .mobile-header {
    display: flex; 
    }
    .desktop-header {
    display: none; 
    }

    margin:0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100%;
    

    >main{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 60px;
        width: 300px;        
    
        >.restaurantDish {
            width: 264px;
            height: 264px;
            margin-bottom:20px;
        }    
        
        .dish{        
            .salad-ingredients{
                display: flex;
                flex-direction: column;
                align-items: center; 
                gap:24px;
                padding:0 15px;
                margin-bottom:24px;
            
                h1{
                font-family: Poppins;
                font-weight: 500;
                text-align: justify;
                font-size: 27.041px;
                }

                p{
                font-family: Poppins;
                font-weight: 400;
                text-align: justify;               
                font-size: 16px;
                }
                
            }

            .tags{
                display:flex;
                justify-content: space-between;
                flex-wrap: wrap;
                gap: 10px;
                margin-bottom:40px; 
                padding:0 15px;
            }
        
            .custom-button{
                width: 300px; 
                height: 48px;
                >button{
                    font-size: 16px;
                }
            } 
        }       
    }
   
    
       
    
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
        
        height:800px;
        .mobile-header {
            display: none; 
        }

        .desktop-header {
            display: flex;
            gap:10px;

        } 
        .icon {
            display: none; 
        }    

        display: grid;
        grid-template-rows: 94px 85px auto 94px;
        grid-template-areas:
        "header"
        "link"
        "content"
        "footer";
        
        > main {
            grid-area: content;     
            width: 1200px;
            height:500px;
            flex-direction: row;
            margin:0 auto;
            gap:40px;
            margin-bottom: 145px;   

        
            >.restaurantDish {
                width: 390px;
                height: 390px;
            }

            >.dish {                
                .salad-ingredients{                    
                    align-items: flex-start; 
                    margin-bottom: 10px;
                   

                    >h1 {                        
                        font-size: 40px;             
                        line-height: 140%; 
                        margin-bottom: 24px;
                    }

                    >p {
                        font-size: 24px;                       
                        line-height: 140%; 
                        margin-bottom: 24px;
                    }                    
                }

                 .tags{                
                    justify-content: flex-start;                
                    margin-bottom:40px;             
                    gap: 20px;
                }             
                    
                .custom-button{
                    width:150px; 
                    height: 48px;
                    position:relative;
                    left:20px;
                } 
            }
        }
            
    }
`;
 
export const ReturnLink = styled(Link)`
    height: 60px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    width: 320px;
    
        >img{
            width: 31px;
            height: 28px;
        }
        >p{
            display:flex;        
            align-items:center;
            color: ${({theme}) => theme.COLORS.WHITE};
            font-family: Poppins;
            font-size: 16px;       
            font-weight: 500;   
    
        }    

   
    @media (min-width: ${DEVICE_BREAKPOINTS.LG}) { 
    grid-area: link;
    
    margin:50px auto  ;    
    flex-direction:row;
    gap: 5px;
    width: 1137px;
    
    
        >img{
        width: 32px;
        height: 32px;
        }

        >p{
        font-size: 24px;
        font-weight: 700;
        line-height: 140%; 
        }                  
       
    }
`;
    
    
    
    
    
    
      
      

        
        
        
        
        
        
     
     
     
     
     


     















