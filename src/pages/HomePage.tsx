import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink,
  IonList,
  IonItem
} from '@ionic/react';
import { entries } from '../data';
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