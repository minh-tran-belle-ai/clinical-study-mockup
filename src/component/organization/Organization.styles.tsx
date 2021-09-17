import styled from "styled-components";

export const OrganizationComponent = styled.div`
.form-flex{
    justify-content: center;
    div{
        display: flex;
        justify-content: space-between;
        width: 400px;
        margin-left: 35vw;
        margin-bottom: 10px;
    }
}
    
`
export const SingleContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 10px;
`

export const LogoImg = styled.img`
    width: 100px;
    height: 100px;
`
export const Single = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 500px;
    margin-bottom: 10px;
    position: relative;
    box-shadow: 0 0 15px -5px;
    .inner-flex{
        display: flex;
        flex-direction: column;
        div{
            padding-left: 20px;
            display: flex;
            justify-content: space-around;
            //width: 50%;
            h6{

            }
            ul{
                width: 50%;
                text-align: left;
                list-style-type: none;
                padding-left: 0;
     }
        }
    }
    .header{
       
        h1{
            text-transform: uppercase;
            margin: 0;
            margin-bottom: 20px;
        }
    }
    span{
        align-self: flex-end;
    }
    
    .add{
        margin-left: 10px;
        width: 130px;
        color: #e6d7d7;
        background-color: #1f9655dc;
        &:hover{
            color: white;
            background-color: #10a134dc;
        }
        
    }
    .warning{
        align-self: center;
        width: 20px;
        padding: 0;
        color: #bb3210d2;
        background-color: transparent;
        &:hover{
            color: #b62424d4;
            background-color: transparent;
        }
        position: absolute;
        right: 5px; 
        top: 5px;
    }
    .bottom{
        margin-bottom: 10px;
        input{
            width: 180px;
        }
    }
    .top{
        margin-top: 60px;
    }
    
`
