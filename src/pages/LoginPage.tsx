import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput, IonText, IonLoading } from '@ionic/react';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';
import { auth } from '../firebase';


const LoginPage: React.FC = () => {
    const { loggedIn } = useAuth();
    const [ email, setEmail ] = useState<any>('');
    const [ password, setPassword ] = useState<any>('');
    const [status, setStatus] = useState({loading: false, error:false});

    const handleLogin = async () => {
        try{
            setStatus({loading: true, error:false});
            const credential = await auth.signInWithEmailAndPassword(email, password);
            setStatus({loading: false, error:false});
            console.log('creadential:', credential);
        } catch(error){
            setStatus({loading: false, error:true});
            console.log('Error:', error)
        }
    }
    if (loggedIn) {
        return <Redirect to="/my/entries" />
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonList>
                    <IonItem>
                        <IonLabel position = "floating">Email</IonLabel>
                        <IonInput type = "email" value={email}
                            onIonChange={(event) => setEmail(event.detail.value)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position = "floating">Password</IonLabel>
                        <IonInput type = "password" value={password}
                            onIonChange={(event) => setPassword(event.detail.value)}
                        />
                    </IonItem>
                </IonList>
                {status.error &&
                    <IonText color = "danger">Your e-mail or password is wrong!</IonText>
                }
                <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
                <IonButton expand="block" fill="clear" routerLink="/register">Don't have an account?</IonButton>
                <IonLoading isOpen={status.loading}/>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
