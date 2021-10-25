import Card from "../../../UI/Card";

const PostListItem = (props) => {
    return (
        <>
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
        </>
    );
};

export default PostListItem