import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const RegisterPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Register</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <h1>Register Page</h1>
            </IonContent>
        </IonPage>
    );
};

export default RegisterPage;
