import classes from './Checkout.modules.css'
const Checkout = (props) => {
    return <form>
        <div className={classes.control}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' />
        </div>
        <div className={classes.control}>
            <label htmlFor='street'>Street</label>
            <input type='text' id='street'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city'/>
        </div>
        <div className={classes.control}>
            <label htmlFor='postal'>Zip</label>
            <input type='text' id='zip'/>
        </div>
        <button>Confirm</button>

    </form>

};

export default Checkout;