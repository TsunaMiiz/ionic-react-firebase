import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect } from 'react-router-dom';

interface Props {
    loggedIn: Boolean;
    onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ loggedIn, onLogin }) => {
    if(loggedIn) {
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
                <h1>Login Page</h1>
                <IonButton expand="block" onClick={onLogin}>Login</IonButton>

            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
