import styled from 'styled-components';

export const AreaHeader = styled.div`
height: 80px;
background-color: #791e94;
color: #fff;

.container{
    padding: 5px 20px;
    display: flex;
    aling-items: center;
    width: 100%;
}

    .logo{
    
        flex: 1;
    
    

        img{
            width: 25px;
        }

    }

    nav{

        ul{
            display: flex;
        }

        li{
            list-style: none;
            margin-left: 30px;
        }


    }
`;