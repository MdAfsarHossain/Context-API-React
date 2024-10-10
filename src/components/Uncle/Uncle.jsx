import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name="Rohim" asset={'Gold'}></Cousin>
                <Cousin name="Tinni"></Cousin>
            </section>
        </div>
    );
};

export default Uncle;