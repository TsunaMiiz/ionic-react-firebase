import {
    IonButtons,
    IonBackButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import React from 'react'
import { useParams } from 'react-router';
import { entries } from '../data';
interface RouteParams {
    id: string;
    title: string
}
const EntryPage: React.FC = () => {
    const { id } = useParams<RouteParams>();
    const item = entries.find((item) => item.id === id);
    if (!item) {
        throw new Error(`No such entry ${id}`);
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton/>
                    </IonButtons>
                    <IonTitle>{item.title}  {id}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                This is Entry...
                <p>{item.description}</p>
            </IonContent>
        </IonPage>
    );
};
export default EntryPage;
