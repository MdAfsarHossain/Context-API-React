import Special from "../Special/Special";

const Cousin = ({name, asset}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <h4>{name}</h4>
            
            {asset && <Special asset={asset}></Special>}
        </div>
    );
};

export default Cousin;