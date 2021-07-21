import { Card } from '../../components/Card/Card';
import { P } from '../../components/Text/Typography';

interface Props {
    
}
export const ClosedRsvp = (props: Props) => {
    
    return (

        <Card>
                <P>RSVP is officially closed. We are no longer accepting additional RSVPs at this time.</P>
                <P><span className={''}>Can't make it to the event anymore? Contact either Stefano Hepburn or Charvonya Cox personally.</span></P>   
        </Card>
    )
}
