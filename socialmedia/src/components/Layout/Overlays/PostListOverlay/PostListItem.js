import { Fragment } from "react";
import Card from "../../../UI/Card";

const PostListItem = (props) => {
    return (
        <Fragment>
        {props.index === 0 &&
            <div ref={props.myRef} onClick={props.onPicked}>
                <Card item={props.title}/>
            </div>
        }
        
        {props.index >= 1 &&
            <div onClick={props.onPicked}> 
                <Card item={props.title} />
            </div>
        }
        </Fragment>
    );
};

export default PostListItem