import { signIn, useSession } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';

import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId:string;
}

export function SubscribeButton({ priceId } : SubscribeButtonProps){
    const [ session ] = useSession();

    async function handleSubscribe(){
        if(!session){
            signIn('github');
            return;
        }

        try {
            const resoponse = await api.post('./subscribe')
            
            const { sessionId } = resoponse.data;
            const stripe = await getStripeJs();

            await stripe.redirectToCheckout({sessionId})
        } catch(err){
            alert(err.message);
        }
            
       
    }
   
   
    return(
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubscribe}
        >
            Subscribe Now
        </button>
    )
}