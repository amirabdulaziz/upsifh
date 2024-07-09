import React, { useEffect, useState } from "react";
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonPage,
  IonPopover,
  IonRow,
  IonText,
  IonToolbar,
} from "@ionic/react";
import {
  ellipsisHorizontal,
  menuOutline,
  removeCircleSharp,
} from "ionicons/icons";
import AdminSidebar from "../../component/AdminSidebar";
import { getFeedback, updateFeedbackStatus } from "../../firebase/firebase";

const Dashboard: React.FC = () => {
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [popoverState, setPopoverState] = useState({
    showPopover: false,
    event: undefined as Event | undefined,
    feedbackId: undefined as string | undefined,
  });

  useEffect(() => {
    const fetchFeedback = async () => {
      const feedback = await getFeedback();
      setFeedbackList(feedback);
    };

    fetchFeedback();
  }, []);

  const handleStatusChange = async (feedbackId: string, status: number) => {
    await updateFeedbackStatus(feedbackId, status);
    const updatedFeedback = feedbackList.map((feedback) =>
      feedback.id === feedbackId ? { ...feedback, status } : feedback
    );
    setFeedbackList(updatedFeedback);
  };

  const getStatusText = (status: number) => {
    switch (status) {
      case 0:
        return "Pending";
      case 1:
        return "Approved";
      case 2:
        return "Rejected";
      default:
        return "Unknown";
    }
  };

  return (
    <>
      <AdminSidebar />
      <IonPage id="sidebarmenu">
        <IonHeader>
          <IonHeader className="ion-no-border shadow-none">
            <IonToolbar color="bg-primary" className="pt-8 text-primary">
              <div className="flex flex-cols justify-between items-center px-2">
                <IonRow>Welcome, Admin</IonRow>
                <IonRow>
                  <IonIcon
                    icon={menuOutline}
                    className="h-10 w-6"
                    onClick={() => {
                      const menu = document.querySelector(
                        'ion-menu[menu-id="first"]'
                      ) as HTMLIonMenuElement;
                      menu?.open();
                    }}
                  ></IonIcon>
                </IonRow>
              </div>
            </IonToolbar>
          </IonHeader>
        </IonHeader>
        <IonContent>
          <IonGrid>
            {feedbackList.map((feedback) => (
              <IonRow className="px-2" key={feedback.id}>
                <IonCard className="w-full shadow-none border-[1px] p-2 rounded-sm">
                  <IonCol>
                    <IonRow>
                      <div className="flex justify-between w-full">
                        <IonText>
                          <p>{feedback.name}</p>
                        </IonText>
                        <IonText>
                          <p>{getStatusText(feedback.status)}</p>
                        </IonText>
                      </div>
                    </IonRow>
                    <IonRow>
                      <IonText>
                        <p>{feedback.feedbackText}</p>
                      </IonText>
                    </IonRow>
                  </IonCol>
                  <div className="line-break"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <IonIcon
                        // style={{ color: "#ffffff" }}
                        src={ellipsisHorizontal}
                        className="w-6 h-6"
                        onClick={(e: any) =>
                          setPopoverState({
                            showPopover: true,
                            event: e,
                            feedbackId: feedback.id,
                          })
                        }
                      />
                      <IonPopover
                        isOpen={popoverState.showPopover}
                        event={popoverState.event}
                        onDidDismiss={() =>
                          setPopoverState({
                            showPopover: false,
                            event: undefined,
                            feedbackId: undefined,
                          })
                        }
                      >
                        <IonContent>
                          <IonList>
                            <IonItem
                              button={true}
                              detail={false}
                              onClick={() => {
                                if (popoverState.feedbackId) {
                                  handleStatusChange(
                                    popoverState.feedbackId,
                                    1
                                  );
                                  setPopoverState({
                                    showPopover: false,
                                    event: undefined,
                                    feedbackId: undefined,
                                  });
                                }
                              }}
                            >
                              <IonCol className="flex-1">
                                <IonText>Approve</IonText>
                              </IonCol>
                              <IonCol className="flex justify-end">
                                <IonIcon icon={removeCircleSharp} />
                              </IonCol>
                            </IonItem>
                            <IonItem
                              button={true}
                              detail={false}
                              onClick={() => {
                                if (popoverState.feedbackId) {
                                  handleStatusChange(
                                    popoverState.feedbackId,
                                    2
                                  );
                                  setPopoverState({
                                    showPopover: false,
                                    event: undefined,
                                    feedbackId: undefined,
                                  });
                                }
                              }}
                            >
                              <IonCol className="flex-1">
                                <IonText>Reject</IonText>
                              </IonCol>
                              <IonCol className="flex justify-end">
                                <IonIcon icon={removeCircleSharp} />
                              </IonCol>
                            </IonItem>
                          </IonList>
                        </IonContent>
                      </IonPopover>
                    </div>
                  </div>
                </IonCard>
              </IonRow>
            ))}
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Dashboard;
