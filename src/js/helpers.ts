import Notify from "devextreme/ui/notify";

export const transformData = <T>(data: Array<T>) => {
  const transformedData: Array<T> = [];

  for (const key in data) {
    const dataObj = {
      ...data[key],
      id: key,
    };

    transformedData.push(dataObj);
  }

  return transformedData;
};

export const createNotification = (message: string, type: string) => {
  Notify(
    {
      message: message,
      type: type,
      height: 45,
      width: 300,
      minWidth: 150,
      displayTime: 3500,
      animation: {
        show: {
          type: "fade",
          duration: 400,
          from: 0,
          to: 1,
        },
        hide: { type: "fade", duration: 40, to: 0 },
      },
    },
    {
      position: "bottom center",
      direction: "up-push",
    }
  );
};
