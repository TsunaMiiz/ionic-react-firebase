import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonRouterLink 
} from '@ionic/react';
const SettingsPage: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                Settings... <IonRouterLink routerLink="/my/entries">Entries</IonRouterLink>
            </IonContent>
        </IonPage>
    );
};
export default SettingsPage;