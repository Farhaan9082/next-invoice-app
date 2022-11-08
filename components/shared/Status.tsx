interface status {
  invoiceStatus: string;
}

export default function Status({ invoiceStatus }: status) {
  let bgColor, circleColor, textColor;

  if (invoiceStatus === "pending") {
    bgColor = "bg-pending/10";
    circleColor = "bg-pending";
    textColor = "text-pending";
  } else if (invoiceStatus === "draft") {
    bgColor = "bg-draft/10";
    circleColor = "bg-draft";
    textColor = "text-draft";
  } else {
    bgColor = "bg-paid/10";
    circleColor = "bg-paid";
    textColor = "text-paid";
  }

  return (
    <div
      className={`${bgColor} w-28 h-10 my-2 rounded-md flex justify-center items-center md:my-0 md:py-2`}
    >
      <span className={`${circleColor} rounded-full w-2 h-2 mr-2`}></span>
      <h1 className={`${textColor} font-semibold capitalize`}>
        {invoiceStatus}
      </h1>
    </div>
  );
}
