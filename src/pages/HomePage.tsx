import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink,
  IonList,
  IonItem,
  IonButton
} from '@ionic/react';
import { entries } from '../data';
import { auth } from '../firebase';

function formMoney(amount: any) {
  return '$' + amount.toFixed(2);
}
const HomePage: React.FC = () => {
  const balance = 100;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
          <IonButton slot = "end"color= "medium" expand="block" onClick={() => auth.signOut()}>
            Logout
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        Home {formMoney(balance)}
        Go to <IonRouterLink routerLink="/my/settings" >Settings</IonRouterLink>
        <IonList>
          {entries.map((item, index) => (
            <IonItem button key={index}
              routerLink={`/my/entry/${item.id}`}>
              {item.title}
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default HomePage;