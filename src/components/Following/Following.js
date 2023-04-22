import styled from "styled-components";
import config from "../../../config.json";

const StyledFollowing = styled.div`
    width: 100%;
    section{
        width: 100%;
        margin-left: 15px;
        div {
            display: flex;
            justify-content: flex-start;
            text-align: center;
            a {
                margin: 10px 15px;
                color: #000000;
                img {
                    width: 5.25rem;
                    border-radius: 50%;
                }
            }
        }
    }
`

export default function Following() {
    return (
        <StyledFollowing>   
            {console.log(config.PerfisFavoritos)}
            <section>
                <h2>Perfis Favoritos</h2>
                <div>
                  {config.PerfisFavoritos.map( (perfis) => {
                    return (
                        <a href={perfis.url}>
                            <img src={perfis.avatar} />
                            <p>{perfis.nickname}</p>
                        </a>
                    );
                  })}

                </div>
            </section>
        </StyledFollowing>
    )
}