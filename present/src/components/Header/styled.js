import styled from 'styled-components';

export const AreaHeader = styled.div`
height: 60px;
background-color: #791e94;
color: #fff;
font-size: 18px;
font-weight: 600;

.conteiner{
    padding: 5px 500px;
    display: flex;
    justify-content:flex-end;

}

    .logo{
        flex: 1;
    
        img{
            width: 50px;
           
        }

    }

    nav{

        ul{
            display: inline-flex;
        }

        li{
            list-style: none;
            margin-left: 100px;
            
        }


    }
`;