import ExistingPaymentMethod from "./_components/ExistingPaymentMethod";
import PaymentHistory from "./_components/PaymentHistory";


const PaymentMethods = () => {
    return(
        <div className="md:p-10">
            <ExistingPaymentMethod />
            <PaymentHistory />
        </div>
    )
}

export default PaymentMethods;