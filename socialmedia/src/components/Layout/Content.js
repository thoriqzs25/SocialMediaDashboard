import classes from './Content.module.css';
import Type1 from "../UI/Types/Type1";
import Type2 from "../UI/Types/Type2";
import Type3 from "../UI/Types/Type3";
import Type4 from "../UI/Types/Type4";

const Content = () => {
    return (
        <div className={classes.grid}>
            <div className={classes.satu}> 
                <Type1 />
            </div>
            <div className={classes.dua}> 
                <Type2 />
            </div>
            <div className={classes.tiga}> 
                <Type3 />      
            </div>
            <div className={classes.empat}> 
                <Type4 />
            </div>
            <div className={classes.lima}> 
                <Type1 />
            </div>
        </div>
    );
};

export default Content;