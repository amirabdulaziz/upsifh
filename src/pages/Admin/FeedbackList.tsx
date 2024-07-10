import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonCard,
  IonCol,
  IonIcon,
  IonItem,
  IonList,
  IonPopover,
  IonRow,
  IonText,
  IonAlert,
  IonToolbar,
} from "@ionic/react";
import {
    checkmark,
  chevronBackOutline,
  ellipsisHorizontal,
  removeCircleSharp,
  stopCircleSharp,
  trash,
  close,
} from "ionicons/icons";
import {
  deleteFeedbackById,
  getFeedback,
  updateFeedbackStatus,
} from "../../firebase/firebase";
import { useHistory } from "react-router";

const FeedbackList: React.FC = () => {
  const history = useHistory();
  const [feedbackList, setFeedbackList] = useState<any[]>([]);
  const [popoverState, setPopoverState] = useState({
    showPopover: false,
    event: undefined as Event | undefined,
    feedbackId: undefined as string | undefined,
  });

  const [alertState, setAlertState] = useState({
    showAlert: false,
    feedbackId: undefined as string | undefined,
  });

  useEffect(() => {
    const fetchFeedback = async () => {
      const feedback = await getFeedback();
      setFeedbackList(feedback);
    };

    fetchFeedback();
  }, []);

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

  const handleStatusChange = async (feedbackId: string, status: number) => {
    await updateFeedbackStatus(feedbackId, status);
    const updatedFeedback = feedbackList.map((feedback) =>
      feedback.id === feedbackId ? { ...feedback, status } : feedback
    );
    setFeedbackList(updatedFeedback);
  };

  const deleteFeedback = async (feedbackId: string) => {
    await deleteFeedbackById(feedbackId);
    const updatedFeedback = feedbackList.filter(
      (feedback) => feedback.id !== feedbackId
    );
    setFeedbackList(updatedFeedback);
  };

  const showDeleteAlert = (feedbackId: string) => {
    setAlertState({ showAlert: true, feedbackId });
  };

  const handleDelete = async () => {
    if (alertState.feedbackId) {
      await deleteFeedback(alertState.feedbackId);
      setAlertState({ showAlert: false, feedbackId: undefined });
    }
  };

    const getStatusIcon = (status: number) => {
      switch (status) {
        case 0: // Pending
          return { icon: stopCircleSharp, color: "#d4c685" };
        case 1: // Approved
          return { icon: checkmark, color: "#4BB543" };
        case 2: // Rejected
          return { icon: close, color: "#ff0505" };
        default:
          return { icon: stopCircleSharp, color: "#ff0505" }; // Default to Pending
      }
    };

  return (
    <>
      <IonPage>
        <IonHeader className="ion-no-border border-b-[1px]">
          <IonToolbar>
            <div className="flex flex-row justify-between items-center px-4 pt-6 pb-3">
              <div className="flex flex-row items-center">
                <IonIcon
                  src={chevronBackOutline}
                  className="w-6 h-6"
                  onClick={() => history.goBack()}
                />
              </div>
              <div className="flex-grow flex justify-center items-center">
                <IonText className="text-lg font-bold">User Feedbacks</IonText>
              </div>
            </div>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {feedbackList.map((feedback) => (
            <IonRow className="" key={feedback.id}>
              <IonCard className="w-full shadow-sm  p-2 rounded-md border-[1px] border-[#d4c685]">
                <IonCol className="">
                  <IonRow className="pb-2">
                    <div className="flex justify-between w-full">
                      <IonRow className="space-x-1">
                        <IonIcon
                          style={{
                            color: getStatusIcon(feedback.status).color,
                          }}
                          icon={getStatusIcon(feedback.status).icon}
                          className="w-3 h-3"
                        />
                        <IonText className="rounded-md">
                          <p className="text-[10px] text-dark">
                            {getStatusText(feedback.status)}
                          </p>
                        </IonText>
                      </IonRow>

                      <IonRow>
                        <IonIcon
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
                                  <IonIcon
                                    style={{ color: "#4BB543" }}
                                    icon={checkmark}
                                  />
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
                                  <IonIcon
                                    icon={close}
                                    style={{ color: "#ff0505" }}
                                  />
                                </IonCol>
                              </IonItem>
                            </IonList>
                          </IonContent>
                        </IonPopover>
                      </IonRow>
                    </div>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <div className="">
                        <IonText>
                          <p className="text-xs font-bold text-dark">
                            {feedback.name}
                          </p>
                        </IonText>
                        <IonText>
                          <p className="text-sm text-dark">
                            {feedback.feedbackText}
                          </p>
                        </IonText>
                      </div>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <div className="line-break"></div>
                    <div className="flex justify-between items-center w-full">
                      <div className="flex items-center"></div>
                      <div className="flex items-center">
                        <IonIcon
                          src={trash}
                          className="w-4 h-4 mr-1"
                          onClick={() => showDeleteAlert(feedback.id)}
                        />
                      </div>
                    </div>
                  </IonRow>
                </IonCol>
              </IonCard>
            </IonRow>
          ))}
        </IonContent>
      </IonPage>

      {/* Alert for delete confirmation */}
      <IonAlert
        isOpen={alertState.showAlert}
        onDidDismiss={() =>
          setAlertState({ showAlert: false, feedbackId: undefined })
        }
        header={"Delete Feedback"}
        message={"Are you sure you want to delete this feedback?"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            cssClass: "secondary",
            handler: () => {
              setAlertState({ showAlert: false, feedbackId: undefined });
            },
          },
          {
            text: "Delete",
            handler: () => {
              handleDelete();
            },
          },
        ]}
      />
    </>
  );
};

export default FeedbackList;
