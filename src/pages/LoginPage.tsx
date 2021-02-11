import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput } from '@ionic/react';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';
import { auth } from '../firebase';

interface Props {
    onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
    const { loggedIn } = useAuth();
    const [ email, setEmail ] = useState<any>('');
    const [ password, setPassword ] = useState<any>('');

    const handleLogin = async () => {
        const credential = await auth.signInWithEmailAndPassword('test@sdtc.ac.th', '12345678');
        console.log('creadential:', credential);
        onLogin();
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
                <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
