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
  IonAlert, // Added IonAlert import
} from "@ionic/react";
import {
  checkmark,
  close,
  ellipsisHorizontal,
  menuOutline,
  removeCircleSharp,
  stopCircleSharp,
  trash,
  trashBinOutline,
  trashBinSharp,
} from "ionicons/icons";
import AdminSidebar from "../../component/AdminSidebar";
import {
  deleteFeedbackById,
  getFeedback,
  updateFeedbackStatus,
} from "../../firebase/firebase";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./dashboard.css";
import { useHistory } from "react-router";

const Dashboard: React.FC = () => {
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

  const countFeedbackStatus = (status: number) => {
    return feedbackList.filter((feedback) => feedback.status === status).length;
  };

  const totalPending = countFeedbackStatus(0);
  const totalApproved = countFeedbackStatus(1);
  const totalRejected = countFeedbackStatus(2);
  const totalFeedback = feedbackList.length;

  const data = [
    { name: "Pending", count: totalPending },
    { name: "Approved", count: totalApproved },
    { name: "Rejected", count: totalRejected },
    { name: "Total", count: totalFeedback },
  ];

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
      <AdminSidebar />
      <IonPage id="adminsidebarmenu">
        <IonHeader className="ion-no-border shadow-none">
          <IonToolbar color="bg-primary" className=" text-primary">
            <div className="flex flex-cols justify-between items-center px-2">
              <IonGrid>
                <IonCol>
                  <IonText>
                    <h2 className="font-bold text-xl">Dashboard</h2>
                    <div className="flex flex-row items-center">
                      <p className="text-[10px] m-0 flex items-center">
                        Check Feedback from users
                      </p>
                    </div>
                  </IonText>
                </IonCol>
              </IonGrid>
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
        <IonContent>
          <IonGrid>
            <IonRow className="px-2">
              <IonCol size="9">
                <h1 className="font-bold text-md">Chart Summary</h1>
              </IonCol>
            </IonRow>
            <IonCard className="px-2 shadow-sm border-[1px] bg-[#e9e2c2]">
              <IonRow className="">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </IonRow>
            </IonCard>
            <IonRow className="mx-[-5px]">
              <IonCol size="4">
                <IonCard className="p-2 shadow-sm  flex-grow space-y-1 bg-[#faf9f2] ">
                  <p className="text-center text-lg font-bold">
                    {totalPending}
                  </p>
                  <p className="text-center text-xs">
                    Total <br></br> Pending
                  </p>
                </IonCard>
              </IonCol>
              <IonCol size="4">
                <IonCard className="p-2 shadow-sm  flex-grow space-y-1 bg-[#f6f3e6]">
                  <p className="text-center text-lg font-bold">
                    {totalApproved}
                  </p>
                  <p className="text-center text-xs">
                    Total <br></br>Approved
                  </p>
                </IonCard>
              </IonCol>
              <IonCol size="4">
                <div className="flex flex-col h-full">
                  <IonCard className="p-2 shadow-sm  flex-grow space-y-1 bg-[#f2edda]">
                    <p className="text-center text-lg font-bold">
                      {totalRejected}
                    </p>
                    <p className="text-center text-xs">
                      Total <br></br>Rejected
                    </p>
                  </IonCard>
                </div>
              </IonCol>
            </IonRow>
            <IonRow className="px-1">
              <IonCol size="9">
                <h1 className="text-dark font-bold text-sm">Feedbacks</h1>
              </IonCol>
              <IonCol size="3">
                <h1
                  onClick={() => history.push("/feedbacklist")}
                  className="text-secondary text-right text-xs"
                >
                  View More
                </h1>
              </IonCol>
            </IonRow>
            {feedbackList.slice(0, 4).map((feedback) => (
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
                            // style={{ color: "#ffffff" }}
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
          </IonGrid>
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

export default Dashboard;
